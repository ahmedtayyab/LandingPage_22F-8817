document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Email Validation
    const email = document.getElementById("email").value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email format.";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    if (isValid) {
        alert("Password reset link has been sent to your email.");
        // Simulate sending an email (In real-world, you’d call a backend API)
    }
});
