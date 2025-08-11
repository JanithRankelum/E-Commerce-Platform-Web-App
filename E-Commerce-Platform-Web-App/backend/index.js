const express = require("express");
const PORT = process.env.PORT || 8000;
const bcrypt = require('bcrypt');
const cors = require("cors");
const bodyParser = require("body-parser");
const User = require("./Models/UserSchema");
const UserAddress = require("./Models/UserAddressSchema");
/* Electronic */
const Phones = require("./Models/PhonesSchema");
const Watches = require("./Models/WatchesSchema");
const Networks = require("./Models/NetworksSchema");
const Games = require("./Models/GamesSchema");
const Cameras = require("./Models/CamerasSchema");
const Computers = require("./Models/ComputersSchema");
const Sounds = require("./Models/SoundsSchema");
const EOthers = require("./Models/EOthersSchema");
/* Furniture */
const Bathroom = require("./Models/BathroomSchema");
const Bedroom = require("./Models/BedroomSchema");
const Kitchen = require("./Models/KitchenSchema");
const Livingroom = require("./Models/LivingroomSchema");
const Diningroom = require("./Models/diningroomSchema");
const Officefurniture = require("./Models/OfficefurnitureSchema");
const Outdoorfurniture = require("./Models/OutdoorfurnitureSchema");
const HFOthers = require("./Models/HFOthersSchema");
/* Food */
const Vegetable = require("./Models/VegetablesSchema");
const Meat = require("./Models/MeatSchema");
const Fruits = require("./Models/FruitsSchema");
const FoodOther = require("./Models/Fruit&vegetablesotherSchema");
const FrozenFood = require("./Models/FrozenfoodsSchema");
const Fish = require("./Models/FishSchema");
const Beverage = require("./Models/BeveragesSchema");
const Desserts = require("./Models/DessertSchema");
/* Fashion */
const Fashionothers = require("./Models/FashionothersSchema");
const Clothing = require("./Models/ClothingSchema");
const Gemandjewellery = require("./Models/Gem&jewellerySchema");
const Hairextension = require("./Models/HairextensionSchema");
const Luggageandbags = require("./Models/Luggage&bagsSchema");
const Perfume = require("./Models/PerfumeSchema");
const Shoes = require("./Models/Shoesschema");
const Wallets = require("./Models/WalletsSchema");
/* Health and Beauty */
const Skincare = require("./Models/SkincareSchema");
const Wellnessandnutritions = require("./Models/WellnessandnutritionSchema");
const Toolandaccessories = require("./Models/Toolsandaccessories");
const Personalcare = require("./Models/PersonalcareSchema");
const Fragrances = require("./Models/FragrancesSchema");
const Haircare = require("./Models/HaircareSchema");
const Healthandbeautyothers = require("./Models/HealthandbeautyothersSchema");
const Makeup = require("./Models/MakeupSchema");
/* Groceries */
const Bakeryandbread = require("./Models/Bakery&breadSchema");
const Dairyandeggs = require("./Models/DairyandeggsSchema");
const Snackandchips = require("./Models/Snack&chips");
const Personalcareandhouse = require("./Models/Personalcare&householdSchema");
const Pantryandstaples = require("./Models/PantryandstaplesSchema");
const Herbsandspices = require("./Models/Herbsandspices");
const Healthandwellness = require("./Models/Health&wellnessSchema");
const Groceriesothers = require("./Models/GrocesoriesSchema");



const dotenv = require("dotenv");
const app = express();

require("./db");
app.use(bodyParser.json());

const allowedOrigins = [process.env.FRONTEND_URL];

