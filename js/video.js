var video;
var slider;
var volume;
var tempvolume;
var mute;

window.addEventListener("load", function() {
	video = document.getElementById('player1');
	slider = document.getElementById('slider');
	volume = document.getElementById('volume');
	mute = document.getElementById('mute');
	video.removeAttribute('autoplay'); 
	video.removeAttribute('loop'); // setAttribute does not change anything, but this works - see console logs below
	console.log("autoplay value: " + video.autoplay);
	console.log("loop value: " + video.loop);
});

document.querySelector('#play').addEventListener('click', function() {
	video.play();
	slider.setAttribute('value',video.volume*100);
	volume.textContent = video.volume*100 + '%';
});
document.querySelector('#pause').addEventListener('click', function() {
	video.pause();
});
document.querySelector('#slower').addEventListener('click', function() {
	video.playbackRate = video.playbackRate*.9;
	console.log('new speed: ' + video.playbackRate);
});
document.querySelector('#faster').addEventListener('click', function() {
	video.playbackRate = video.playbackRate/.9;
	console.log('new speed: ' + video.playbackRate);
});
document.querySelector('#skip').addEventListener('click', function() {
	if (video.duration - video.currentTime < 10) video.currentTime = 0;
	else video.currentTime += 10;
});
document.querySelector('#mute').addEventListener('click', function() {
	video.muted = !video.muted
	if (mute.textContent == 'Mute') mute.textContent = 'Unmute';
	else mute.textContent = 'Mute';
});
// should the video volume be altered if it is muted?
// should the slider be set to 0 when it is muted?
// should the slider be set back to its original position when it is unmuted?
document.querySelector('#slider').addEventListener('change', function() {
	volume.textContent = slider.value + '%';
	video.volume = slider.value/100;
});
document.querySelector('#vintage').addEventListener('click', function() {
	video.classList.add('oldSchool');
})
document.querySelector('#orig').addEventListener('click', function() {
	video.classList.remove('oldSchool');
})