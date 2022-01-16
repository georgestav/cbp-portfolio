const container = document.getElementById("container");
const svgContainer = document.getElementById("svgLines");

const listPoints = [];

function genPosition() {
	let pLeft = Math.floor(Math.random() * 1001);
	let pTop = Math.floor(Math.random() * 501);
	listPoints.push([pLeft, pTop]);
	return `style="position: absolute; left: ${pLeft}px; top: ${pTop}px;"`;
}

function genElement() {
	let element = `<span class='dots' ${genPosition()}></span>`;
	return element;
}

function draw() {
	let point = container.insertAdjacentHTML("beforeend", genElement());
	return point;
}

function line() {
	listPoints.forEach((x, i, arr) => {
		let arrayNoCurrent = arr.filter((value, index) => {
			if (index !== i) {
				let svgLine = `<line class="line" x1="${x[0]}" y1="${x[1]}" x2="${value[0]}" y2="${value[1]}"/>`;
				svgContainer.insertAdjacentHTML("beforeend", svgLine);
			}
		});
	});
}

line();

let interval = setInterval(() => {
	draw();
	line();
}, 3000);
