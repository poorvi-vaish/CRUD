import Category from '../../models/category.model';

const updateCategory: Controller = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const { name, description } = req.body;
    const updatedCategory = await Category.findOneAndUpdate({_id: categoryId}, {name, description});
    return res.status(200).json({
      message: "Category updated successfully",
      data: {updatedCategory}
    })
  }
  catch (err) {
    next(err);
    return;
  }
}

export default updateCategory;
