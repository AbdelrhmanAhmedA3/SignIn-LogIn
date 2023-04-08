let regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let input3 = document.querySelector(".input3");
let error = document.querySelector(".error");
let error2 = document.querySelector(".error2");
let button =  document.querySelector(".form-control");
let StorageData = []
// ========== == =================//
if (localStorage.getItem("containerArray") == null) {
    StorageData = []
}else{
    StorageData = JSON.parse(localStorage.getItem("containerArray"))
}

let x;
button.addEventListener("click",submitFormData)
function submitFormData(e) {
    let inputGroubObject = {
            name : input1.value , 
            email :  input2.value , 
            password : input3.value,
        };
        if (inputGroubObject.name && inputGroubObject.email && inputGroubObject.password) {
        
        if(checkEmail())
        {
           error.classList.replace("d-none","d-flex")
           error2.classList.replace("d-none","d-flex")
        }
        else
        {
            if (regexEmail.test(inputGroubObject.email) ) { 
                StorageData.push(inputGroubObject)
                clearInputs()
                localStorage.setItem("containerArray",JSON.stringify(StorageData))
                window.location.href = "../index.html";
            }else{
                console.log("false");
            }
        }
        
        
    }else{
        console.log("false Hii");
    }
};
function checkEmail(e) {
    for(let i = 0; i < StorageData.length; i++){
        if (StorageData[i].email.toLowerCase() == input2.value.toLowerCase() && StorageData[i].name.toLowerCase() == input1.value.toLowerCase()) {
            return true;
        }

    }
}
function clearInputs() {
    input1.value = "";
    input2.value = "";
    input3.value = "";
};