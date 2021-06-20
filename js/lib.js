console.log('hello,gulp.lol');

var sound = new Audio();
var volumeD = document.getElementById("vol-d");
var volumeF = document.getElementById("vol-f");
console.log(volumeD);
console.log(volumeF);

// エラー抑制
// https://qiita.com/krmbn0576/items/e9bc5384b790df9e39ab
// var promise = Promise.reject(new Error('promise!!!'));
// promise.catch(function(e){});
// setTimeout(function(){promise.catch(/* 適切なエラーハンドル */)},1000);



// クリックでの再生
function disc(ele){
  // const data = e.currentTarget.dataset['index'];
  var attr = ele.getAttribute('data-sumplerBtn');
  console.log(attr);

  switch (attr) {
    case 'd':
      sound.src = "./sounds/click.mp3";
      break;
    case 'f':
      sound.src = "./sounds/click2.mp3";
      break;
  };
  play();

};

// 初期化？
function init(){
  sound.preload = "auto";
  // disc();
  sound.src = "./sounds/click.mp3";
  sound.load();

  // 音量調節
  volumeD.addEventListener('change', function () {
    var volumeValue_d = (volumeD.value.length == 1) ? "0.0" + volumeD.value : "0." + volumeD.value ;
    sound.volume = volumeValue_d;
  },false);

}

var playbtn = document.querySelectorAll('.playbtn');

// キータッチでの再生
document.body.addEventListener("keydown",
  event => {
    var whatIsKey = event.key;
    switch (whatIsKey) {
      case 'd':
        sound.src = "./sounds/click.mp3";
        console.log("d pressed");
        break;
      case 'f':
        sound.src = "./sounds/click2.mp3";
        console.log("f pressed");
        break;
    }
    play();
    // if(event.key === "d"){
    //   console.log("d pressed");
    //   play();
    // } else if(event.key === "f") {
    //   console.log("f pressed");
    //   play();
    // }
  }
);




function play(){
  // sound.loop = true;
  sound.currentTime = 0;
  sound.play();
  // setTimeout(function(){
  //   sound.play();
  // },250);
  const playPromise = sound.play();
  if(playPromise !== null){
    playPromise.catch(() => {sound.play();})
  }
};




init();
