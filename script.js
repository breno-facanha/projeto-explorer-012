// variaveis dos butões
const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonAddCinco = document.querySelector('.addCinco');
const buttonRemoveCinco = document.querySelector('.removeCinco');

// variaveis do timer
const secondsDisplay = document.querySelector('.seconds')
const minutesDisplay = document.querySelector('.minutes')

buttonPlay.addEventListener('click', playTimer)
buttonPause.addEventListener('click', pause)
buttonStop.addEventListener('click', stop)
buttonStop.addEventListener('click', function(){
    clearTimeout(timerTimeOut)
})

buttonAddCinco.addEventListener('click', maisCinco)
buttonRemoveCinco.addEventListener('click', menosCinco)

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



