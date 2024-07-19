import { Schema,model,models } from "mongoose";

const UserShema = new Schema({
    name:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true   
    }
})
export default models.User || model('User',UserSchema)