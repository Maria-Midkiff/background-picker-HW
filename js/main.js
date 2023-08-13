// original used with audio files not in a folder
// document.getElementById('purple').onclick = function () {
	// playSound();
	// partyPurple();
// };
// document.getElementById('green').onclick = function () {
	// playSoundGreen();
	// partyGreen();
// };
// document.getElementById('blue').onclick = function () {
	// playSoundBlue();
	// partyBlue();
// };
// document.getElementById('orange').onclick = function () {
	// playSoundOrange();
	// partyOrange();
// };

// function playSound() {
	// const audio = new Audio('C:100Dev Classes\\class12-materials\\class12-materials\\background-picker - Maria Midkiff\\cow-moos-76219.mp3');
	// audio.play();
// }
// function playSoundGreen() {
	// const audio = new Audio('C:100Dev Classes\\class12-materials\\class12-materials\\background-picker - Maria Midkiff\\cat-meow.wav');
	// audio.play();
// }
// function playSoundBlue() {
	// const audio = new Audio('C:100Dev Classes\\class12-materials\\class12-materials\\background-picker - Maria Midkiff\\canadian-geese.wav');
	// audio.play();
// }
// function playSoundOrange() {
	// const audio = new Audio('C:100Dev Classes\\class12-materials\\class12-materials\\background-picker - Maria Midkiff\\funk-trumpet_87bpm_G_minor.wav');
	// audio.play();
// }
	
// updated so sound can be heard on git hub
document.getElementById('purple').onclick = function () {
	playSound('audio/cow-moos-76219.mp3');
	partyPurple();
};
document.getElementById('green').onclick = function () {
	playSound('audio/cat-meow.wav');
	partyGreen();
};
document.getElementById('blue').onclick = function () {
	playSound('audio/canadian-geese.wav');
	partyBlue();
};
document.getElementById('orange').onclick = function () {
	playSound('audio/funk-trumpet_87bpm_G_minor.wav');
	partyOrange();
};

function playSound(soundFile) {
	const audio = new Audio(soundFile);
	audio.play();
}
	
function partyPurple() {
	document.querySelector('body').style.backgroundColor = 'rgba(241, 63, 247, 1)'
	document.querySelector('body').style.color = 'red'
}
function partyGreen() {
	document.querySelector('body').style.backgroundColor = 'rgba(0, 253, 81, 1)'
	document.querySelector('body').style.color = 'yellow'
}
function partyBlue() {
	document.querySelector('body').style.backgroundColor = 'rgba(0, 254, 255)'
	document.querySelector('body').style.color = 'white'
}
function partyOrange() {
	document.querySelector('body').style.backgroundColor = 'rgba(233, 12, 12, 0.996)'
	document.querySelector('body').style.color = 'brown'
}