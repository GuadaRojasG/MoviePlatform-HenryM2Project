const mongoose = require('mongoose')

const movieObjConfig = {
  title: {
    type: String,
    required: [true, "El título es obligatorio"],
    unique: true,
    trim: true,
    minlength: [2, "El título debe tener al menos 2 caracteres"],
    maxlength: [100, "El título no puede superar los 100 caracteres"],
  },

  year: {
    type: Number,
    required: [true, "El año es obligatorio"],
    min: [1880, "El año mínimo es 1880"],
    max: [2025, "El año máximo es 2025"],
  },

  director: {
    type: String,
    required: [true, "El director es obligatorio"],
    trim: true,
    minlength: [2, "El nombre del director es muy corto"],
  },

  duration: {
    type: String,
    required: [true, "La duración es obligatoria"],
  },

  genre: {
    type: [String],
    required: [true, "Debe tener al menos un género"],
    validate: {
      validator: (arr) => arr.length > 0,
      message: "Debe tener al menos un género",
    },
  },

  rate: {
    type: Number,
    required: [true, "La calificación es obligatoria"],
    min: [0, "La calificación mínima es 0"],
    max: [10, "La calificación máxima es 10"],
  },

  poster: {
    type: String,
    required: [true, "El poster es obligatorio"],
  },
}

const MovieSchema = new mongoose.Schema(movieObjConfig)

const Movie = mongoose.model('Movie', MovieSchema)

module.exports = {
  Movie
}