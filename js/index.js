document.querySelector('.forms input[type=submit]').addEventListener('click', submitForm);

function submitForm(e) {
 e.preventDefault();
 fetch('form.php', {
   method: 'POST',
   body: new FormData(document.querySelector('.forms'))
  })
  .then(response => response.text())
  .then(html => document.querySelector('.server-response')
   .innerHTML = html);
}
document.querySelector('.feedback textarea[type=submit]').addEventListener('click', submitForm);

function submitForm(e) {
 e.preventDefault();
 fetch('form.php', {
   method: 'POST',
   body: new FormData(document.querySelector('.forms'))
  })
  .then(response => response.text())
  .then(html => document.querySelector('.server-response')
  .innerHTML = html);
}
