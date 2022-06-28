import Product from '../../models/product.model';
import Category from '../../models/category.model';

const findProducts: Controller = async (req, res, next) => {
  try {
    const { category } = req.params;
    const products = await Product.find({category: category});
    return res.status(200).json({
      message: "Products found successfully",
      data: {products}
    })
  }
  catch (err) {
    next(err);
    return;
  }
}

export default findProducts;
