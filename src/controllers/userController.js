import UserSchema from '../models/user'
import bcrypt from 'bcryptjs'

export default {
  async create(req, res) {

    const {
      name,
      email,
      password
    } = req.body

    var salt = bcrypt.genSaltSync(10)
    var passwordHashed = bcrypt.hashSync(password, salt)

    const user = await UserSchema.create({
      name: name,
      email: email,
      password: passwordHashed
    });

    return res.send(user);
  }
}
