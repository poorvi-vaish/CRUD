import { model, Schema } from 'mongoose';
import { IProduct } from './types/product.d';
import Category from './category.model';

const productSchema = new Schema({
  name: String,
  price: Number,
  category: { type: Schema.Types.ObjectId, ref: Category },
});

export default model<IProduct>("Product", productSchema);
