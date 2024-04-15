function playSound(e){
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      if(!audio) return; // stop the function from running all togther

      audio.currentTime = 0;
      audio.play();
      key.classList.add('playing');
}
function removeTransition(e){
      if (e.propertyName !== 'transform') return;
      e.target.classList.remove('playing');
}

window.addEventListener('keydown', playSound);
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
