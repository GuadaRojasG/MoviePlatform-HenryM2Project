const { fetchData } = require('./fetchData')
const { failData } = require('./failData')
const axios = require('axios')
const { createFormFunc } = require('./createMovieForm')

const getData = async () => {
    try {
        const { data } = await axios.get('http://localhost:3000/movies')
        fetchData(data)
    } catch (error) {
        failData()
    }
}

if (location.pathname.includes('index.html') || location.pathname === '/') {
    getData()
} 
if (location.pathname.includes('create-movie.html')) {
    createFormFunc()
}