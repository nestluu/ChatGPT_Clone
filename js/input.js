const inputField = document.getElementById('inputField')
const btnEnter = document.querySelector('.second-input-btn-enter')

inputField.addEventListener('input', function () {
	this.style.height = 'auto' // Сбрасываем высоту, чтобы корректно вычислить новую
	const newHeight = this.scrollHeight

	// Проверяем новую высоту
	if (newHeight < 300) {
		this.style.height = newHeight + 'px' // Устанавливаем новую высоту, если она меньше 300px
	} else {
		this.style.height = '230px' // Ограничиваем высоту до 300px
		this.style.paddingRight = '0.5rem'
	}
})

if (document.querySelector('.btn-rl').classList.contains('bgr')) {
	console.log('пись')
	inputField.style.color = '#fff'
}

inputField.addEventListener('input', function () {
	if (inputField.value.trim().length > 0) {
		btnEnter.classList.add('act')
		btnEnter.disabled = false
	} else {
		btnEnter.classList.remove('act')
		btnEnter.disabled = true
	}
})
