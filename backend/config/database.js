const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost:32768/db_finance')

mongoose.Error.messages.general.require = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUES}' informado é menor que o limite mínimo de '{MIN}'. "
mongoose.Error.messages.Number.max = "O '{VALUES}' informado é maior que o limite máximo de '{MAX}'. "
mongoose.Error.messages.String.enum = "'{VALUES}' não é válido para o atributo '{PATH}'. "
