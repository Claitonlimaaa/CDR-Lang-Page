   const video = document.getElementById('videoPlayer');

    video.addEventListener('click', function () {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });

let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-phone');
let closeMenu = document.getElementById ('btn-close')
    
btnMenu.addEventListener('click', () => {
menu.classList.add('abrirmenu');
});
closeMenu.addEventListener('click',() =>{
    menu.classList.remove('abrirmenu')
})