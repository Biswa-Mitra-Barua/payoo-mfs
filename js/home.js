//----- add money to the account

// add an event handler to add money button inside the form
document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        // prevent page reload after form submit
        event.preventDefault();

        // get money to be added in account & provided pin number 
        const addMoneyInput = document.getElementById('input-add-money').value
        const getPinInput = document.getElementById('input-pin-number').value

        // verify the pin number
        if (getPinInput === '1234') {
            console.log('adding money to your account')

            // get the current/existing balance and update with the balance in the UI/DOM
            const currentBalance = document.getElementById('current-balance').innerText;
            const currentBalanceNumber = parseFloat(currentBalance);
            const addMoneyNumber = parseFloat(addMoneyInput)
            const newUpdateBalance = currentBalanceNumber + addMoneyNumber;
            document.getElementById('current-balance').innerText = newUpdateBalance;
        }
        else {
            alert('Incorrect Pin Number, Please try again.')
        }
    })