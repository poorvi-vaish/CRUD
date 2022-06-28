import User from '../../../models/user.model';
import bcrypt from 'bcrypt';
import { isFunctionOrConstructorTypeNode } from 'typescript';

const reset: Controller = async (req, res, next) => {
  try {

    const { userId } = req.params;  
    const { password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const updatedPassword = await User.findOneAndUpdate({_id: userId}, {password: hash}, {new:true});
    console.log(updatedPassword);
    return res.status(200).json({
      message: "Password changed successfully"
    })
  }
  catch (err) {
    next(err);
    return;
  }
}

export default reset;