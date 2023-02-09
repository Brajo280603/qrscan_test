let videoElem = document.getElementById("videoStream");

const qrScanner = new QrScanner(videoElem, res => {
  console.log('decoded:',res);
})