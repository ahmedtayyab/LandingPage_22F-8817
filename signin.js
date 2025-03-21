document.getElementById("signinForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop the form from submitting normally

    let isValid = true;

    // Get form values
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Clear previous errors
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    // Email validation (simple regex)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email format.";
        isValid = false;
    }

    // Password validation (at least 6 characters)
    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
        isValid = false;
    }

    if (isValid) {
        // Simulate authentication (for now, we just show an alert)
        alert("Login successful!");

        // Redirect to dashboard or homepage (Change this later when adding backend)
        window.location.href = "index.html";
    }
});
