const loginForm = document.getElementById("login_form")


document.addEventListener("DOMContentLoaded",()=>{
    loginForm.addEventListener("submit",(event)=>{
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        let loginObj = {
            email,password
        }
        console.log('loginObj', loginObj)
    })
})

