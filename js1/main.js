function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please fill in all fields");
    return false;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}
