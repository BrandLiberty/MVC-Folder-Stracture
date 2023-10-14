import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        reqiured: true,
        
    },
    phone: {
        type: Number,
    },
    name: {
        type: String,
    },
    password:{
        type: String
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema);

export default User