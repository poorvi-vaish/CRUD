import Category from '../../models/category.model';
import Product from '../../models/product.model';

const deleteCategory: Controller = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const deletedCategory = await Category.findOneAndDelete({_id: categoryId});
    const products = await Product.find({category: categoryId});
    for (let i in products){
      await Product.findOneAndDelete({_id: products[i]._id});
    }
    return res.status(200).json({
      message: "Category deleted successfully",
      data: {deletedCategory}
    })
  }
  catch (err) {
    next(err);
    return;
  }
} 

export default deleteCategory;
