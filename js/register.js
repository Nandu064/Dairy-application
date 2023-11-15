const registerForm = document.getElementById("register_form")


document.addEventListener("DOMContentLoaded",()=>{
    registerForm.addEventListener("submit",(event)=>{
        event.preventDefault();
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        let registerObj = {
            firstName,lastName,email,password
        }
        console.log('registerObj', registerObj)
    })
})

