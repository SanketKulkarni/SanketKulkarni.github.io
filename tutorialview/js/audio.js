// function setSource() {
//   console.log('set source');
//   var video = document.querySelector('video');
//   video.src = 'https://archive.org/download/anita-leker-med-kameran/anita-leker-med-kameran.' +
//               (video.canPlayType('video/mp4') ? 'mp4' : 'ogv');
// }

// function mediaPlaybackRequiresUserGesture() {
//   // test if play() is ignored when not called from an input event handler
//   var video = document.createElement('video');
//   video.play();
//   return video.paused;
// }

// function removeBehaviorsRestrictions() {
//   var video = document.querySelector('video');
//   console.log('call load()');
//   video.load();
//   window.removeEventListener('keydown', removeBehaviorsRestrictions);
//   window.removeEventListener('mousedown', removeBehaviorsRestrictions);
//   window.removeEventListener('touchstart', removeBehaviorsRestrictions);
//   log('wait 1 second');
//   setTimeout(setSource, 1000);
// }


// Audio player
var my_media = null;
// Play audio
function playAudio(src) {

  if(){
    
  }
  my_media = new Audio(src, onSuccess, onError);
  my_media.play();
}

function stopAudio() {
  if (my_media) {
    my_media.pause();
    my_media.currentTime = 0;
  }
}

function onSuccess(){
  console.log("Success playing audio")
}

function onError(){
  console.log("Error playing audio")
}

function setSource() {
  console.log('set source');
  var audio = document.querySelector('audio');
  video.src = 'https://archive.org/download/anita-leker-med-kameran/anita-leker-med-kameran.' +
              (video.canPlayType('video/mp4') ? 'mp4' : 'ogv');
}

function mediaPlaybackRequiresUserGesture() {
  // test if play() is ignored when not called from an input event handler
  var video = document.createElement('video');
  video.play();
  return video.paused;
}

function removeBehaviorsRestrictions() {
  var video = document.querySelector('video');
  console.log('call load()');
  video.load();
  window.removeEventListener('keydown', removeBehaviorsRestrictions);
  window.removeEventListener('mousedown', removeBehaviorsRestrictions);
  window.removeEventListener('touchstart', removeBehaviorsRestrictions);
  log('wait 1 second');
  setTimeout(setSource, 1000);
}


if (mediaPlaybackRequiresUserGesture()) {
  console.log('wait for input event');
  window.addEventListener('keydown', removeBehaviorsRestrictions);
  window.addEventListener('mousedown', removeBehaviorsRestrictions);
  window.addEventListener('touchstart', removeBehaviorsRestrictions);
} else {
  console.log('no user gesture required');
  setSource();
}
