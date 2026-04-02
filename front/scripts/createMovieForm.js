const axios = require('axios')

function createFormFunc() {
    const form = document.getElementById('createMovieForm').addEventListener('submit', (evento) => {
    evento.preventDefault()

        const selectedGenres = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(inputGenre => inputGenre.value)

        if (selectedGenres.length == 0) {
        alert('Genres field not completed')
        return
        }

        const newMovieData = {
            title: document.getElementsByName('title')[0].value.trim(),
            genre: selectedGenres,
            director: document.getElementsByName('director')[0].value.trim(),
            rate: Number(document.getElementsByName('rate')[0].value.trim()),
            year: Number(document.getElementsByName('year')[0].value.trim()),
            duration: document.getElementsByName('duration')[0].value.trim(),
            poster: document.getElementsByName('poster')[0].value.trim()
        }

        axios.post('http://localhost:3000/movies', newMovieData)
        .then(({data}) => {
            alert(data.msg)
        })
        .catch((error) => {
            if (error.response.data.error.includes('title_1 dup key')) {
                alert('Error: Movie title already exists')
            }
        })
    })
}

module.exports = {
    createFormFunc
}