app.use(
    cors({
        origin: function (origin, callback) {
            console.log("Received origin:", origin);
            if (!origin || allowedOrigins.includes(origin)) {
                // Allow requests with no origin (e.g., Postman or Curl)
                callback(null, true);
            } else {
                console.error(`Blocked by CORS: ${origin}`);
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true,
    })
);

app.get('/login', (req, res) => {
    res.json({
        message: 'okay it works alrady'
    })
})

/* User Sign up */
app.post('/login', async (req, res) => {
    try {
        const { email, phone, name, password } = req.body;

        // Input validation
        if (!email && !phone && !name && !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check for duplicate users
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" });
        }
        const existingUsername = await User.findOne({ name });
        if (existingUsername) {
            return res.status(400).json({ message: "Name already registered" });
        }

        // Create a new user
        const newUser = new User({ email, phone, name, password });
        await newUser.save();

        // Respond with success
        return res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error during registration:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

/* User Address */
app.post('/address', async (req, res) => {
    try {
        const { email, phone, name, password, address } = req.body;

        // Input validation
        if (!name && !address) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Create a new user
        const newUserAddress = new UserAddress({ name, address });
        await newUserAddress.save();

        // Respond with success
        return res.status(201).json({ message: "User Address registered successfully" });
    } catch (error) {
        console.error("Error during Address registration:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

/* User Login */
app.post("/validate-user", async (req, res) => {
    const { name, password } = req.body;

    try {
        // Find user by name
        const user = await User.findOne({ name });
        if (!user) {
            return res.status(401).json({ success: false, message: "Invalid credentials." });
        }

        // Verify password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid credentials." });
        }

        // Success response
        res.status(200).json({ success: true, message: "Login successful." });
    } catch (error) {
        console.error("Error validating user:", error);
        res.status(500).json({ success: false, message: "Server error. Please try again later." });
    }
});

/* Admin Add Product Phones */
app.post("/add-product", async (req, res) => {
    try {
        const { id, category, name, price, model, quantity, description, specification } = req.body;

        if (!id || !category || !name || !price || !model || !quantity || !description || !specification) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (category === "Phones") {
            const newProduct = new Phones({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Watches") {
            const newProduct = new Watches({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Networks") {
            const newProduct = new Networks({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Games") {
            const newProduct = new Games({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Cameras") {
            const newProduct = new Cameras({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Computers") {
            const newProduct = new Computers({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Sounds") {
            const newProduct = new Sounds({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "EOthers") {
            const newProduct = new EOthers({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Bathroom") {
            const newProduct = new Bathroom({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Bedroom") {
            const newProduct = new Bedroom({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Kitchen") {
            const newProduct = new Kitchen({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Livingroom") {
            const newProduct = new Livingroom({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Diningroom") {
            const newProduct = new Diningroom({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Officefurniture") {
            const newProduct = new Officefurniture({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Outdoorfurniture") {
            const newProduct = new Outdoorfurniture({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "HFOthers") {
            const newProduct = new HFOthers({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Vegetable") {
            const newProduct = new Vegetable({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Meat") {
            const newProduct = new Meat({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Fruits") {
            const newProduct = new Fruits({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "FoodOther") {
            const newProduct = new FoodOther({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "FrozenFood") {
            const newProduct = new FrozenFood({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Fish") {
            const newProduct = new Fish({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Beverage") {
            const newProduct = new Beverage({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Desserts") {
            const newProduct = new Desserts({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Fashionothers") {
            const newProduct = new Fashionothers({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Clothing") {
            const newProduct = new Clothing({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Gemandjewellery") {
            const newProduct = new Gemandjewellery({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Hairextension") {
            const newProduct = new Hairextension({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Luggageandbags") {
            const newProduct = new Luggageandbags({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Perfume") {
            const newProduct = new Perfume({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Shoes") {
            const newProduct = new Shoes({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Wallets") {
            const newProduct = new Wallets({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Skincare") {
            const newProduct = new Skincare({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Wellnessandnutritions") {
            const newProduct = new Wellnessandnutritions({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Toolandaccessories") {
            const newProduct = new Toolandaccessories({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Personalcare") {
            const newProduct = new Personalcare({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Fragrances") {
            const newProduct = new Fragrances({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Haircare") {
            const newProduct = new Haircare({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Healthandbeautyothers") {
            const newProduct = new Healthandbeautyothers({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Makeup") {
            const newProduct = new Makeup({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Bakeryandbread") {
            const newProduct = new Bakeryandbread({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Dairyandeggs") {
            const newProduct = new Dairyandeggs({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Snackandchips") {
            const newProduct = new Snackandchips({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Personalcareandhouse") {
            const newProduct = new Personalcareandhouse({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Pantryandstaples") {
            const newProduct = new Pantryandstaples({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Herbsandspices") {
            const newProduct = new Herbsandspices({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Healthandwellness") {
            const newProduct = new Healthandwellness({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }
        if (category === "Groceriesothers") {
            const newProduct = new Groceriesothers({
                id,
                category,
                name,
                price,
                model,
                quantity,
                description,
                specification,
            });

            await newProduct.save();
        }

        res.status(201).json({ message: "Product added successfully" });
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Phones */
app.get("/get-phones", async (req, res) => {
    try {
        const phones = await Phones.find();
        res.status(200).json(phones);
    } catch (error) {
        console.error("Error fetching phones:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Watches */
app.get("/get-watches", async (req, res) => {
    try {
        const watches = await Watches.find();
        res.status(200).json(watches);
    } catch (error) {
        console.error("Error fetching Watches:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Networks */
app.get("/get-networks", async (req, res) => {
    try {
        const networks = await Networks.find();
        res.status(200).json(networks);
    } catch (error) {
        console.error("Error fetching Networks:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Games */
app.get("/get-games", async (req, res) => {
    try {
        const games = await Games.find();
        res.status(200).json(games);
    } catch (error) {
        console.error("Error fetching Games:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Cameras */
app.get("/get-cameras", async (req, res) => {
    try {
        const cameras = await Cameras.find();
        res.status(200).json(cameras);
    } catch (error) {
        console.error("Error fetching Cameras:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Computers */
app.get("/get-computers", async (req, res) => {
    try {
        const computers = await Computers.find();
        res.status(200).json(computers);
    } catch (error) {
        console.error("Error fetching Computers:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Sounds */
app.get("/get-sounds", async (req, res) => {
    try {
        const sounds = await Sounds.find();
        res.status(200).json(sounds);
    } catch (error) {
        console.error("Error fetching Sounds:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get EOthers */
app.get("/get-eothers", async (req, res) => {
    try {
        const eothers = await EOthers.find();
        res.status(200).json(eothers);
    } catch (error) {
        console.error("Error fetching EOthers:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Bathroom */
app.get("/get-bathroom", async (req, res) => {
    try {
        const bathroom = await Bathroom.find();
        res.status(200).json(bathroom);
    } catch (error) {
        console.error("Error fetching Bathroom:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Bedroom */
app.get("/get-bedroom", async (req, res) => {
    try {
        const bedroom = await Bedroom.find();
        res.status(200).json(bedroom);
    } catch (error) {
        console.error("Error fetching Bedroom:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Kitchen */
app.get("/get-kitchen", async (req, res) => {
    try {
        const kitchen = await Kitchen.find();
        res.status(200).json(kitchen);
    } catch (error) {
        console.error("Error fetching Kitchen:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Livingroom */
app.get("/get-livingroom", async (req, res) => {
    try {
        const livingroom = await Livingroom.find();
        res.status(200).json(livingroom);
    } catch (error) {
        console.error("Error fetching Livingroom:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Diningroom */
app.get("/get-diningroom", async (req, res) => {
    try {
        const diningroom = await Diningroom.find();
        res.status(200).json(diningroom);
    } catch (error) {
        console.error("Error fetching Diningroom:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Officefurniture */
app.get("/get-officefurniture", async (req, res) => {
    try {
        const officefurniture = await Officefurniture.find();
        res.status(200).json(officefurniture);
    } catch (error) {
        console.error("Error fetching Officefurniture:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Outdoorfurniture */
app.get("/get-outdoorfurniture", async (req, res) => {
    try {
        const outdoorfurniture = await Outdoorfurniture.find();
        res.status(200).json(outdoorfurniture);
    } catch (error) {
        console.error("Error fetching Outdoorfurniture:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get HFOthers */
app.get("/get-hfothers", async (req, res) => {
    try {
        const hfothers = await HFOthers.find();
        res.status(200).json(hfothers);
    } catch (error) {
        console.error("Error fetching HFOthers:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Vegetable */
app.get("/get-vegetable", async (req, res) => {
    try {
        const vegetable = await Vegetable.find();
        res.status(200).json(vegetable);
    } catch (error) {
        console.error("Error fetching Vegetable:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Meat */
app.get("/get-meat", async (req, res) => {
    try {
        const meat = await Meat.find();
        res.status(200).json(meat);
    } catch (error) {
        console.error("Error fetching Meat:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Fruits */
app.get("/get-fruits", async (req, res) => {
    try {
        const fruits = await Fruits.find();
        res.status(200).json(fruits);
    } catch (error) {
        console.error("Error fetching Fruits:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get FoodOther */
app.get("/get-foodother", async (req, res) => {
    try {
        const foodother = await FoodOther.find();
        res.status(200).json(foodother);
    } catch (error) {
        console.error("Error fetching FoodOther:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get FrozenFood */
app.get("/get-frozenfood", async (req, res) => {
    try {
        const frozenfood = await FrozenFood.find();
        res.status(200).json(frozenfood);
    } catch (error) {
        console.error("Error fetching FrozenFood:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Fish */
app.get("/get-fish", async (req, res) => {
    try {
        const fish = await Fish.find();
        res.status(200).json(fish);
    } catch (error) {
        console.error("Error fetching Fish:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Beverage */
app.get("/get-beverage", async (req, res) => {
    try {
        const beverage = await Beverage.find();
        res.status(200).json(beverage);
    } catch (error) {
        console.error("Error fetching Beverage:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Desserts */
app.get("/get-desserts", async (req, res) => {
    try {
        const desserts = await Desserts.find();
        res.status(200).json(desserts);
    } catch (error) {
        console.error("Error fetching Desserts:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Fashionothers */
app.get("/get-fashionothers", async (req, res) => {
    try {
        const fashionothers = await Fashionothers.find();
        res.status(200).json(fashionothers);
    } catch (error) {
        console.error("Error fetching Fashionothers:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Clothing */
app.get("/get-clothing", async (req, res) => {
    try {
        const clothing = await Clothing.find();
        res.status(200).json(clothing);
    } catch (error) {
        console.error("Error fetching Clothing:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Gemandjewellery */
app.get("/get-gemandjewellery", async (req, res) => {
    try {
        const gemandjewellery = await Gemandjewellery.find();
        res.status(200).json(gemandjewellery);
    } catch (error) {
        console.error("Error fetching Gemandjewellery:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Hairextension */
app.get("/get-hairextension", async (req, res) => {
    try {
        const hairextension = await Hairextension.find();
        res.status(200).json(hairextension);
    } catch (error) {
        console.error("Error fetching Hairextension:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Luggageandbags */
app.get("/get-luggageandbags", async (req, res) => {
    try {
        const luggageandbags = await Luggageandbags.find();
        res.status(200).json(luggageandbags);
    } catch (error) {
        console.error("Error fetching Luggageandbags:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Perfume */
app.get("/get-perfume", async (req, res) => {
    try {
        const perfume = await Perfume.find();
        res.status(200).json(perfume);
    } catch (error) {
        console.error("Error fetching Perfume:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Shoes */
app.get("/get-shoes", async (req, res) => {
    try {
        const shoes = await Shoes.find();
        res.status(200).json(shoes);
    } catch (error) {
        console.error("Error fetching Shoes:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Wallets */
app.get("/get-wallets", async (req, res) => {
    try {
        const wallets = await Wallets.find();
        res.status(200).json(wallets);
    } catch (error) {
        console.error("Error fetching Wallets:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Skincare */
app.get("/get-skincare", async (req, res) => {
    try {
        const skincare = await Skincare.find();
        res.status(200).json(skincare);
    } catch (error) {
        console.error("Error fetching Skincare:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Wellnessandnutritions */
app.get("/get-wellnessandnutritions", async (req, res) => {
    try {
        const wellnessandnutritions = await Wellnessandnutritions.find();
        res.status(200).json(wellnessandnutritions);
    } catch (error) {
        console.error("Error fetching Wellnessandnutritions:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Toolandaccessories */
app.get("/get-toolandaccessories", async (req, res) => {
    try {
        const toolandaccessories = await Toolandaccessories.find();
        res.status(200).json(toolandaccessories);
    } catch (error) {
        console.error("Error fetching Toolandaccessories:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Personalcare */
app.get("/get-personalcare", async (req, res) => {
    try {
        const personalcare = await Personalcare.find();
        res.status(200).json(personalcare);
    } catch (error) {
        console.error("Error fetching Personalcare:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Fragrances */
app.get("/get-fragrances", async (req, res) => {
    try {
        const fragrances = await Fragrances.find();
        res.status(200).json(fragrances);
    } catch (error) {
        console.error("Error fetching Fragrances:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Haircare */
app.get("/get-haircare", async (req, res) => {
    try {
        const haircare = await Haircare.find();
        res.status(200).json(haircare);
    } catch (error) {
        console.error("Error fetching Haircare:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Healthandbeautyothers */
app.get("/get-healthandbeautyothers", async (req, res) => {
    try {
        const healthandbeautyothers = await Healthandbeautyothers.find();
        res.status(200).json(healthandbeautyothers);
    } catch (error) {
        console.error("Error fetching Healthandbeautyothers:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Makeup */
app.get("/get-makeup", async (req, res) => {
    try {
        const makeup = await Makeup.find();
        res.status(200).json(makeup);
    } catch (error) {
        console.error("Error fetching Makeup:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Bakeryandbread */
app.get("/get-bakeryandbread", async (req, res) => {
    try {
        const bakeryandbread = await Bakeryandbread.find();
        res.status(200).json(bakeryandbread);
    } catch (error) {
        console.error("Error fetching Bakeryandbread:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Dairyandeggs */
app.get("/get-dairyandeggs", async (req, res) => {
    try {
        const dairyandeggs = await Dairyandeggs.find();
        res.status(200).json(dairyandeggs);
    } catch (error) {
        console.error("Error fetching Dairyandeggs:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Snackandchips */
app.get("/get-snackandchips", async (req, res) => {
    try {
        const snackandchips = await Snackandchips.find();
        res.status(200).json(snackandchips);
    } catch (error) {
        console.error("Error fetching Snackandchips:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Personalcareandhouse */
app.get("/get-personalcareandhouse", async (req, res) => {
    try {
        const personalcareandhouse = await Personalcareandhouse.find();
        res.status(200).json(personalcareandhouse);
    } catch (error) {
        console.error("Error fetching Personalcareandhouse:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Pantryandstaples */
app.get("/get-pantryandstaples", async (req, res) => {
    try {
        const pantryandstaples = await Pantryandstaples.find();
        res.status(200).json(pantryandstaples);
    } catch (error) {
        console.error("Error fetching Pantryandstaples:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Herbsandspices */
app.get("/get-herbsandspices", async (req, res) => {
    try {
        const herbsandspices = await Herbsandspices.find();
        res.status(200).json(herbsandspices);
    } catch (error) {
        console.error("Error fetching Herbsandspices:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Healthandwellness */
app.get("/get-healthandwellness", async (req, res) => {
    try {
        const healthandwellness = await Healthandwellness.find();
        res.status(200).json(healthandwellness);
    } catch (error) {
        console.error("Error fetching Healthandwellness:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/* Get Groceriesothers */
app.get("/get-groceriesothers", async (req, res) => {
    try {
        const groceriesothers = await Groceriesothers.find();
        res.status(200).json(groceriesothers);
    } catch (error) {
        console.error("Error fetching Groceriesothers:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.get("/get-user-details/:name", async (req, res) => {
    const { name } = req.params;

    try {
        const user = await User.findOne({ name });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ email: user.email, phone: user.phone });
    } catch (error) {
        console.error("Error fetching user details:", error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
});

app.get("/get-user-address/:name", async (req, res) => {
    const { name } = req.params;

    try {
        const user = await UserAddress.findOne({ name });

        if (!user) {
            return res.status(404).json({ message: "User dosen't have a address" });
        }

        res.status(200).json({ address: user.address });
    } catch (error) {
        console.error("Error fetching user address:", error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
});


app.listen(PORT, () => {
    console.log('server running at' + PORT);
});