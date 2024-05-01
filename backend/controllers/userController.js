const User = require("../models/userSchema")
const { globalMiddleware } = require("../middlewares/globalMiddleware");

exports.getUsers = async (req, res, next) => {

    try {
        const getUsers = await User.find()
        res.status(200).json({
            count: getUsers.length,
            users: getUsers
        })
    }
    catch (err) {
        next(err)
    }
}

exports.getUser = async (req, res, next) => {

    try {
        const getUser = await User.findById(req.params.id)
        if (!getUser) {
            return res.status(400).json({
                error: "Invalid Id or user does not exist"
            })
        }
        res.status(200).json(getUser)
    }
    catch (err) {
        next(err)
    }
}
exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        if (!updatedUser) {
            return res.status(400).json({
                error: "Invalid Id or user does not exist"
            })
        }
        res.status(200).json(updatedUser)
    }
    catch (err) {
        next(err)
    }
}

exports.deleteUser = async (req, res) => {

    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id)

        if (!deleteUser) {
            return res.status(400).json({
                error: "Invalid Id or user does not exist"
            })
        }
        res.status(200).json("User Deleted")
    }
    catch (err) {
        next(err)
    }
}