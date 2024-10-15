const popup1 = document.querySelector('.popup-avatar')
const openPopupButton1 = document.querySelector('.first-header__avatar')

const popup3 = document.querySelector('.popup-model')
const openPopupButton3 = document.querySelector('.select')

const popup4 = document.querySelector('.chat-popup')
const openPopupButton4 = document.querySelector('.chat-list-btn')

const hand = document.querySelector('.hand-plan')
const handler = document.querySelector('.handler')
document.addEventListener('click', e => {
	//ПОПАП АВАТАР
	if (e.target.closest('.first-header__avatar')) {
		if (popup1.style.display === 'block') {
			popup1.style.display = 'none'
		} else {
			popup1.style.display = 'block'
		}
	}
	if (e.target.closest('.popup-avatar')) {
		popup1.style.display = 'block'
	}

	if (
		!e.target.closest('.first-header__avatar') &&
		!e.target.closest('.popup-avatar')
	) {
		popup1.style.display = 'none'
	}

	//ПОПАП МОДЕЛЬ

	if (e.target.closest('.select')) {
		if (popup3.style.display === 'block') {
			popup3.style.display = 'none'
		} else {
			popup3.style.display = 'block'
		}
	}
	if (e.target.closest('.popup-model')) {
		popup3.style.display = 'block'
	}

	if (!e.target.closest('.popup-model') && !e.target.closest('.select')) {
		popup3.style.display = 'none'
	}
	if (e.target.closest('.btn-rl')) {
		popup3.style.display = 'none'
	}

	//ПОПАП ЧАТА

	if (e.target.closest('.chat-list-btn')) {
		if (popup4.style.display === 'block') {
			popup4.style.display = 'none'
		} else {
			popup4.style.display = 'block'
		}
	}
	if (e.target.closest('.chat-popup')) {
		popup4.style.display = 'block'
	}

	if (!e.target.closest('.chat-popup') && !e.target.closest('.chat-list-btn')) {
		popup4.style.display = 'none'
	}

	if (e.target.closest('.hand-plan')) {
		if (handler.style.transform === 'translateX(113px)') {
			handler.style.transform = 'translateX(0)'
			document.querySelector('.plan-wrap').style.display = 'flex'
			document.querySelector('.plan-wrap2').style.display = 'flex'
			document.querySelector('.plan-wrap3').style.display = 'none'
			document.querySelector('.plan-wrap4').style.display = 'none'
		} else {
			handler.style.transform = 'translateX(113px)'
			document.querySelector('.plan-wrap').style.display = 'none'
			document.querySelector('.plan-wrap2').style.display = 'none'
			document.querySelector('.plan-wrap3').style.display = 'flex'
			document.querySelector('.plan-wrap4').style.display = 'flex'
		}
	}
})

const timelessChat = document.querySelector('.timeless-chat')
const mainContent = document.querySelector('.first-main')
const input = document.querySelector('.second-input-wrap')
const block = document.querySelector('.block')

const rl = document.querySelector('.btn-rl')
rl.addEventListener('click', () => {
	document.querySelector('.btn-rl > span').classList.toggle('r')
	rl.classList.toggle('bgr')
	timelessChat.classList.toggle('flex')
	mainContent.classList.toggle('none')
	input.classList.toggle('tlinput')
	block.classList.toggle('db')

	document.querySelector('.left-side__link-logo').classList.toggle('gray')
	document.querySelector('.left-side__link-logo2').classList.toggle('gray')
	document.querySelectorAll('.left-side__link-text')[0].classList.toggle('gray')
	document.querySelectorAll('.left-side__link-text')[1].classList.toggle('gray')
	document.querySelector('.chat-title > h3').classList.toggle('gray')
	document.querySelector('.chat-list-title').classList.toggle('gray')
})

const closeBtn = document.querySelector('.close')
const settings = document.querySelector('.stgs')
const settingsMob = document.querySelector('.setting-mob')
const overlay = document.querySelector('.overlay')

settings.addEventListener('click', () => {
	overlay.classList.add('grid')
})

settingsMob.addEventListener('click', () => {
	overlay.classList.add('grid')
})

closeBtn.addEventListener('click', () => {
	overlay.classList.remove('grid')
})

overlay.addEventListener('click', e => {
	if (e.target === overlay) {
		overlay.classList.remove('grid')
	}
})

hand.onselectstart = function () {
	return false
}

hand.addEventListener('copy', function (e) {
	e.preventDefault()
})

hand.addEventListener('dragstart', function (e) {
	e.preventDefault()
})

const clse = document.getElementById('close')
clse.addEventListener('click', () => {
	document.querySelector('.plan-popup').classList.remove('flex')
})

const plan = document.querySelector('.plan')

plan.addEventListener('click', () => {
	document.querySelector('.plan-popup').classList.add('flex')
})

const chatBtn = document.querySelector('.chat-list')

chatBtn.addEventListener('click', () => {
	window.location.href = 'index.html?runScript=true'
	timelessChat.style.display = 'none'
	mainContent.style.display = 'none'
	document.querySelector('.user-mes').style.display = 'block'
	document.querySelector('.gpt-mes').style.display = 'block'
})
