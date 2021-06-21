console.log('hello,gulp.lol');



// 上段
var soundQ = new Audio();
var soundW = new Audio();
var soundE = new Audio();
var soundR = new Audio();
soundQ.src = "./sounds/ラッパのファンファーレ.mp3";
soundW.src = "./sounds/ドンドンパフパフ.mp3";
soundE.src = "./sounds/レベルアップ.mp3";
soundR.src = "./sounds/歓声と拍手.mp3";
var volumeQ = document.getElementById("vol-q");
var volumeW = document.getElementById("vol-w");
var volumeE = document.getElementById("vol-e");
var volumeR = document.getElementById("vol-r");
var loopQ = document.getElementById("loopable_q");
var loopW = document.getElementById("loopable_w");
var loopE = document.getElementById("loopable_e");
var loopR = document.getElementById("loopable_r");
var volumeValue_q;
var volumeValue_w;
var volumeValue_e;
var volumeValue_r;
var loopValue_q;
var loopValue_w;
var loopValue_e;
var loopValue_r;
console.log(volumeQ);
console.log(volumeW);
console.log(volumeE);
console.log(volumeR);


// 中段
var soundA = new Audio();
var soundS = new Audio();
var soundD = new Audio();
var soundF = new Audio();
soundA.src = "./sounds/和太鼓でドン.mp3";
soundS.src = "./sounds/和太鼓でドドン.mp3";
soundD.src = "./sounds/ピコピコハンマー.mp3";
soundF.src = "./sounds/チーン1.mp3";
var volumeA = document.getElementById("vol-a");
var volumeS = document.getElementById("vol-s");
var volumeD = document.getElementById("vol-d");
var volumeF = document.getElementById("vol-f");
var loopA = document.getElementById("loopable_a");
var loopS = document.getElementById("loopable_s");
var loopD = document.getElementById("loopable_d");
var loopF = document.getElementById("loopable_f");
var volumeValue_a;
var volumeValue_s;
var volumeValue_d;
var volumeValue_f;
var loopValue_a;
var loopValue_s;
var loopValue_d;
var loopValue_f;
console.log(volumeA);
console.log(volumeS);
console.log(volumeD);
console.log(volumeF);

// 下段
var soundZ = new Audio();
var soundX = new Audio();
var soundC = new Audio();
var soundV = new Audio();
soundZ.src = "./sounds/クイズ出題1.mp3";
soundX.src = "./sounds/決定、ボタン押下22.mp3";
soundC.src = "./sounds/クイズ不正解1.mp3";
soundV.src = "./sounds/クイズ正解1.mp3";
var volumeZ = document.getElementById("vol-z");
var volumeX = document.getElementById("vol-x");
var volumeC = document.getElementById("vol-c");
var volumeV = document.getElementById("vol-v");
var loopZ = document.getElementById("loopable_z");
var loopX = document.getElementById("loopable_x");
var loopC = document.getElementById("loopable_c");
var loopV = document.getElementById("loopable_v");
var volumeValue_z;
var volumeValue_x;
var volumeValue_c;
var volumeValue_v;
var loopValue_z;
var loopValue_x;
var loopValue_c;
var loopValue_v;
console.log(volumeZ);
console.log(volumeX);
console.log(volumeC);
console.log(volumeV);

var sound = [soundQ, soundW, soundE, soundR, soundA, soundS, soundD, soundF, soundZ, soundX, soundC, soundV];

// エラー抑制
// https://qiita.com/krmbn0576/items/e9bc5384b790df9e39ab
// var promise = Promise.reject(new Error('promise!!!'));
// promise.catch(function(e){});
// setTimeout(function(){promise.catch(/* 適切なエラーハンドル */)},1000);



// // クリックでの再生
// function disc(ele){
//   // const data = e.currentTarget.dataset['index'];
//   var attr = ele.getAttribute('keytouch');
//   console.log(attr);
//
//   switch (attr) {
//     case 'd':
//     play(soundD);
//       break;
//     case 'f':
//     play(soundF);
//       break;
//   };
//
// };

// 初期化？
var init = sound.map(function(value){
    console.log(value);
    value.preload = "auto";
    value.load();
  }
);

function volumeInit(soundName, volume, volumeValue){
  // 音量調節
  volume.addEventListener('change', function () {
    volumeValue = (volume.value.length == 1) ? "0.0" + volume.value : "0." + volume.value ;
    soundName.volume = volumeValue;
  },false);
}

function loopInit(soundName, loop, loopValue){
  // ループ切り替え
  loop.addEventListener('change', function () {
    loopValue = (loop.checked == true) ? loop.loop = true : loop.loop = false;
    soundName.loop = loopValue;
  },false);
}
console.log(soundD.loop);
// console.log(loopValue_f);

var playbtn = document.querySelectorAll('.playbtn');

// キータッチでの再生
document.body.addEventListener("keydown",
  event => {
    var whatIsKey = event.key;
    switch (whatIsKey) {

      // 上段
      case 'q':
        play(soundQ, loopQ, loopValue_q);
        console.log("q pressed");
        break;
      case 'w':
        play(soundW, loopW, loopValue_w);
        console.log("w pressed");
        break;
      case 'e':
        play(soundE, loopE, loopValue_e);
        console.log("e pressed");
        break;
      case 'r':
        play(soundR, loopR, loopValue_r);
        console.log("r pressed");
        break;

      // 中段
      case 'a':
        play(soundA,loopA,loopValue_a);
        console.log("a pressed");
        break;
      case 's':
        play(soundS,loopS,loopValue_s);
        console.log("s pressed");
        break;
      case 'd':
        // document.getElementById("caseBtn_d").onclick;
        play(soundD,loopD,loopValue_d);
        console.log("d pressed");
        break;
      case 'f':
        // document.getElementById("caseBtn_f").onclick;
        play(soundF,loopF,loopValue_f);
        console.log("f pressed");
        break;

        // 下段
        case 'z':
          play(soundZ, loopZ, loopValue_z);
          console.log("z pressed");
          break;
        case 'x':
          play(soundX, loopX, loopValue_x);
          console.log("x pressed");
          break;
        case 'c':
          play(soundC, loopC, loopValue_c);
          console.log("c pressed");
          break;
        case 'v':
          play(soundV, loopV, loopValue_v);
          console.log("v pressed");
          break;
    }





//     play();
//     // if(event.key === "d"){
//     //   console.log("d pressed");
//     //   play();
//     // } else if(event.key === "f") {
//     //   console.log("f pressed");
//     //   play();
//     // }
  }
);



// function loopable(checkbox = false){
//   var bool;
//   if(checkbox.checked){
//     bool = true;
//     // console.log(bool);
//   } else {
//     bool = false;
//     // console.log(bool);
//   }
//   return bool;
// }


function play(plaing,loop,loopValue){
  if(loop.loop == true){
    console.log("switchPlay mode");
    if(plaing.paused == false){
      plaing.pause();
    } else {
      plaing.currentTime = 0;
      plaing.play();
    };
  } else {
    console.log("normalPlay mode");
    plaing.currentTime = 0;
    plaing.play();
  };
  console.log(plaing.paused);
  // setTimeout(function(){
  //   sound.play();
  // },250);
  // const playPromise = sound.play();
  // if(playPromise !== null){
  //   playPromise.catch(() => {sound.play();})
  // }
};






init;
