let dataEvento = new Date("10/02/22")
let dataHoje = new Date()

console.log(dataEvento)

if (dataEvento > dataHoje) {
    console.log ("Data válida para o cadastro") 
} else {
    console.log ("Data inválida para o cadastro")
}


let Palestrantes = 10

if (Palestrantes <= 10) {
    console.log ("Cadastrar o palestrante")
} else {
    console.log ("Não é possivel cadastrar o palestrante, devido exceder o número de palestrantes")
}

let Participantes = 90

if (Participantes <= 90) {
    console.log ("Cadastrar o participante")
} else {
    console.log ("Não é possivel cadastrar o participante, devio exceder o número de participantes")
}

let idade = 18

if (idade >= 18) {
    console.log ("Cadastrar o participante")
} else {
    console.log ("Não é possivel cadastrar o participante, devido ser menor de 18 anos")
}

let listaParticipantes = [ "Almir", "Vanessa", "Felipe", "Isabella"] 

for (let contador = 0; contador < listaParticipantes.length; contador++) {
    console.log(listaParticipantes[contador])
}