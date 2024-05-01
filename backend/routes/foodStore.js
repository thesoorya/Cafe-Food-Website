const express = require("express")
const { createFood, getFoods, getFoodsByCategory, getFoodsByDiscount, getFood, updateFood, deleteFood, getFoodByName, getCategories } = require("../controllers/foodStoreController")
const { verifyAdmin } = require("../utils/jwt")
const router = express.Router()

/* router.get("/rr", verifyAdmin, (req, res) => {
    res.send("verified")
}) */

router.post("/", verifyAdmin,  createFood)
router.get("/category", getFoodsByCategory)
router.get("/discount", getFoodsByDiscount)
router.get("/:id", getFood)
router.get("/itemsname/:name", getFoodByName)
router.get("/items/categories", getCategories)
router.get("/", getFoods)
router.put("/:id", verifyAdmin, updateFood)
router.delete("/:id", verifyAdmin, deleteFood)

module.exports = router