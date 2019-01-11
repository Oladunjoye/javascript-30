window.addEventListener('keydown', playSound)

function playSound(e) {
   
        const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
        const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`)
        const keys = document.querySelectorAll('.key')
        console.log(keys)
        if(!audio){
            return
        }
        audio.currentTime = 0
        audio.play()
        key.classList.add('playing')
        // function to remove transition after running
        function removeTransition(e){
           if(e.propertyName !== 'transform'){
               return
           }
           this.classList.remove('playing')
    
        }
        // to end transition for all keys
        keys.forEach((key) => {
            key.addEventListener('transitionend', removeTransition)
        })
    
}