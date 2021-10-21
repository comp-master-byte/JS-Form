// let's get all required elements
const form = document.querySelector('form'),
eField = form.querySelector('.email'),
eInput = eField.querySelector('input'),
pField = form.querySelector('.password'),
pInput = pField.querySelector('input')

form.onsubmit = (e) => {
    e.preventDefault() // preventing form from submitting
    if(eInput.value == '') { // if email is empty
        eField.classList.add('shake', 'error')
    } else {
        checkEmail()
    }
    if(pInput.value == '') { // if password is empty
        pField.classList.add('shake', 'error')
    }

    setTimeout(() => { // remove class shake after 500ms
        eField.classList.remove('shake')
        pField.classList.remove('shake')
    }, 500)

    // let's work on input keyup
    
    eInput.onkeyup = () => {
        checkEmail() // calling checkEmail function
    }

    // let's create a function
    function checkEmail(){
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(!eInput.value.match(pattern)) { // pattern to validate email 
            eField.classList.add('error')
            let errorTxt = eField.querySelector(".error-text");
            (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
        } else {
            eField.classList.remove('error')
        }
    }

    pInput.onkeyup = () => {
        if(pInput.value == '') {
            pField.classList.add('error')
        }        
        else {
            pField.classList.remove('error')
        }
    }

    if(!eField.classList.contains('error') && !pField.classList.contains('error')) {
        window.location.href = '#'
    }
}

