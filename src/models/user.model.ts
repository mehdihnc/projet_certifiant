import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import config from 'config'
import { UserDocument } from '../interfaces/interface.user'

const userSchema = new mongoose.Schema ({
    avatar:{type: String, required:true,unique: true},
    email: {type: String, required:true,unique: true},
    surname: {type: String, required:true},
    password: {type: String, required:true},
    createdAT: { type: Date, default: Date.now },
    updateAT: { type: Date, default: Date.now },
},{timestamps: true})


userSchema.pre("save", async function(next: any) {
let self = this as UserDocument
if (self.isModified("password")) {
const salt = await bcrypt.genSalt(10)
const hash = bcrypt.hashSync(self.password, salt)
self.password = hash;
return next();
} else {
    return next();
}
}) 

userSchema.methods.comparePassword = async function(passwordAttempt: string) : Promise<Boolean> {
    const self = this as UserDocument

    return await bcrypt.compare(passwordAttempt,self.password)
    
}
const UserModel = mongoose.model("User", userSchema)
export default UserModel
