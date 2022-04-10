import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Case from 'App/Models/Case'

export default class CaseSeeder extends BaseSeeder {
  public async run() {
    await Case.createMany([
      {
        slug: 'explauradise',
        category: 'Blog',
        title: 'Explauradise',
        description: "Een visuele website met prachtige natuurfoto's en avontuurlijke blog voor een succesvolle Instagrammer met meer dan 10.000 volgers.",
        image: 'explauradise',
      },
      {
        slug: 'vdrchemtech',
        category: 'Business website',
        title: 'VDR Chemtech',
        description: 'Een profressionele business website voor een internationale speler in de petrochemie sector.',
        image: 'vdrchemtech',
      }
    ])
  }
}
