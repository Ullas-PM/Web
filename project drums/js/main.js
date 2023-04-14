    //themeing
    var dnl = document.getElementById('icon');

    dnl.onclick = function (e) {
      document.body.classList.toggle("light-theme")
      if (document.body.classList.contains("light-theme")) {
        icon.src = "images/moon.png";
      } else {
        icon.src = "images/sun.png"
      }

    }


    // on click play sound function

    function playOnClick(e){

      // console.log(e.currentTarget.getAttribute('data-key'));

      const audio = document.querySelector(`audio[data-key="${e.currentTarget.getAttribute('data-key')}"]`) 
      
      if(!audio) return; 
  
      audio.currentTime = 0; 
  
      audio.play();
  
      const key = document.querySelector(`.key[data-key="${e.currentTarget.getAttribute('data-key')}"]`); 
      
      key.classList.toggle('playing'); 
  
    };



  
  //playing audio on key press function
  
  function playSound(e){ 

    // selection of audio according to pressed key

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); 

    // console.log(audio);

    if(!audio) return; //if preesed key gives no audio press q no assigned audio to q so function stops

    //else

    audio.currentTime = 0; // rewind to start

    audio.play();
  
    //adding  animation transformation

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); 
    
    key.classList.toggle('playing');  
  };


  //removing animation function

  function removePlaying(e){
    if(e.propertyName !== 'transform') return; // skip if no transform
    //if transformends remove playing
    this.classList.remove('playing');
  
  };



  // listen for keydown

  window.addEventListener('keydown', playSound);

  
  // transform end for each key

  const keys = document.querySelectorAll('.key'); // array of keys
  
  //effect to each key

  keys.forEach( key  => key.addEventListener('transitionend', removePlaying));

  keys.forEach( key  => key.addEventListener('click', playOnClick));
  



  //follow at  ig __hum.alien__  ullas p m