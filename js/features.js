// Show the add money and cash out form using user btn

document.getElementById('btn-user-cash-out')
.addEventListener('click', function(){
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
    
})

document.getElementById('btn-user-add-money')
.addEventListener('click', function(){
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('add-money-form').classList.remove('hidden');
    
})