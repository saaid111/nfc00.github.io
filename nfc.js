let count = 0;
async function readTag() {

    if ("NDEFReader" in window) {
      const ndef = new NDEFReader();

      try {
        await ndef.scan();
        ndef.onreading = event => {
          const decoder = new TextDecoder();
          for (const record of event.message.records) {
            
            

            if (decoder.decode(record.data) === "Apple.com") {
                if(count < 6){
                const circle = document.querySelectorAll(".circle"); // 
                circle[count].style.backgroundColor = "yellow";
                count++
                break; 
            }
              }
            
          }
        }
      } catch(error) {
        consoleLog(error);
      }
    } else {
      consoleLog("NFC is not supported. But You Can Check Your Progress!!!");

      
      let timeoutId;

    function consoleLog(data) {
    const logElement = document.getElementById('log');
    logElement.innerHTML += data + '\n';

    if (data === "NFC is not supported. But You Can Check Your Progress!!!") {
    timeoutId = setTimeout(() => {
      logElement.innerHTML = "";
    }, 3500); // 5000ms = 5 seconds
  } else {
    clearTimeout(timeoutId);
  }
      
}
  }
  
  
  function consoleLog(data) {
    var logElement = document.getElementById('log');
    logElement.innerHTML += data + '\n';

  }

}

