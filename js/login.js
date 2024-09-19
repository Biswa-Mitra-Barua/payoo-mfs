// search form submit reloading the page

// step 1: set the event handler
document.getElementById('btn-login')
    .addEventListener('click', function(event){
        // step 2: prevent default behaviour (prevent reloading browser)
        event.preventDefault();  //<----- vejal to beginners
        // console.log('login button clicked');

        // step 3: get the phone number and pin number
        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-digit').value;
        // console.log(phoneNumber, pinNumber);

        // step 4: validate phone & pin
        // this is temporary, you should not do this
        if (phoneNumber === '5' && pinNumber === '1234'){
            console.log('You are logged in');
            // allow user to use the website
            window.location.href = '/home.html'
        }
        else {
            alert('Wrong phone or pin number');
        }
})