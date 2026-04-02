// Capturan la informacion con el objeto request, llama a los servicios que se conectan con la db y responde al cliente.
const { getMoviesService, createMoviesService } = require('../services/movies.service')

const getMoviesController = async (req, res) => {
    try {
        const resultado = await getMoviesService()
        res.status(200).json(resultado)
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const createMoviesController =  async (req, res) => {
    try {
        const resultado = await createMoviesService(req.body)
        res.status(200).json({
            msg: 'Pelicula creada con exito',
            data: resultado
        })
    } catch (error) {
        res.status(401).json({
            error: error.message
        })
    }
}

module.exports = {
    getMoviesController,
    createMoviesController
}