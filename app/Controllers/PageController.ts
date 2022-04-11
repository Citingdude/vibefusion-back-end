import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Page from 'App/Models/Page'

export default class PageController {
  public async index() {
    const pages = await Page.all()
    const pagesJSON = pages.map((page) => page.serialize())

    return pagesJSON
  }

  public async create(ctx: HttpContextContract) {
    const page = new Page()
    const body = ctx.request.body()

    page.slug = body.slug
    page.title = body.title
    page.content = body.content

    await page.save()
  }

  public async view(ctx: HttpContextContract) {
    const slug = ctx.params.slug
    const page = await Page.findBy('slug', slug)
    const pageJSON = page?.serialize()

    return pageJSON
  }

  public async update(ctx: HttpContextContract) {
    const slug = ctx.params.slug
    const body = ctx.request.body()
    const page = await Page.findBy('slug', slug)

    if (page) {
      page.slug = body.slug
      page.title = body.title
      page.content = body.content
    }

    if (ctx.request.file('file')) {
      const image = ctx.request.file('file')

      if (image) {
        await image.moveToDisk('./')
      }

    }

    await page?.save()

    return ctx.request
  }

  public async destroy(ctx: HttpContextContract) {
    const slug = ctx.params.slug
    const page = await Page.findBy('slug', slug)

    await page?.delete()
  }
}