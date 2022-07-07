let userNumber;
const betBtn = document.getElementById('bet')
const checkBtn = document.getElementById('check')
const betMessage = document.getElementById('messageBox')

betBtn.addEventListener('click', function(){
    // genero un numro random per l'utente
    userNumber = Math.floor(Math.random() * 6) + 1
    betMessage.innerHTML = '<p class="text-white">Il tuo numero della fortuna è ' + userNumber + '</p>'
    document.getElementById('bet').classList.add('d-none')
});

checkBtn.addEventListener('click', function(){
    // genero un numro random per il computer
    const localNumber = Math.floor(Math.random() * 6) + 1
    betMessage.classList.add('d-none')
    
    // confronto i due numri generati e determino il vincitore
    if (localNumber > userNumber){
        betMessage.classList.remove('d-none')
        checkBtn.classList.add('d-none')
        betMessage.innerHTML = '<p class="text-danger fw-bold"> Mi dispiace, hai perso - ' + localNumber + ' > ' + userNumber + '</p>'
    }else if (userNumber > localNumber) {
        betMessage.classList.remove('d-none')
        checkBtn.classList.add('d-none')
        betMessage.innerHTML = '<p class="text-success fw-bold">Congratulazioni, hai vinto - ' + userNumber + ' > ' + localNumber + '</p>'
    }else {
        betMessage.classList.remove('d-none')
        checkBtn.classList.add('d-none')
        betMessage.innerHTML = '<p class="text-info fw-bold">I numeri coincidono, riprova - ' + userNumber + ' = ' + localNumber + '</p>'
    }
});
