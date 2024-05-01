const Food = require("../models/foodStoreSchema");
const { globalMiddleware } = require("../middlewares/globalMiddleware");

exports.createFood = async (req, res, next) => {
    try {
        if (!req.body.name || !req.body.price || !req.body.category) {
            return res.status(400).json({
                message: "Enter required fields"
            });
        }
        const newFood = await Food.create(req.body);
        const savedFood = await newFood.save();
        res.status(201).json(savedFood);
    } catch (err) {
        next(err);
    }
};

exports.getFoods = async (req, res, next) => {
    try {
        const food = await Food.find();
        res.status(200).json({
            count: food.length,
            data: food
        });
    } catch (err) {
        next(err);
    }
};

exports.getFood = async (req, res, next) => {
    try {
        const food = await Food.findById(req.params.id);
        if (!food) {
            return res.status(404).json({
                error: "Food not found"
            });
        }
        res.status(200).json(food);
    } catch (err) {
        next(err);
    }
};

exports.getFoodByName = async (req, res, next) => {
    try {
        const food = await Food.findOne({ name: req.params.name });
        if (!food) {
            return res.status(404).json({
                error: "Food not found"
            });
        }
        res.status(200).json({
            data: food
        });
    } catch (err) {
        next(err);
    }
};


exports.getCategories = async (req, res, next) => {
    try {
        const foods = await Food.find(); // Fetch all food items
        const categoryMap = new Map(); // Map to store categories with images

        // Iterate over each food item
        foods.forEach(food => {
            const { category, images } = food;
            // Check if the category already exists in the map
            if (!categoryMap.has(category)) {
                // If not, add the category to the map with the image at index 1
                categoryMap.set(category, images[1]);
            }
        });

        // Convert map values to array of objects
        const categoriesWithImages = Array.from(categoryMap, ([category, image]) => ({ category, image }));

        res.status(200).json({
            count: categoriesWithImages.length,
            data: categoriesWithImages
        });
    } catch (err) {
        next(err);
    }
};


exports.getFoodsByCategory = async (req, res, next) => {
    try {
        const category = req.query.category;
        const limit = req.query.limit || 10;
        if (category) {
            const filteredCategory = await Food.find({ category: category }).limit(parseInt(limit));
            res.json({
                count: filteredCategory.length,
                data: filteredCategory
            });
        }
    } catch (err) {
        next(err);
    }
};

exports.getFoodsByDiscount = async (req, res, next) => {
    try {
        const discount = req.query.discount;
        const limit = req.query.limit || 10;
        if (discount) {
            const filteredDiscountData = await Food.find({ discount: discount }).limit(parseInt(limit));
            res.json({
                count: filteredDiscountData.length,
                data: filteredDiscountData
            });
        }
    } catch (err) {
        next(err);
    }
};

exports.updateFood = async (req, res, next) => {
    try {
        const food = await Food.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        if (!food) {
            return res.status(404).json({
                error: "Food not found"
            });
        }
        res.status(200).json(food);
    } catch (err) {
        next(err);
    }
};

exports.deleteFood = async (req, res, next) => {
    try {
        const food = await Food.findByIdAndDelete(req.params.id);
        if (!food) {
            return res.status(404).json({
                error: "Food not found"
            });
        }
        res.status(200).json("Data deleted");
    } catch (err) {
        next(err);
    }
};