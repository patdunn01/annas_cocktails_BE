const mongoose = require("mongoose")


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongo db connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
          console.log(process.env.MONGO_URI, "Hello")
            console.log(error)
            process.exit(1)

      }
}

module.exports = connectDB; 