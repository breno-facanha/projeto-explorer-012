// variaveis dos butões do timer
const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonAddCinco = document.querySelector('.addCinco');
const buttonRemoveCinco = document.querySelector('.removeCinco');

// variaveis do timer
const secondsDisplay = document.querySelector('.seconds')
const minutesDisplay = document.querySelector('.minutes')

// variaveis dos buttoes do som 
const buttonFloresta = document.querySelector('.floresta')
const buttonChuva = document.querySelector('.chuva')
const buttonCafeteria = document.querySelector('.cafeteria')
const buttonLareira = document.querySelector('.lareira')

// variaveis de audio
const audioFloresta = new Audio("audios/Floresta.wav")
const audioChuva = new Audio("audios/Chuva.wav")
const audioCafeteria = new Audio("audios/Cafeteria.wav")
const audioLareira = new Audio("audios/Lareira.wav")

//eventos dos butões do timer
buttonPlay.addEventListener('click', playTimer)
buttonPause.addEventListener('click', pause)
buttonStop.addEventListener('click', stop)
buttonStop.addEventListener('click', function(){clearTimeout(timerTimeOut)})
buttonAddCinco.addEventListener('click', maisCinco)
buttonRemoveCinco.addEventListener('click', menosCinco)


//eventos dos buttoes do som 
buttonFloresta.addEventListener('click', floresta)
buttonChuva.addEventListener('click', chuva)
buttonCafeteria.addEventListener('click', cafeteria)
buttonChuva.addEventListener('click', chuva)
buttonLareira.addEventListener('click', lareira)

function playTimer(){  
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    countdown()
}

function pause (){
    clearTimeout(timerTimeOut)
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
}

function stop () {
    minutesDisplay.innerHTML = String(00).padStart(2,0)
    secondsDisplay.innerHTML = String(00).padStart(2,0)
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
}

function countdown() {

   timerTimeOut = setTimeout( function (){
        let secondsTimer = Number(secondsDisplay.textContent)
        let minutesTimer = Number(minutesDisplay.textContent)
       
       
        minutesDisplay.textContent = String(minutesTimer).padStart(2, "0")
        
        if (minutesTimer <= 0 && secondsTimer <= 0){
          
            return
        }
        
        if (secondsTimer <= 0){
            secondsTimer = 60
            
            minutesDisplay.textContent = String(--minutesTimer).padStart(2, "0")
        }        
        
        
        secondsDisplay.textContent = String(--secondsTimer).padStart(2, "0")
        countdown()
    }, 1000 )
}

function maisCinco() {
    minutesDisplay.innerHTML = String(Number(minutesDisplay.textContent) + 5).padStart(2, "0")
}

function menosCinco() {
    if (minutesDisplay.textContent <=5) {
        return
    }else{
    minutesDisplay.innerHTML = String(Number(minutesDisplay.textContent) - 5).padStart(2, "0")
    }
}

function floresta() {
    audioFloresta.play()
    audioChuva.pause()
    audioLareira.pause()
    audioCafeteria.pause() 
    
    buttonFloresta.classList.add("hidee")
    buttonChuva.classList.remove("hidee")
    buttonCafeteria.classList.remove("hidee")
    buttonLareira.classList.remove("hidee")
}

function chuva() {
    audioChuva.play()
    audioFloresta.pause()
    audioLareira.pause()
    audioCafeteria.pause()
    
    buttonFloresta.classList.remove("hidee")
    buttonChuva.classList.add("hidee")
    buttonCafeteria.classList.remove("hidee")
    buttonLareira.classList.remove("hidee")
}

function cafeteria() {
    audioFloresta.pause()
    audioChuva.pause()
    audioLareira.pause()
    audioCafeteria.play() 
    
    buttonFloresta.classList.remove("hidee")
    buttonChuva.classList.remove("hidee")
    buttonCafeteria.classList.add("hidee")
    buttonLareira.classList.remove("hidee")
}

function lareira() {
    audioLareira.play()
    audioFloresta.pause()
    audioChuva.pause()
    audioCafeteria.pause()
    
    buttonFloresta.classList.remove("hidee")
    buttonChuva.classList.remove("hidee")
    buttonCafeteria.classList.remove("hidee")
    buttonLareira.classList.add("hidee")
    
}




