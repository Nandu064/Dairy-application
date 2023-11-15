const diaryForm = document.getElementById("diary_form")


document.addEventListener("DOMContentLoaded",()=>{
    diaryForm.addEventListener("submit",(event)=>{
        event.preventDefault();
        const diaryContent = document.getElementById("diaryContent").value;
        let diaryObj = {
            diaryContent
        }
        console.log('diaryObj', diaryObj)
    })
})

