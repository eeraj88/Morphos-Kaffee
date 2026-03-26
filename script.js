
// DARK MODE 


const darkModeBtn = document.getElementById("darkModeBtn");
const htmlElement = document.documentElement;

darkModeBtn.addEventListener("click", function () {

  const currentTheme = htmlElement.getAttribute("data-bs-theme");

  if (currentTheme === "dark") {

    htmlElement.setAttribute("data-bs-theme", "light");
    darkModeBtn.textContent = "🌙 Dark Mode";

  } else {

    htmlElement.setAttribute("data-bs-theme", "dark");
    darkModeBtn.textContent = "☀️ Light Mode";

  }

});


// EMAILJS — KONTAKTFORMULAR


emailjs.init("Mk2_ZRMHb-UvIL-5M");

const contactForm = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const successMsg = document.getElementById("successMsg");
const errorMsg = document.getElementById("errorMsg");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.classList.add("was-validated");
    return;
  }

  submitBtn.textContent = "Wird gesendet...";
  submitBtn.disabled = true;

  const params = {
    from_name: document.getElementById("from_name").value,
    from_email: document.getElementById("from_email").value,
    message: document.getElementById("message").value,
    title: "Neue Nachricht von " + document.getElementById("from_name").value,
  };

  emailjs
    .send("service_tvlk6dj", "template_ygcl039", params)
    .then(function () {
      successMsg.classList.remove("d-none");
      errorMsg.classList.add("d-none");
      contactForm.reset();
      contactForm.classList.remove("was-validated");
      submitBtn.textContent = "Nachricht senden";
      submitBtn.disabled = false;
    })
    .catch(function (error) {
      errorMsg.classList.remove("d-none");
      successMsg.classList.add("d-none");
      submitBtn.textContent = "Nachricht senden";
      submitBtn.disabled = false;
      console.log(error);
    });
});