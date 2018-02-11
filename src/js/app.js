let kickBtn = document.getElementById("drum-box--kick");
let snareBtn = document.querySelector("#drum-box--snare");
let clapBtn = document.querySelector("#drum-box--clap");
let cHatBtn = document.querySelector("#drum-box--closed-hat");
let oHatBtn = document.querySelector("#drum-box--open-hat");
let lTomBtn = document.querySelector("#drum-box--tom-lo");
let hTomBtn = document.querySelector("#drum-box--tom-hi");
let rideBtn = document.querySelector("#drum-box--ride");
let crashBtn = document.querySelector("#drum-box--crash");




// let div = document.getElementsByTagName("div");
// console.log(div[4]);

console.log(kickBtn);

var delay = function() {
  var timer = 0;
  return function(callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
};


document.body.addEventListener("keydown", function(e) {
    // if (event.defaultPrevented) {
    //   return; // Do nothing if the event was already processed
    // }

    // console.log(e.keyCode);

    switch (e.keyCode) {
        case 81:
        // console.log("Kick")
            let kickWait;
            kickBtn.classList.toggle("box-grow");

            function kickToggleClassDelay() {
                kickWait = window.setTimeout(kickToggleClassOff, 100);
            }

            function kickToggleClassOff() {
                kickBtn.classList.toggle("box-grow");
            }

            kickToggleClassDelay();

            break;
        case 87:
            console.log("Snare");
            let snareWait;
            snareBtn.classList.toggle("box-grow");

            function snareToggleClassDelay() {
                snareWait = window.setTimeout(snareToggleClassOff, 100);
            }

            function snareToggleClassOff() {
              snareBtn.classList.toggle("box-grow");
            }
            snareToggleClassDelay();
            break;
        case 69:
            console.log("Clap");
            let clapWait;
            clapBtn.classList.toggle("box-grow");

            function clapToggleClassDelay() {
                clapWait = window.setTimeout(clapToggleClassOff, 100);
            }
            
            function clapToggleClassOff() {
              clapBtn.classList.toggle("box-grow");
            }

            clapToggleClassDelay();
            break;
        case 82:
            console.log("Low Tom");
            let lTomWait;
            lTomBtn.classList.toggle("box-grow");

            function lTomToggleClassDelay() {
                lTomWait = window.setTimeout(lTomToggleClassOff, 100);
            }

            function lTomToggleClassOff() {
              lTomBtn.classList.toggle("box-grow");
            }

            lTomToggleClassDelay();
            break;
        case 84:
            console.log("High Tom");
            let hTomWait;
            hTomBtn.classList.toggle("box-grow");

            function hTomToggleClassDelay() {
                hTomWait = window.setTimeout(hTomToggleClassOff, 100);
            }

            function hTomToggleClassOff() {
              hTomBtn.classList.toggle("box-grow");
            }
            hTomToggleClassDelay();
            break;
        case 85:
            console.log("Closed Hat");
            let cHatWait;
            cHatBtn.classList.toggle("box-grow");

            function cHatToggleClassDelay() {
              cHatWait = window.setTimeout(cHatToggleClassOff, 100);
            }
            
            function cHatToggleClassOff() {
              cHatBtn.classList.toggle("box-grow");
            }
            cHatToggleClassDelay();
            break;
        case 73:
            console.log("Open Hat");
            let oHatWait;
            oHatBtn.classList.toggle("box-grow");

            function oHatToggleClassDelay() {
                oHatWait = window.setTimeout(oHatToggleClassOff, 100);
            }
            
            function oHatToggleClassOff() {
              oHatBtn.classList.toggle("box-grow");
            }
            oHatToggleClassDelay();
            break;
        case 79:
            console.log("Ride Cymbal");
            let rideWait;
            rideBtn.classList.toggle("box-grow");

            function rideToggleClassDelay() {
                rideWait = window.setTimeout(rideToggleClassOff, 100);
            }
            
            function rideToggleClassOff() {
              rideBtn.classList.toggle("box-grow");
            }
            rideToggleClassDelay();
            break;
        case 80:
            console.log("Crash Cymbal");
            let crashWait;
            crashBtn.classList.toggle("box-grow");

            function crashToggleClassDelay() {
              crashWait = window.setTimeout(crashToggleClassOff, 100);
            }
            
            function crashToggleClassOff() {
              crashBtn.classList.toggle("box-grow");
            }
            crashToggleClassDelay();
            break;
            return; // Quit when this doesn't handle the key event.
        }

    // Cancel the default action to avoid it being handled twice
    // event.preventDefault();
  },
  false
);

window.addEventListener("keyup", function(event) {
    delay(function(){
        div.classList.remove("box-grow");
        }, 500 );
});
