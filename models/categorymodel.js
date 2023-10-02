import mongoose from "mongoose";


const Categorymodel = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    slug:{
        type:String
    }
})

export default mongoose.model('category',Categorymodel)