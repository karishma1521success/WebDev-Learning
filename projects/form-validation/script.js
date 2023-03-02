const formEle = document.getElementById('form');
const nameInputEle = document.getElementById('name');
const emailInputEle = document.getElementById('email');
const genderEle = document.getElementById('gender');
const phoneNumberEle = document.getElementById('phone');
const passwordInputEle = document.getElementById('password');
const submitEle = document.getElementById('submit');


function handleFormValidation(event){
    event.preventDefault();   // so prevent form reload the page
    const name = nameInputEle.value;
    const email = emailInputEle.value;
    const gender = genderEle.value;
    const phoneNumber = phoneNumberEle.value;
    const password = passwordInputEle.value;
     
    if(name == "" ||  email == "" || gender == "" || phoneNumber == "" || password == "" ){
        alert("All fields are mandatory");
        return;
    }

    

    if(!email.includes('@') || !email.includes('.')){
         const emailErrorEle = document.getElementById('emailError');
         emailErrorEle.textContent = "Email must contain @ and .";
         return;
    }
}




formEle.addEventListener('submit' , handleFormValidation);

