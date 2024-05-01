const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const cors = require("cors")
const cookieParser = require('cookie-parser');
const connectDB = require("./config/db")
const foodStoreRouter = require("./routes/foodStore")
const userRouter = require("./routes/user")
const authRouter = require("./routes/auth")
const PORT = process.env.PORT || 5000

connectDB()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use("/foods", foodStoreRouter)
app.use("/users", userRouter)
app.use("/auth", authRouter)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})