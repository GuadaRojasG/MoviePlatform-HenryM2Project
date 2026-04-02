// Rutas de las movies

const { Router } = require('express')
const { getMoviesController, createMoviesController } = require('../controllers/movies.controller')
const { validateMovieData } = require('../middlewares')

const moviesRouter = Router()

moviesRouter.get("/", getMoviesController)
moviesRouter.post('/', validateMovieData, createMoviesController)

module.exports = {
    moviesRouter
}