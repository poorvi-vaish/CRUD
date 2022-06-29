import User from '../../../models/user.model';
import bcrypt from 'bcrypt';

const resetPassword: Controller = async (req, res, next) => {
  try {
    const { id, newPassword } = req.body;
    const user = await User.findOne({_id: id});
    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newPassword, salt);
    const updatedPassword = await User.findOneAndUpdate({_id: id}, {password: hash}, {new:true});
    return res.status(200).json({
      message: "Password changed successfully",
      data: {updatedPassword}
    }); 
  }
  catch (err) { 
    next(err);
    return;
  }
}

export default resetPassword;
