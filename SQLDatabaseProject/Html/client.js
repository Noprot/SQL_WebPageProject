window.onload = function() {

    console.log("Script starter successfully!");
    const loginForm = document.querySelector('.login-container form');
    console.log("Login form found:", loginForm);

    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const username = loginForm.username.value;
        const password = loginForm.password.value;

      

        console.log("");
        console.log("username:", loginForm.username.value);
        console.log("password:", loginForm.password.value);
        console.log("Form submitted successfully!");
    });
}
