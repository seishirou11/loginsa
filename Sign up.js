function toggleVisibility(id) {
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
  }
  
  document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const repeatPassword = document.getElementById("repeat-password").value;
  
    if (password !== repeatPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    alert(`Sign up successful!\nName: ${fullname}\nEmail: ${email}\nUsername: ${username}`);
  });
  