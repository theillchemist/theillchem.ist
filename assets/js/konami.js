// https://stackoverflow.com/questions/31626852/how-to-add-konami-code-in-a-website-based-on-html

const KONAMI_CODE = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
document.addEventListener("keydown", (e) => {
	cursor = e.keyCode == KONAMI_CODE[cursor] ? cursor + 1 : 0;
	if (cursor == KONAMI_CODE.length) activate();
});

function activate() {
	var audio = new Audio("../audio/stickykeyssound.ogg");
	audio.play();
	window.location.href = "secret/index.html";
}

let cursor = 0;
