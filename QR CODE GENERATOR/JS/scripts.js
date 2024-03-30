const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr-form button")
const qrcodeInput = document.querySelector("#qr-form input")
const qrcodeImg = document.querySelector("#qr-code img")
//eventos

function generateqrcode(){
    const qrcodeInputValue = qrcodeInput.value
    console.log(qrcodeInputValue)
    if(!qrcodeInputValue) return

    qrCodeBtn.innerText = "gerando Código..."

    qrcodeImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrcodeInputValue}`

    qrcodeImg.addEventListener("load", ()=>{
        container.classList.add("active")
        qrCodeBtn.innerText = "Gerar outro"
    })

}


qrCodeBtn.addEventListener("click", () =>{
    generateqrcode()
})

qrcodeInput.addEventListener("keydown", (e) =>{
    if(e.code === "Enter")
    generateqrcode()
})

qrcodeInput.addEventListener("keyup", () =>{
    if(!qrcodeInput.value){
        container.classList.remove("active")
        qrCodeBtn.innerText = "Gerar QR Code"
    }
})

