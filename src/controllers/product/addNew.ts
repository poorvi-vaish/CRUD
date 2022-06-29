import Product from '../../models/product.model';

const addNew: Controller = async (req, res, next) => {
  try {
    const { name, price, description, category } = req.body;
    const product = new Product({
      name,
      price,
      description,
      category
    });
    const newProduct = await product.save();
    return res.status(200).json({
      message: `${name} added successfully`,
      data: {newProduct}
    })
  }
  catch (err) {
    next(err);
    return;
  }
}

export default addNew;
