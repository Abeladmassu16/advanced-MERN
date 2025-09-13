import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    lastname:{
        type:String,
        default:'lastName'
    },
    location:{
        type:String,
        default:'addis ababa'
    },
    role:{
        type:String,
        enum:['user','admin'],
        default: 'user'
    },
        avatar:String,
        avatarPublicId:String,
    
});

UserSchema.methods.toJSON = function(){
    let obj = this.toObject()
    delete obj.password;
    return obj;
}
export default mongoose.model('user', UserSchema);