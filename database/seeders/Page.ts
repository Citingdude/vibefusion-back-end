import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Page from 'App/Models/Page'

export default class PageSeeder extends BaseSeeder {
  public async run() {
    await Page.updateOrCreate({
      slug: 'home',
      title: 'Home',
      image: '',
      content: {
        "hero": {
          "title": "<h1>Versterk je merk met de juist Vibe</h1>",
          "button": "Onze diensten",
          "button_alt": "Bekijk de cases"
        },
        "services": {
          "title": "Onze diensten",
          "service_1": {
            "title": "Webdesign",
            "button": "Meer info"
          },
          "service_2": {
            "title": "Webshop",
            "button": "Meer info"
          },
          "service_3": {
            "title": "Branding",
            "button": "Meer info"
          },
          "cta": {
            "title": "Samenwerken?",
            "button": "Contacteer ons"
          }
        }
      }
    })
  }
}
