let startTime, endTime;
let downloadSize = 1024 * 1024 * 5; // Size of download test file in bytes
var userImageLink =  "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200714180638/CIP_Launch-banner.png"; 
function startDownloadTest() {
  startTime = (new Date()).getTime();
  var download = new Image();
  download.src = userImageLink;
  download.onload = function() {
    endTime = (new Date()).getTime();
    calculateDownloadSpeed();
  }
}

function calculateDownloadSpeed() {
  var duration = (endTime - startTime) / 1000;
  var bitsLoaded = downloadSize * 8;
  var speedBps = (bitsLoaded / duration).toFixed(2);
  var speedKbps = (speedBps / 1024).toFixed(2);
  var speedMbps = (speedKbps / 1024).toFixed(2);
  document.getElementById("kbs").innerHTML = `Speed: ${speedKbps} kbps`;
  document.getElementById("mbs").innerHTML = `Speed: ${speedMbps} Mbps`;
}

startDownloadTest();