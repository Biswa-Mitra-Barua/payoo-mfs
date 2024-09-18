// search form submit reloading the page

// step 1: set the event handler
document.getElementById('btn-login')
    .addEventListener('click', function(event){
        // step 2: prevent default behaviour (prevent reloading browser)
        event.preventDefault();  //<----- vejal to beginners
        console.log('login button clicked');

        // step 3: get the phone number
        const phoneNumber = document.getElementById('phone-number').value;
        console.log(phoneNumber); 

        // step 4: get the pin
        const myPin = document.getElementById('pin-digit').value;
        console.log(myPin);
})