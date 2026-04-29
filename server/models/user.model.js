import mongoose , {Schema} from 'mongoose';

const userSchema = new Schema({
},
    {timestamps : true}
)

export default mongoose.model('User', userSchema);