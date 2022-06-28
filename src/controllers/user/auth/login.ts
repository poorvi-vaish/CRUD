import User from '../../../models/user.model';
import bcrypt from 'bcrypt';

const login: Controller = async (req, res, next) => {
  try {
    const password = req.body.password;
    const email = req.body.email;

    const foundUser = await User.findOne({email});
    if (!foundUser) { 
    res.status(404).json({
      message: "User not found"
    })
    return;
    }
    const passwordCheck = await bcrypt.compare(password, foundUser.password);
    if (!passwordCheck) {
      res.status(401).json({
        message: "Wrong password"
      })
      return;
    }
    else {
      res.status(200).json({
        message: "User logged in"
      })
    }
    return; 
  }
  catch (err) {
    next(err);
    return console.log(err);
  }
} 

export default login;
