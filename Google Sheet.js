const scriptURL = 'https://script.google.com/macros/s/AKfycbx1OGzSD5In8RnyR5f-SAHXIRSUxSCvcK45o6lP-Iqi31KeVxAORlaIgahFnuId3hv0/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})