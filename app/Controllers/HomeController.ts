import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Page from 'App/Models/Page'

export default class HomeController {
  public async index(ctx: HttpContextContract) {
    const pages = await Page.all()
    const pagesJSON = pages.map((page) => page.serialize())

    return pagesJSON
  }

  public async create(ctx: HttpContextContract) {
    const page = new Page()

    page.slug = 'home'
    page.title = 'Home'

    page.data = {
      hero: {
        title: 'Versterk je merk met de juiste Vibe'
      }
    }

    await page.save()
  }
}