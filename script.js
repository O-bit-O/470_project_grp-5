function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Perform validation here
  if (username === "admin" && password === "password") {
    alert("Login successful!");
    return true;
  } else {
    alert("Invalid username or password");
    return false;
  }
}
