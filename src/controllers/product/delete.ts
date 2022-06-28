import Product from '../../models/product.model';

const deleteProduct: Controller = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const deletedProduct = await Product.findOneAndDelete({_id: productId});
    return res.status(200).json({
      message: "Product deleted successfully",
      data: {deletedProduct}
    })
  }
  catch (err) {
    next(err);
    return;
  }
}

export default deleteProduct;
