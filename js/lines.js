const container = document.getElementById("svg");
const svgLines = document.getElementById("svgLines");
const listPoints = [];

function genPosition() {
	let pLeft = Math.floor(Math.random() * (container.clientWidth - 10));
	let pTop = Math.floor(Math.random() * (container.clientHeight - 10));
	listPoints.push([pLeft, pTop]);
	return `cx="${pLeft}" cy="${pTop}"`;
}

function genDot() {
	let element = `<circle class="dots fade-in-dots" ${genPosition()} r="4"/>`;
	return element;
}

function draw() {
	let point = svgLines.insertAdjacentHTML("beforeend", genDot());
	return point;
}

function line() {
	listPoints.forEach((x, i, arr) => {
		let arrayNoCurrent = arr.filter((value, index) => {
			if (index !== i) {
				let svgLine = `<line class="line fade-in-line" x1="${x[0]}" y1="${x[1]}" x2="${value[0]}" y2="${value[1]}"/>`;
				svgLines.insertAdjacentHTML("afterbegin", svgLine);
			}
		});
	});
}

var timesRun = 0;
var interval = setInterval(function () {
	timesRun++;
	if (timesRun === 20) {
		clearInterval(interval);
	}
	draw();
	line();
}, 3000);
