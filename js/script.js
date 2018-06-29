//////-----------MENU-BUTTON--------///////
var button = document.querySelector(".btn-menu")
var button_icon = document.querySelectorAll(".btn-menu span");
var patient = document.querySelector(".patient");
var content =  document.querySelector(".content");

var body = document.querySelector("body");
var patient_responsive =  document.querySelector(".patient-responsive");
button.addEventListener("click", function () {
    console.log("click olundu")

    if(patient.style.display == "none"){
        patient_responsive.style.height="100vh";
        body.style.overflowY="hidden"
        content.style.display = "none";
        patient.style.display = "block";
        button_icon[0].style.transform = "rotateZ(40deg)";
        button_icon[0].style.top = "25px";
        button_icon[0].style.transitions = "0.4s ease";

        button_icon[1].style.transform = "translate(-100px) rotateZ(0deg)";
        button_icon[1].style.opacity = "0";
        button_icon[1].style.transitions = "0.4s ease";

        button_icon[2].style.transform = "rotateZ(-40deg)";
        button_icon[2].style.top = "25px";
        button_icon[2].style.transitions = "0.4s ease";

        
    }
    else{
        patient_responsive.style.height="100%";
        body.style.overflowY="auto"
        console.log("block")
        patient.style.display = "none";
        content.style.display = "block"

        button_icon[0].style.transform = "rotateZ(0deg)";
        button_icon[0].style.top = "13px";
        button_icon[0].style.opacity = "1";
        button_icon[0].style.transitions = "0.4s ease";

        button_icon[1].style.transform = "rotateZ(0deg)";
        button_icon[1].style.top = "23px";
        button_icon[1].style.opacity = "1";
        button_icon[1].style.transitions = "0.4s ease";

        button_icon[2].style.transform = "rotateZ(0deg)";
        button_icon[2].style.top = "33px";
        button_icon[2].style.opacity = "1";
        button_icon[2].style.transitions = "0.4s ease";
        
    }
})
