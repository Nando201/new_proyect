const btnStart = document.getElementById('btnStart')
const btnStop = document.getElementById('btnStop')
btnStart.addEventListener("click", iniciarCronometro)
btnStop.addEventListener("click", pausarCronometro)
let tiempoTranscurrido
let start
let end
let seconds 
let minutes
let hours

function iniciarCronometro(){
    start = Date.now()
    console.log('inicia')
}

function agregarCeros(valor){
    if(valor < 10){
        return valor + "0"
    } else{
        return "" + valor
    }
} 

function pausarCronometro(){
    end = Date.now()
    tiempoTranscurrido = end - start
    seconds = parseInt(tiempoTranscurrido/1000)
    minutes = parseInt((tiempoTranscurrido/1000)/60)
    hours = parseInt(((tiempoTranscurrido/1000)/60)/60)
    console.log(`El tiempo transcurrido es: ${agregarCeros(hours)}:${agregarCeros(minutes)}:${agregarCeros(seconds)}`)
}


