const User = require("../models/userSchema")
const bcryptjs = require("bcryptjs")
var jwt = require('jsonwebtoken');
const { globalMiddleware } = require("../middlewares/globalMiddleware");

exports.register = async (req, res, next) => {
    try {
        const salt = bcryptjs.genSaltSync(10);
        const hash = bcryptjs.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        });

        await newUser.save();
        const { username, email } = newUser;
        res.status(200).json({
            message: "User Created",
            user: {
                username,
                email
            }
        });
    } 
    catch (err) {
        next(err);
    }
};

exports.login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) return next(globalMiddleware(404, "user not found"))

        const isPasswordCorrect = await bcryptjs.compare(req.body.password, user.password)
        if (!isPasswordCorrect) return next(globalMiddleware(400, "Invalid password or username"))

        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT_SECRET)

        const { password, isAdmin, ...otherDetails} = user._doc

        res.cookie("jwt", token, {
            httpOnly: true
        }).status(200).send({...otherDetails })
    }
    catch (err) {
        next(err)
    }
}