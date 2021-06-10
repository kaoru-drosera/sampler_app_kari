console.log('hello,gulp.lol');

var sound = new Audio();
function init(){
  sound.preload = "auto";
  sound.src = "./sounds/click.mp3";
  sound.load();
}

var playbtn = document.querySelectorAll('.playbtn');

document.body.addEventListener("keydown",
  event => {
    if(event.key === "d"){
      console.log("d pressed");
      play();
    }
  }
);

function play(){
  // sound.loop = true;
  sound.currentTime = 0;
  sound.play();
};

init();
