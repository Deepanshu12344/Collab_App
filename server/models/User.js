import mongoose,{Schema} from "mongoose";

const userschema = new Schema({
    username:{
        type:String,
        required: true,
        min:5,
        max:50
    },
    email:{
        type:String,
        required: true,
        max:50,
        unique:true
    },
    password:{
        type:String,
        required: true,
        min:5,
    }

},{timestamps:true});

const User = mongoose.model("User",userschema);
export default User;