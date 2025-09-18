window.onload = function() {

    console.log("Script starter successfully!");
    const Form = document.getElementById("register-form");
    console.log("Login form found:", Form);

    Form.addEventListener("submit", async(e) => {
        e.preventDefault();
        
        const formdata = new FormData(Form);
        const data = Object.fromEntries(formdata.entries());

        let username = data.username;
        let password = data.password;

        if (!username?.trim() || !password?.trim()) {
            console.log("Missing input!");
            return;
        }

        const response = await fetch('http://localhost:3000/Register-form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await response.text();

        //alert('Form submitted! Check console for backend response.');
        console.log('Response from server:', result);

    });
}
