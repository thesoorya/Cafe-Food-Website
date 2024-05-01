const express = require("express")
const { getUsers, getUser, updateUser, deleteUser } = require("../controllers/userController")
const { verifyAdmin, verifyUser } = require("../utils/jwt")
const router = express.Router()

router.get("/", verifyAdmin, getUsers)
router.get("/:id", verifyUser, getUser)
router.put("/:id", verifyUser, updateUser)
router.delete("/:id", verifyUser, deleteUser)

module.exports = router