import { Howl, Howler } from "../../node_modules/howler/dist/howler.core.min.js";

// GET DRUM KIT BUTTONS
let kickBtn = document.getElementById("drum-box--kick");
let snareBtn = document.querySelector("#drum-box--snare");
let snapBtn = document.querySelector("#drum-box--snap");
let cHatBtn = document.querySelector("#drum-box--closed-hat");
let oHatBtn = document.querySelector("#drum-box--open-hat");
let lTomBtn = document.querySelector("#drum-box--tom-lo");
let hTomBtn = document.querySelector("#drum-box--tom-hi");
let rideBtn = document.querySelector("#drum-box--ride");
let crashBtn = document.querySelector("#drum-box--crash");

// IMPORT SOUNDS
const kick = new Howl({
  src: ["../../assets/snd/kick.wav"]
});
const snare = new Howl({
  src: ["../../assets/snd/snare.wav"]
});
const snap = new Howl({
  src: ["../../assets/snd/snap.wav"]
});
const cHat = new Howl({
  src: ["../../assets/snd/closed-hat.wav"]
});
const oHat = new Howl({
  src: ["../../assets/snd/open-hat.wav"]
});
const lTom = new Howl({
  src: ["../../assets/snd/low-tom.WAV"]
});
const hTom = new Howl({
  src: ["../../assets/snd/high-tom.WAV"]
});
const ride = new Howl({
  src: ["../../assets/snd/ride.wav"]
});
const crash = new Howl({
  src: ["../../assets/snd/crash.wav"]
});

// DELAY TIMER
var delay = function() {
  var timer = 0;
  return function(callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
};

// LISTEN FOR KEYDOWNS
document.body.addEventListener("keydown", function(e) {
    switch (e.keyCode) {
      case 81: // KICK -----------------//
        kick.play();
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

      case 87: // SNARE ----------------//
        snare.volume(0.7);
        snare.play();
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

      case 69: // SNAP -----------------//
        snap.volume(0.2);
        snap.play();
        let snapWait;
        snapBtn.classList.toggle("box-grow");

        function snapToggleClassDelay() {
          snapWait = window.setTimeout(snapToggleClassOff, 100);
        }

        function snapToggleClassOff() {
          snapBtn.classList.toggle("box-grow");
        }

        snapToggleClassDelay();
        break;

      case 82: // LOW TOM --------------//
        lTom.play();
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

      case 84: // HIGH TOM -------------//
        hTom.play();
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

      case 85: // CLOSED HAT -----------//
        cHat.volume(0.4);
        cHat.play();
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

      case 73: // OPEN HAT -------------//
        oHat.volume(0.5);
        oHat.play();
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

      case 79: // RIDE -----------------//
        ride.play();
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

      case 80: // CRASH ----------------//
        crash.volume(0.3);
        crash.play();
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
  },
  false
);

