const { JStoHTML }  = require('./JStoHTML')

const container = document.querySelector('.movies-display')

const fetchData = (data) => {
    const moviesHTML = data.map(JStoHTML)
    moviesHTML.forEach( movie => container.appendChild(movie) )
}

module.exports = {
    fetchData
}