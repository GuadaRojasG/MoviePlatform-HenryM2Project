const validateMovieData = (req, res, next) => {

    const labels = [ 'title', 'year', 'director', 'duration', 'genre', 'rate', 'poster' ]

    const missingLabels = labels.filter( label => !req.body[label])

    if (missingLabels.length > 0) {
        res.status(401).json({
            msg: `Faltan valores para crear la pelicula: ${missingLabels.join(', ')}`
        })
    }
    next()
}

module.exports = {
    validateMovieData
}