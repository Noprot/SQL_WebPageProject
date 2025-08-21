

window.onload = function() {

    console.log("Script starter successfully!");
    const loginForm = document.getElementById("login-form");
    console.log("Login form found:", loginForm);

    loginForm.addEventListener("submit", async(e) => {
        e.preventDefault();
        
        const formdata = new FormData(loginForm);
        const data = Object.fromEntries(formdata.entries());

        const response = await fetch('http://localhost:3000/submit-form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await response.text();
        console.log(result);
        alert('Form submitted! Check console for backend response.');
    });
}
