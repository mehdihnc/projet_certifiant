import mongoose from 'mongoose';


export interface UserDocument extends mongoose.Document {
    name: string;
    email: string;
    surname: string;
    password: string;
    creatdAt: Date;
    updateAt: Date;
    comparePassword (passwordAttempt: string) : Promise<Boolean>
}

