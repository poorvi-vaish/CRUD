import { model, Schema } from 'mongoose';
import { ICategory } from './types/category.d';
import Product from './product.model'; 

const categorySchema = new Schema({
  name: String,
});

export default model<ICategory>("Category", categorySchema);