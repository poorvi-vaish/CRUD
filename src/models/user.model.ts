import { model, Schema } from 'mongoose';
import { IUser } from './types/user.d';

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  current: String
});

export default model<IUser>("User", userSchema);