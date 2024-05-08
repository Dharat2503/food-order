import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    auth0id: {
        type: String,
        required: true,
        alias: 'auth0Id' // Define alias for the field
    },
    email:{
        type: String,
        required: true,
    },
    name:{
        type: String,
    },
    addressLine1:{
        type:String,

    },
    city:{
        type:String,
    },
    country:{
        type:String,
    },
    postalCode:{
        type:String,
    },
});

const User = mongoose.model("User",userSchema)
export default User;