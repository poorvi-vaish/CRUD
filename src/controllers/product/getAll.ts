import Product from '../../models/product.model';
import Category from '../../models/category.model';

const getAll: Controller = async (req, res, next) => {
  try {
    const categories = await Category.find();
    const products = []
    for (let i in categories){
      const product = await Product.find({category: categories[i]._id});
      products.push({product: product, category: categories[i].name});
    }
    return res.status(200).json({
      message: "Products found successfully",
      data: {products},
    })
  }
  catch (err) {
    next(err);
    return;
  }
}

export default getAll;
