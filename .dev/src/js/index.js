function moveDivider(section) {
	const handler = document.getElementById(`handler${section}`)
	const slide = document.getElementById(`slide${section}`)
	const divisor = document.getElementById(`divisor${section}`)

	handler.style.left = slide.value + "%"
	divisor.style.width = slide.value + "%"
}

window.onload = function () {
	moveDivider("1") // Inicialize para a primeira seção
	moveDivider("2") // Inicialize para a segunda seção, se necessário
}
