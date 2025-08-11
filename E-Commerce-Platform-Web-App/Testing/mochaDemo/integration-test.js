// test/integration-test.js
const request = require('supertest');  // Supertest for HTTP assertions
const WebSocket = require('ws');      // WebSocket for WebSocket tests
const app = require('../../backend/server.js'); // Adjust the path accordingly
const { expect } = require('chai');    // Chai for assertions

describe('Integration Test: API Endpoints', function() {
  it('Api connected', function(done) {
    request(app)  // Supertest makes requests to your app
      .get('/api/data')  // Specify the HTTP method and endpoint
      .expect(200)  // Expect a 200 status code
      .end(function(err, res) {
        if (err) return done(err);  // If there's an error, pass it to done
        expect(res.body.message).to.equal('Hello, world!');  // Assert that the response message is as expected
        done();  // Mark the test as complete
      });
  });

  it(' POST requested and return the correct response', function(done) {
    request(app)
      .post('/api/data')
      .send({ name: 'John Doe' })  // Sending the name in the body
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.body.message).to.equal('Data received');  // Assert success message
        done();
      });
  });

  describe('WebSocket Integration Tests', function() {
    let ws1, ws2;

    before(function(done) {
      console.log("Starting WebSocket server and attempting to connect clients...");

      // Wait until the server is fully up and listening
      app.server.on('listening', () => {
        console.log("WebSocket server is now listening...");

        // Now, create WebSocket clients
        ws1 = new WebSocket('ws://localhost:8080');
        ws2 = new WebSocket('ws://localhost:8080');

        // Use Promise to handle client connection setup
        Promise.all([
          new Promise((resolve) => {
            ws1.on('open', () => {
              console.log("Client 1 connected...");
              resolve();
            });
            ws1.on('error', (err) => console.error("Error on ws1:", err));
          }),
          new Promise((resolve) => {
            ws2.on('open', () => {
              console.log("Client 2 connected...");
              resolve();
            });
            ws2.on('error', (err) => console.error("Error on ws2:", err));
          })
        ]).then(() => {
          console.log("Both WebSocket clients are connected.");
          done();  // Proceed to the tests after both clients are connected
        }).catch((err) => {
          console.error("Error in WebSocket client connection:", err);
          done(err);  // Pass the error to done if the clients fail to connect
        });
      });

      // Handling the case where the server is not listening
      app.server.on('error', (err) => {
        console.error('Error with WebSocket server:', err);
        done(err);  // Pass the error to done if the server fails to start
      });
    });

    after(function() {
      console.log("Closing WebSocket connections...");
      // Close WebSocket clients after tests
      if (ws1 && ws1.readyState === WebSocket.OPEN) ws1.close();
      if (ws2 && ws2.readyState === WebSocket.OPEN) ws2.close();
    });

    it('should send and receive messages via WebSocket', function(done) {
      const testMessage = { clientId: 1, payload: 'Hello, WebSocket!' };

      // Listen for messages from ws1
      ws1.on('message', function(message) {
        const parsedMessage = message.toString();
        console.log("Message received by ws1:", parsedMessage);
        expect(parsedMessage).to.include('Client 1 sent -> Hello, WebSocket!');
        done();  // Test complete
      });

      // Send a message from ws1 to the server
      ws1.send(JSON.stringify(testMessage));
    });

    it('should broadcast messages to all WebSocket clients', function(done) {
      const testMessage = { clientId: 1, payload: 'Broadcast message!' };

      let messageCount = 0;

      // Listen for messages from ws1
      ws1.on('message', function(message) {
        const parsedMessage = message.toString();
        if (parsedMessage.includes('Broadcast message!')) {
          messageCount++;
        }
      });

      // Listen for messages from ws2
      ws2.on('message', function(message) {
        const parsedMessage = message.toString();
        if (parsedMessage.includes('Broadcast message!')) {
          messageCount++;
        }
      });

      // Send a message from ws1 to broadcast to others
      ws1.send(JSON.stringify(testMessage));

      // Wait for both clients to receive the message
      setTimeout(() => {
        console.log("Checking message count...");
        expect(messageCount).to.equal(2); // Both ws1 and ws2 should have received the message
        done();  // Test complete
      }, 500);  // Allow time for messages to propagate
    });
  });
});



