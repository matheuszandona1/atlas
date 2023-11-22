const divisor = document.getElementById("divisor"),
	handle = document.getElementById("handle"),
	slider = document.getElementById("slider")

function moveDivisor() {
	handle.style.left = slider.value + "%"
	divisor.style.width = slider.value + "%"
}

window.onload = function () {
	moveDivisor()
}

const divider = document.getElementById("divider"),
	handler = document.getElementById("handler"),
	slide = document.getElementById("slide")

function moveDivider() {
	handler.style.left = slide.value + "%"
	divider.style.width = slide.value + "%"
}

window.onload = function () {
	moveDivider()
}
