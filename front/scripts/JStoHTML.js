const JStoHTML = (movie) => {
    const div = document.createElement('div')
    const img = document.createElement('img')
    const h2 = document.createElement('h2')
    const button = document.createElement('button')

    div.classList.add('movie')
    img.classList.add('movie-poster')
    img.src = movie.poster
    img.alt = movie.title
    h2.classList.add('title')
    h2.innerHTML = movie.title
    button.innerHTML = 'PLAY'
    button.classList.add('watch-button')

    div.appendChild(img)
    div.appendChild(h2)
    div.appendChild(button)

    return div
}

module.exports = { 
    JStoHTML
}