const { json } = require("express");

window.onload = function() {

    console.log("Script starter successfully!");
    const loginForm = document.querySelector('.login-container form');
    console.log("Login form found:", loginForm);

    loginForm.addEventListener("submit", async(e) => {
        e.preventDefault();

        const formdata = new fetch(loginForm)
        const data = Object.fromEntries(formdata.fromEntries());
        
        const res = await fetch("/login", {
            method: "post",
            headers: { "content-type": "application/json"},
            body: JSON.stringify(data)
        })


        const result = await res.json();
        



        






        console.log("");
        console.log("username:", loginForm.username.value);
        console.log("password:", loginForm.password.value);
        console.log("Form submitted successfully!");
    });
}
