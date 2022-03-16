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

Route.where('slug', /^[a-z0-9_-]+$/)

// API group
Route.group(() => {
  // V1 group
  Route.group(() => {
    // Pages
    Route.group(() => {
      Route.get('/', 'PageController.index')
      Route.post('/', 'PageController.create')
      Route.get('/:slug', 'PageController.view')
      Route.patch('/:slug', 'PageController.update')
      Route.delete('/:slug', 'PageController.destroy')
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

    // Users
    Route.get('/users', 'UserController.index')
    Route.post('/users', 'UserController.create')

    // Auth
    Route.post('/login', async ({ auth, request, response }) => {
      const requestBody = request.body()

      const email = requestBody.email
      const password = requestBody.password

      try {
        const token = await auth.use('api').attempt(email, password)
        return token
      } catch {
        return response.badRequest('Invalid credentials')
      }

    })

    Route.get('/auth', async ({ auth }) => {
      await auth.use('api').authenticate()

      const data = {
        status: true
      }

      return data
    })
  }).prefix('/v1')
}).prefix('/api')