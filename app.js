const num = document.querySelector("#num");
const msg = document.querySelector("#msg");
const api = "https://api.whatsapp.com/send?phone=";
const output = document.querySelector("#output");

function clickHandler() {

    const message = msg.value;
    const phNo = num.value
    const computedMsg = message.split(" ").join("%20")

    // console.log(computedMsg)

    const url = `${api}${phNo}&text=${computedMsg}`
    
    // console.log(url)
    navigator.clipboard.writeText(url)
    output.innerText = url;

    alert("Link copied !!");
}