import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Case from 'App/Models/Case'

export default class CasesController {
  public async index() {
    return Database.from('cases').select('*')
  }

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
    const slug = ctx.params.slug
    const body = ctx.request.body()
    const casePage = await Case.findBy('slug', slug)

    const image = ctx.request.file('featured_image')

    // Handle image
    if (image) {
      // Save image on local disk
      await image.moveToDisk('./')
    }

    if (casePage) {
      casePage.slug = body.slug
      casePage.category = body.category
      casePage.title = body.title
      casePage.description = body.description
      casePage.content = body.content
      casePage.image = image?.fileName
    }

    await casePage?.save()
  }
}