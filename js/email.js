// Var
var form = document.getElementById("contactForm");
var btnSend = document.getElementById("btnSend");
var respEmail = document.getElementById("respEmail");
var emailnumber;

// Counter Clicks
function clicked() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.countapi.xyz/hit/novaturfcorp.com/contactform1");
  xhr.responseType = "json";
  xhr.onload = function () {
    emailnumber = this.response.value;
    //
    sendEmail();
  };
  xhr.send();
}

// Send Email
function sendEmail() {
  // Params
  var templateParams = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value,
    emailnumber: emailnumber,
  };

  // Send Email
  emailjs.send("service_6xam8ap", "template_tq5ebvp", templateParams).then(
    function (response) {
      respEmail.innerHTML = `
      <div class="text-success">
        Thanks for getting in touch! We should reply back within 24 hours
      </div>`;
      btnSend.innerHTML = "Send Message";
    },
    function (error) {
      respEmail.innerHTML = `
      <div class="text-success">
        Something went wrong.. Please use our live chat instead, is easier!
      </div>`;
      btnSend.innerHTML = "Send Message";
    }
  );
}

// Send Message Button!

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //
  btnSend.innerHTML = `
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span class="visually-hidden pl-1">Sending...</span>
  `;
  clicked();
});
