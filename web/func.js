document.oncontextmenu = function() {
  event.returnValue = false;
}

var isstart = false;
var isstop = false;

window.onload = function() {
  document.getElementById('sec1').innerHTML.value = eel.cooldowns();
}

function sound() {
  var audio = document.createElement('audio');
  audio.src = 'sound/click.wav';
  audio.play();
}

function start() {
  if (isstart == false) {
    if (getel('sec1') != '') {
      isstart = true;
      auto('cmd1', 'sec1', 'loop1');
    }

    if (getel('sec2') != '') {
      isstart = true;
      auto('cmd2', 'sec2', 'loop2');
    }

    if (getel('sec3') != '') {
      isstart = true;
      auto('cmd3', 'sec3', 'loop3');
    }

    if (getel('sec4') != '') {
      isstart = true;
      auto('cmd4', 'sec4', 'loop4');
    }
  }
}

function auto(cmd, sec, loop) {
  var result = document.getElementById(cmd).value;
  var sec = document.getElementById(sec).value;
  var check = document.getElementById(loop).checked;
  document.getElementById('start').value = 'RUNNING';
  document.getElementById('start').disabled = true;
  document.getElementById('loop1').disabled = true;
  document.getElementById('loop2').disabled = true;
  document.getElementById('loop3').disabled = true;
  document.getElementById('loop4').disabled = true;
  eel.start(result, parseInt(sec), check);
}

function getel(entry) {
  e = document.getElementById(entry).value;
  return e;
}

function stop() {
  if (isstart == true) {
    isstart = false;
    eel.stops()
    document.getElementById('start').value = 'START';
    document.getElementById('start').disabled = false;
    document.getElementById('loop1').disabled = false;
    document.getElementById('loop2').disabled = false;
    document.getElementById('loop3').disabled = false;
    document.getElementById('loop4').disabled = false;
  }
}

function githun() {
  window.open('https://github.com/KSAN530/eel_autoype');
}

function reset() {
  if (isstart == false) {
    id = 1;
    entry = 4;
    while (id < entry + 1) {
      document.getElementById('cmd' + id).value = "";
      document.getElementById('sec' + id).value = "";
      document.getElementById('loop' + id).checked = false;
      id++;
    }
  }
}
