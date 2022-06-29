import Category from '../../models/category.model';

const addNew: Controller = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const category = new Category({name:name, description:description });
    const newCategory = await category.save();
    return res.status(200).json({
      message: "Category added successfully",
      data: { category }
    })
  }
  catch (err) {
    next(err);
    return;
  }
}

export default addNew;
