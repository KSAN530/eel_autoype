document.oncontextmenu = function() {
  event.returnValue = false;
}

function sound() {
  var audio = document.createElement('audio');
  audio.src = 'sound/click.wav';
  audio.play();
}

function start() {
  document.getElementById('start').disabled = true;
  document.getElementById('reset').disabled = true;
  id = 1;
  while (id < 4 + 1) {
    var cmd = document.getElementById('cmd' + id);
    var sec = document.getElementById('sec' + id);
    var loop = document.getElementById('loop' + id);
    loop.disabled = true;
    cmd.disabled = true;
    sec.disabled = true;
    eel.auto(cmd.value, sec.value, loop.checked);
    id++;
  }
}

function stop(){
  document.getElementById('start').disabled = false;
  document.getElementById('reset').disabled = false;
  id = 1;
  while (id < 4 + 1) {
    var cmd = document.getElementById('cmd' + id);
    var sec = document.getElementById('sec' + id);
    var loop = document.getElementById('loop' + id);
    loop.disabled = false;
    cmd.disabled = false;
    sec.disabled = false;
    eel.stop();
    id++;
  }
}

function loop(id) {
  var loop = document.getElementById('loop' + id).checked;
  loop = !loop;
}

function reset() {
  id = 1;
  entry = 4;
  while (id < entry + 1) {
    document.getElementById('cmd' + id).value = "";
    document.getElementById('sec' + id).value = "";
    document.getElementById('loop' + id).checked = false;
    id++;
  }
}

function github() {
  window.open('https://github.com/KSAN530/eel_autoype');
}
