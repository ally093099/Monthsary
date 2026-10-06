const CODE = '0913';
const lockScreen = document.getElementById('lockScreen');
const mainContent = document.getElementById('mainContent');
const input = document.getElementById('secretCode');
const error = document.getElementById('errorMessage');

document.getElementById('unlockBtn').addEventListener('click', unlock);
input.addEventListener('keydown', e => { if (e.key === 'Enter') unlock(); });
function unlock(){
  if(input.value.trim() === CODE){
    lockScreen.style.display='none'; mainContent.hidden=false; burstHearts();
  } else { error.textContent='Not quite, lovelovee. Try again. 🤍'; input.value=''; input.focus(); }
}
document.querySelectorAll('.next').forEach(btn=>btn.addEventListener('click',()=>document.getElementById(btn.dataset.target).scrollIntoView({behavior:'smooth'})));
document.getElementById('surpriseBtn').addEventListener('click',()=>{document.getElementById('finalMessage').hidden=false; burstHearts(45);});
function burstHearts(count=18){ for(let i=0;i<count;i++){const h=document.createElement('span');h.className='heart';h.textContent=Math.random()>.25?'♥':'♡';h.style.left=(Math.random()*100)+'vw';h.style.animationDuration=(2+Math.random()*3)+'s';h.style.fontSize=(14+Math.random()*24)+'px';document.body.appendChild(h);setTimeout(()=>h.remove(),5000);} }
