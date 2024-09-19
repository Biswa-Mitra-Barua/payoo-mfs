document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();

        const cashOutAmount = document.getElementById('input-cash-out').value
        const cashOutNumber = parseFloat(cashOutAmount);
        const cashOutPin = document.getElementById('input-cash-out-pin').value
        
        if (cashOutPin === '1234'){
            // allow withdraw/cashout/deduct the money
            const currentBalance = document.getElementById('current-balance').innerText
            const balance = parseFloat(currentBalance);
            const newBalance = balance - cashOutNumber;
            document.getElementById('current-balance').innerText = newBalance;
        }
        else {
            alert('Wrong Input');
        }
})