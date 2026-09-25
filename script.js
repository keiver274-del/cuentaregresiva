function getNextOct5(){
  const now = new Date();
  let year = now.getFullYear();
  let target = new Date(year, 9, 5, 0, 0, 0); // mes 9 = octubre (0-indexed)
  if (target.getTime() <= now.getTime()){
    target = new Date(year + 1, 9, 5, 0, 0, 0);
  }
  return target;
}

const target = getNextOct5();
const elD = document.getElementById('d');
const elH = document.getElementById('h');
const elM = document.getElementById('m');
const elS = document.getElementById('s');
const timerBox = document.getElementById('timer');
const doneMsg = document.getElementById('done');

function pad(n){ return String(n).padStart(2,'0'); }

function tick(){
  const now = new Date().getTime();
  const diff = target.getTime() - now;
  if (diff <= 0){
    timerBox.style.display = 'none';
    doneMsg.style.display = 'block';
    clearInterval(interval);
    return;
  }
  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff / (1000*60*60)) % 24);
  const mins = Math.floor((diff / (1000*60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);
  elD.textContent = pad(days);
  elH.textContent = pad(hours);
  elM.textContent = pad(mins);
  elS.textContent = pad(secs);
}

tick();
const interval = setInterval(tick, 1000);
