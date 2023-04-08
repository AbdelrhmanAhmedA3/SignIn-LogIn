let button =  document.querySelector(".form-control");
let input2 = document.querySelector(".input2");
let input3 = document.querySelector(".input3");
let StorageData = JSON.parse(localStorage.getItem("containerArray"))

button.addEventListener("click",checkEmail)
function checkEmail(e) {
    for(let i = 0; i < StorageData.length; i++){
        if (StorageData[i].email == input2.value && StorageData[i].password == input3.value) {
            window.location.href = "Home/index.html";
        }else{
            
        }

    }
    
}

