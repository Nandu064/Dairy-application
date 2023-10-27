// declaring the buttons
const sign_up_btn = document.getElementById("sign-up")
const sign_in_btn = document.getElementById("sign-in")
const page_title = document.getElementsByTagName("title") 
// addding eventlisteners
sign_up_btn.addEventListener("click",()=>{
    console.log("clicked")
    page_title[0].innerText = "Register Page"
    console.log('page_title', page_title)
})

sign_in_btn.addEventListener("click",()=>{
    console.log("clicked")
    page_title[0].innerText = "Login Page"
    console.log('page_title', page_title)

})

