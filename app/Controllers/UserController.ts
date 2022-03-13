import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UserController {
  public async index(ctx: HttpContextContract) {
    const users = await User.all()
    const usersJSON = users.map((user) => user.serialize())

    return usersJSON
  }

  public async create(ctx: HttpContextContract) {
    const user = new User()
    const body = ctx.request.body()

    user.email = 'glenn.reumers@hotmail.com'
    user.password = 'password'

    await user.save()
  }
}