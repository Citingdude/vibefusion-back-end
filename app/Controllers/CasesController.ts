import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Case from 'App/Models/Case'

export default class CasesController {
  public async index(ctx: HttpContextContract) {
    return Database.from('cases').select('*')
  },

  public async view(ctx: HttpContextContract) {
    const slug = ctx.params.slug
    const casePage = await Case.findBy('slug', slug)
    const caseJSON = casePage?.serialize()

    return caseJSON
  }

  public async create(ctx: HttpContextContract) {
    const newCase = new Case()

    newCase.slug = ctx.request.body().slug
    newCase.title = ctx.request.body().title
    newCase.category = ctx.request.body().category
    newCase.description = ctx.request.body().description
    newCase.image = ctx.request.body().image
    newCase.content = ctx.request.body().content

    await newCase.save()

    return ctx.request.body()
  }

  public async update(ctx: HttpContextContract) {
    const slug = 'test slug'

    const oldCase = await Case.findBy('slug', slug)

    oldCase.title = 'Newer title'

    await oldCase.save()
  }
}