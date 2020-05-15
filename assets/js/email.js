window.onload = function () {
  document
    .getElementById('contact-form')
    .addEventListener('submit', function (event) {
      event.preventDefault();
      // generate the contact number value
      this.contact_number.value = (Math.random() * 100000) | 0;
      emailjs.sendForm('contact_service', 'contact_form', this);
    });
};

function sendMail(contactForm) {
  emailjs
    .send('gmail', 'contact_service', {
      from_fname: contactForm.fname.value,
      from_lname: contactForm.lname.value,
      from_email: contactForm.email.value,
      query_request: contactForm.query.value,
    })
    .then(
      function (response) {
        console.log('SUCCESS', response);
      },
      function (error) {
        console.log('FAILED', error);
      }
    );
  return false; // To block from loading a new page
}
