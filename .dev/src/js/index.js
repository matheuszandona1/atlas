function moveDivider(section) {
	const handler = document.getElementById(`handler${section}`)
	const slide = document.getElementById(`slide${section}`)
	const divisor = document.getElementById(`divisor${section}`)

	handler.style.left = slide.value + "%"
	divisor.style.width = slide.value + "%"
}

const slide1 = document.getElementById("slide1")
const slide2 = document.getElementById("slide2")

slide1.addEventListener("input", function () {
	moveDivider("1")
})

slide2.addEventListener("input", function () {
	moveDivider("2")
})

// Inicialize para a primeira seção
moveDivider("1")

// Inicialize para a segunda seção, se necessário
moveDivider("2")
