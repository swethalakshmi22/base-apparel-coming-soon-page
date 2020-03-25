let form = document.querySelector('form');
let emailInput = document.getElementById('errorid');

document.getElementById('press').addEventListener('click', e => {
   e.preventDefault();
   let emailVal = emailInput.value.trim();
   if(emailVal === '') {
     form.className.add('error');
     form.className.remove('success');
   } else if(!validateEmail(emailVal)) {
      form.className.remove('success');
      form.className.add('error');
   } else {
      form.className.remove('error');
      form.className.add('success');
   } 
});

// regex copied from StackOverflow //

function validateEmail(emailInput) {
   let valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return valid.test(String(emailInput).toLowerCase());
}