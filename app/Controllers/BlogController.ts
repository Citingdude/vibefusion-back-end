import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class BlogController {
  public async index() {
    return [
      {
        id: 1,
        title: 'Hello blogs',
      },
      {
        id: 2,
        title: 'Hello blogs 2',
      }
    ]
  }

  public async view(ctx: HttpContextContract) {
    return [
      {
        slug: ctx.params
      }
    ]
  }
}