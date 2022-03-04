import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class CasesController {
  public async index(ctx: HttpContextContract) {
    return Database.from('cases').select('*')
  },

  public async view(ctx: HttpContextContract) {
    return [
      {
        slug: ctx.params
      }
    ]
  }

  public async create(ctx: HttpContextContract) {
    const postId = await Database
      .table('cases')
      .insert({
        title: 'Adonis',
        description: 'Let\'s learn AdonisJs'
      })
    .returning('id')
  }
}