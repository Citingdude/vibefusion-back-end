import User from 'App/Models/User'

export default class UserController {
  public async index() {
    const users = await User.all()
    const usersJSON = users.map((user) => user.serialize())

    return usersJSON
  }

  public async create() {
    const user = new User()

    user.email = 'glenn.reumers@hotmail.com'
    user.password = 'password'

    await user.save()
  }
}