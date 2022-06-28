import Product from '../../models/product.model';

const updateProduct: Controller = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const { name, price, description, category } = req.body;
    const updatedProduct = await Product.findOneAndUpdate({_id: productId}, {name, price, description, category}, {new:true});
    return res.status(200).json({
      message: "Product updated successfully",
      data: {updatedProduct}
    })
  }
  catch (err) {
    next(err);
    return;
  }
}

export default updateProduct;
