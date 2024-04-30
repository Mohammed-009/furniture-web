function menuIcon() {
    let x= document.getElementById("mylinks");
    if(x.style.display=== "block") {
        x.style.display= "none";
    }
    else{
        x.style.display= "flex";
    }
}

function validateForm() {
    let fullName= document.contactForm.name.value;
    let mail= document.contactForm.email.value;
    let phoneNumber= document.contactForm.phone.value;
    let msg= document.contactForm.message.value;

    if(fullName== null || fullName=="" || mail== null || mail== "" || phoneNumber==null || phoneNumber=="" || msg== null || msg=="") {
        alert("Fill out all the fields!");
        return false;
    }
}