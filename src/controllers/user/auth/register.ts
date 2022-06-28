import User from "../../../models/user.model";
import bcrypt from "bcrypt";

const register: Controller = async (req, res, next) => {
  try {
    const foundUser = await User.findOne({email: req.body.email});
    console.log(foundUser);
    if (foundUser) {
      res.status(400).json({
        message: "User already exists"
      });
      return;
    }

    const hash = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.status(200).json({
      message: "User registered successfully"
    })
    return;
  }
  catch (err) {
    next(err);
    return;
  }
};

export default register;
