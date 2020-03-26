let errorImg = document.getElementById('errorimg');
let emailInput = document.getElementById('enterid');
let errorMsg = document.querySelector('small');

document.getElementById('press').addEventListener('click', e => {
   e.preventDefault();
   let emailVal = emailInput.value.trim();
   if(emailVal === '' || !validateEmail(emailVal)) {
      emailVal = '';
      emailInput.focus();
      errorImg.style.display = 'block';
      errorMsg.innerHTML = 'Please provide an valid email';
   } else {
      emailVal = '';
      emailInput.focus();
      errorImg.style.display = 'none';
      errorMsg.innerHTML = '';
   } 
});

// regex copied from StackOverflow //

function validateEmail(emailInput) {
   let valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return valid.test(String(emailInput).toLowerCase());
}