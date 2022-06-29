import Category from '../../models/category.model';

const getAll: Controller = async (req, res, next) => {
  try {
    const categories = await Category.find({});
    return res.status(200).json({
      message: "Categories found successfully",
      data: {categories},
    })
  }
  catch (err) {
    next(err);
    return;
  }
}

export default getAll;
