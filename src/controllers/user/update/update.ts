import User from '../../../models/user.model';
import bcrypt from 'bcrypt';

const update: Controller = async (req, res, next) => {
  try {
    const {type} = req.params;
    const { name, email, oldPassword, newPassword } = req.body;
    if (type == "profile") {
      const updatedProfile = await User.findOneAndUpdate({email: email}, {name: name}, {new:true});
      console.log(updatedProfile);
      return res.status(200).json({
        message: "Profile updated successfully",
        data: {updatedProfile}
      })
    }
    if (type == "password") {
      const foundUser = await User.findOne({email});
      if (!foundUser) {
        return res.status(400).json({
          message: "User not found"
        })
      }
      const passwordCheck = await bcrypt.compare(oldPassword, foundUser.password);
      if (!passwordCheck) {
        return res.status(401).json({
          message: "Wrong password"
        })
      }
      else {
        const isNewPasswordValid = await bcrypt.compare(newPassword, foundUser.password);
        if (!isNewPasswordValid) {
          const hash = await bcrypt.hash(newPassword, 10);
          const updatedPassword = await User.findOneAndUpdate({email: email}, {password: hash}, {new:true});
          console.log(updatedPassword);
          return res.status(200).json({
          message: "Password changed successfully"
          })
        } 
        else return res.status(400).json({
          message: "Password cannot be same as the previous password"
        })
      }
      }
    }
  catch (err) {
    next(err);
    return;
  }
}

export default update;
