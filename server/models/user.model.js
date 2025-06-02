import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    roll:{
        type:String,
        enum:["instructor","student"] ,
        default:'student',


    },
    enrolledCourses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Course'
        }
    ],
    photouRL:{
        type:String,
        default:""
    }
}, {
    timestamps: true,
});

const User = mongoose.model("User", userSchema);
export default User;
