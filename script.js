const btn0 =document.getElementById("btn0"); // Home button //
const home =document.querySelector(".top");
const btn1 =document.getElementById("btn1"); // button za ip //
const info1 =document.getElementById("ip-info"); // ip info click //
const btn2 =document.getElementById("btn2"); //button za tcp //
const info2 =document.getElementById("tcp-info"); // tcp info click //
const btn3 =document.getElementById("btn3"); //button za udp //
const info3 =document.getElementById("udp-info"); //udp info //
const btn4 =document.getElementById("btn4"); // button za dns //
const info4 =document.getElementById("dns-info"); //info za dns //
const btn5 =document.getElementById("btn5");
const info5 =document.getElementById("nat-info");
const btn6 =document.getElementById("btn6");
const info6 =document.getElementById("http-info")
// ne znam kak da polzvam foreach ;-; //

function zatvori() {
    info1.style.display = "none";
    info2.style.display = "none";
    info3.style.display = "none";
    info4.style.display = "none";
    info5.style.display = "none";
    home.style.display = "none";
}

btn0.addEventListener("click", () => {
    zatvori();
    home.style.display = "block";
});

btn1.addEventListener("click", () => {
    zatvori();
    info1.style.display = "block"
    
});

btn2.addEventListener("click", () => {
    zatvori();
    info2.style.display = "block"
    
});

btn3.addEventListener("click", () => {
    zatvori();
    info3.style.display = "block"
    
});

btn4.addEventListener("click", () => {
    zatvori();
    info4.style.display = "block"
    
});

btn5.addEventListener("click", () => {
    zatvori();
    info5.style.display = "block"
    
});
