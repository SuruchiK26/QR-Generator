let qrCode = document.getElementById("qrcode");
let qrImage = document.getElementById("qrimage");
let qrInput = document.getElementById("qrinput");



  function generateQR(){
  //   if(qrInput.value.length > 0){
  //    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrinput.value;
  //    qrCode.classList.add("show-img");
  //   }

  //   else{
  //   qrInput.classList.add('error');
  //   setTimeout(()=>{
  //   qrInput.classList.remove('error');
  //   },1000)
               
  //  }

  // }

  let value = qrInput.value;
  if(value){
    qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrinput.value;
  }
}