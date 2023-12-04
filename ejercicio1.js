const scanner = require("prompt-sync")({ sigint: true })

let Cancelar = false
let dados
let numero
let sumar = 0

while (!Cancelar) {
  dados = scanner('tira un dado:')

  if (Number(dados < 6)) {
    numero = Number(dados)
    sumar += numero
  } else if (dados !== 'cancelar') {
    console.log('no vale:')
  } else {
    if (Cancelar = true) {
        console.log()
       console.log(sumar) 
  }
  }




}



