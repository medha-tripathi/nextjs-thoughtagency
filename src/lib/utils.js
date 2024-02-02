const { default: mongoose } = require("mongoose")

const connection = {};

export const connectDB = async () => {
    try {
        if (connection.isConnected) {
            console.log("Using existing connection")
            return
        }
        const db = await mongoose.connect(process.env.MONGO)
        connection.isConnected = db.connections[0].readyState
        console.log(`MongoDB connected`)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}