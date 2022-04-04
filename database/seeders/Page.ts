import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Page from 'App/Models/Page'

export default class PageSeeder extends BaseSeeder {
  public async run() {
    const pageData = {
      "data": {
        "hero": {
          "title": "Hero title"
        }
      }
    }

    await Page.updateOrCreate({
      slug: 'home',
      title: 'Home',
      image: '',
    })
  }
}
