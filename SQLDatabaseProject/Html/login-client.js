window.onload = function() {
    const Form = document.getElementById("login-form");

    const infoBox = document.getElementById('info-box');
    const infoMessage = document.getElementById("info-message");

    function showinfo(message)
    {
        infoBox.classList.add("show");
        infoMessage.textContent = message;
    }
    function hideInfo() {
        infoBox.classList.remove("show");
    }

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
        try {
            const response = await fetch('http://localhost:3000/Login-form',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
                credentials: 'include'
            });
            fetch("http://localhost:3000/getSession", {
                method: "Get",
                credentials: "include"
            });

            const result = await response.text();
            showinfo(result);
        }
        catch (err) {
            showinfo(err);
        }
    });
}