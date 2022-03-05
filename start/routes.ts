/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Database from '@ioc:Adonis/Lucid/Database'

Route.where('slug', /^[a-z0-9_-]+$/)

// API group
Route.group(() => {
  // V1 group
  Route.group(() => {
    // Pages
    Route.group(() => {
      Route.get('/', 'HomeController.index')
      Route.post('/', 'HomeController.create')
    }).prefix('pages')

    // Cases group
    Route.group(() => {
      Route.get('/', 'CasesController.index')
      Route.get('/:slug', 'CasesController.view')
      Route.post('/', 'CasesController.create')
      Route.patch('/:slug', 'CasesController.update')
    }).prefix('cases')

    // Blog group
    Route.group(() => {
      Route.get('/', 'BlogController.index')
      Route.get('/:slug', 'BlogController.view')
    }).prefix('blog')
  }).prefix('/v1')
}).prefix('/api')