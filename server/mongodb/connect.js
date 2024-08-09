import mongoose from 'mongoose';

const connectDB = (url)=>{
    mongoose.set('strictquery',true);

    mongoose.connect(url)
    .then(()=>console.log('MongoDB connected'))
    .catch((err)=> console.log(err))
}

export default connectDB