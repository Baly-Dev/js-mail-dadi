// creo una lista degli invitati
const attendees = ['kevin@balydev.it', 'sofia@azzolini.it', 'amleto@merli.it', 'admin@hivesup.com']

document.getElementById('execute').addEventListener('click', function(){
    // estraggo i dati in input
    const userEmail = document.getElementById('email').value

    // effettuo un controllo per verficare che l'utente sia nella lista degli invitati
    // stampo un messaggio per comunicare l'esito della verifica
    if (userEmail == attendees[0] || userEmail == attendees[1] || userEmail == attendees[2] || userEmail == attendees[3]){
        document.getElementById('fieldset').classList.add('d-none')
        document.getElementById('messageBox').classList.add('d-block')
        document.getElementById('messageBox').innerHTML = '<p class="fs-6 text-success fw-bold">sei presente nella lista degli invitati<p>'
    } else {
        document.getElementById('fieldset').classList.add('d-none')
        document.getElementById('messageBox').classList.add('d-block')
        document.getElementById('messageBox').innerHTML = '<p class="fs-6 text-danger fw-bold">mi dispiace, non sei presente nella lista degli invitati<p>'
    }
});