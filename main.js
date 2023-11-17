// code to show when website was last updated
// fulfills 5.6a

document.addEventListener("DOMContentLoaded", function () {
  var lastModifiedDate = new Date(document.lastModified);
  var formattedDate = lastModifiedDate.toLocaleString("en-US", {
    timeZoneName: "short",
  });
  document.getElementById("lastUpdated").textContent =
    "Last Updated: " + formattedDate;
});

// JS Form Validation
// fulfills 5.6b, 5.6c

function validateForm(event) {

  event.preventDefault();

  // Get form values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const topic = document.getElementById("topic").value;
  const message = document.getElementById("message").value;

  // Perform validation
  if (!firstName || !lastName || !email || !topic || !message) {
    document.getElementById("error-message").innerText =
      "Please fill out all required fields.";
  } else {
    // Display a success message
    alert("Form submitted successfully!");
  }
}
