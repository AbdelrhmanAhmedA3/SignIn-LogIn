let StorageData = JSON.parse(localStorage.getItem("containerArray"));
let nameUser = document.querySelector("#nameUser");
let backHome = document.querySelector(".backHome")

console.log(StorageData);

function checkEmail(e) {
    for(let i = 0; i < StorageData.length; i++){
    //     if (StorageData[i].name ){
    //         console.log(StorageData[i].name);
    // }
    nameUser.innerHTML=  `Welcome ${StorageData[i].name}`

    
}};
checkEmail();

backHome.addEventListener("click",home)
function home(){
    window.location.href="../index.html";
}