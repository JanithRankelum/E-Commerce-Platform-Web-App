// FashionPage.jsx
import 'react';
import Carousel from './components/Carousel/Carousel';  // Import the Carousel component
import Category from './components/Category/Category';  // Import the Category component
import Offers from './components/Offers/Offers';
import Popular from './components/Popular/Popular';
import Details from './components/Details/FDetails';

const Fashion = () => {
  return (
    <div>
      <Carousel /> {/* Render the carousel here */}
      <Category /> {/* Render the category here */}
      <Offers />  {/* Render the offers here */}
      <Popular /> {/* Render the popular products here */}
      <Details />
      {/* Other content related to the Electronic page */}
    </div>
  );
};

export default Fashion;
