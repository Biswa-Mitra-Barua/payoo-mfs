// add money to the account

// add an event handler to add money button inside the form
document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        // prevent page reload after form submit
        event.preventDefault();
        
        // get money to be added in account 
        const addMoneyInput = document.getElementById('input-add-money').value

        // get the pin number provided
        const getPinInput = document.getElementById('input-pin-number').value 
        
})