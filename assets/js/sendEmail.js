var closeBtn = document.querySelector('.close');

function sendMail(contactForm) {
    emailjs.send("gmail", "holidayTrip", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project": contactForm.projectsummary.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}