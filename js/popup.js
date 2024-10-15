const popup1 = document.querySelector('.popup-avatar')
const openPopupButton1 = document.querySelector('.first-header__avatar')

const popup2 = document.querySelector('.popup-question')
const openPopupButton2 = document.querySelector('.question')

const popup3 = document.querySelector('.popup-model')
const openPopupButton3 = document.querySelector('.select')

const popup6 = document.querySelector('.popup-model-mobile')
const mobileHandModel = document.querySelector(
	'.first-header-mobile-hand-model'
)

const popup4 = document.querySelector('.chat-popup')
const openPopupButton4 = document.querySelector('.chat-list-btn')

const popup5 = document.querySelector('.gpt-model-popup')
const openPopupButton5 = document.getElementById('gpt-popup')

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

	//ПОПАП ВОПРОС
	if (e.target.closest('.question')) {
		if (popup2.style.display === 'block') {
			popup2.style.display = 'none'
		} else {
			popup2.style.display = 'block'
		}
	}
	if (e.target.closest('.popup-question')) {
		popup2.style.display = 'block'
	}

	if (!e.target.closest('.popup-question') && !e.target.closest('.question')) {
		popup2.style.display = 'none'
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

	//ПОПАП МОДЕЛЬ МОБИЛЬНАЯ ВЕРСИЯ

	if (e.target.closest('.first-header-mobile-hand-model')) {
		if (popup6.style.display === 'block') {
			popup6.style.display = 'none'
		} else {
			popup6.style.display = 'block'
		}
	}
	if (e.target.closest('.popup-model-mobile')) {
		popup6.style.display = 'block'
	}

	if (
		!e.target.closest('.popup-model-mobile') &&
		!e.target.closest('.first-header-mobile-hand-model')
	) {
		popup6.style.display = 'none'
	}
	if (e.target.closest('.btn-rl')) {
		popup6.style.display = 'none'
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

	//ПОПАП ВЫБОРА МОДЕЛИ В ЧАТЕ

	if (e.target.closest('#gpt-popup')) {
		if (popup5.style.display === 'block') {
			popup5.style.display = 'none'
			document.querySelector('.popup-gpt').style.opacity = '0'
			document.querySelector('.popup-gpt').style.maxWidth = '0'
		} else {
			popup5.style.display = 'block'
			document.querySelector('.popup-gpt').style.opacity = '1'
			document.querySelector('.popup-gpt').style.maxWidth = '30px'
		}
	}
	if (e.target.closest('.gpt-model-popup')) {
		popup5.style.display = 'block'
		document.querySelector('.popup-gpt').style.opacity = '1'
		document.querySelector('.popup-gpt').style.maxWidth = '30px'
	}

	if (
		!e.target.closest('.gpt-model-popup') &&
		!e.target.closest('#gpt-popup')
	) {
		popup5.style.display = 'none'
		document.querySelector('.popup-gpt').style.opacity = '0'
		document.querySelector('.popup-gpt').style.maxWidth = '0'
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

const rl = document.querySelectorAll('.btn-rl')
rl.forEach(btn => {
	btn.addEventListener('click', () => {
		inputField.classList.toggle('white')

		if ((mainContent.style.display = 'none')) {
			mainContent.style.display = ''
		}
		document.querySelector('.second-input-btn-enter > svg').style.color = '#000'
		document.querySelectorAll('.btn-rl > span')[0].classList.toggle('r')
		document.querySelectorAll('.btn-rl > span')[1].classList.toggle('r')
		btn.classList.toggle('bgr')
		timelessChat.classList.toggle('flex')

		mainContent.classList.toggle('none')
		document.querySelector('.dialog').style.display = 'none'
		input.classList.toggle('tlinput')
		document
			.querySelector('.second-input-btn')
			.classList.toggle('second-input-btn-white')
		// block.classList.toggle('db')

		document.querySelector('.left-side__link-logo').classList.toggle('gray')
		document.querySelector('.left-side__link-logo2').classList.toggle('gray')
		document
			.querySelectorAll('.left-side__link-text')[0]
			.classList.toggle('gray')
		document
			.querySelectorAll('.left-side__link-text')[1]
			.classList.toggle('gray')
		document.querySelector('.chat-title > h3').classList.toggle('gray')
		document.querySelector('.chat-list-title').classList.toggle('gray')

		if (document.querySelector('.btn-rl > span').classList.contains('r')) {
			document.querySelector('.s2').innerHTML = `
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M3.06957 10.8763C3.62331 6.43564 7.40967 3 12 3C14.2824 3 16.4028 3.85067 18.0118 5.25439V4C18.0118 3.44772 18.4595 3 19.0118 3C19.5641 3 20.0118 3.44772 20.0118 4V8C20.0118 8.55228 19.5641 9 19.0118 9H15C14.4477 9 14 8.55228 14 8C14 7.44772 14.4477 7 15 7H16.9571C15.6757 5.76379 13.9101 5 12 5C8.43108 5 5.48466 7.67174 5.0542 11.1237C4.98586 11.6718 4.48619 12.0607 3.93815 11.9923C3.39011 11.924 3.00123 11.4243 3.06957 10.8763ZM20.0618 12.0077C20.6099 12.076 20.9988 12.5757 20.9304 13.1237C20.3767 17.5644 16.5903 21 12 21C9.72322 21 7.60762 20.1535 5.99999 18.7559V20C5.99999 20.5523 5.55228 21 4.99999 21C4.44771 21 3.99999 20.5523 3.99999 20V16C3.99999 15.4477 4.44771 15 4.99999 15H8.99999C9.55228 15 9.99999 15.4477 9.99999 16C9.99999 16.5523 9.55228 17 8.99999 17H7.04285C8.32433 18.2362 10.0899 19 12 19C15.5689 19 18.5153 16.3283 18.9458 12.8763C19.0141 12.3282 19.5138 11.9393 20.0618 12.0077Z" fill="currentColor"></path>
		</svg>
		`
			document.getElementById('btnw').innerHTML = `
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M3.06957 10.8763C3.62331 6.43564 7.40967 3 12 3C14.2824 3 16.4028 3.85067 18.0118 5.25439V4C18.0118 3.44772 18.4595 3 19.0118 3C19.5641 3 20.0118 3.44772 20.0118 4V8C20.0118 8.55228 19.5641 9 19.0118 9H15C14.4477 9 14 8.55228 14 8C14 7.44772 14.4477 7 15 7H16.9571C15.6757 5.76379 13.9101 5 12 5C8.43108 5 5.48466 7.67174 5.0542 11.1237C4.98586 11.6718 4.48619 12.0607 3.93815 11.9923C3.39011 11.924 3.00123 11.4243 3.06957 10.8763ZM20.0618 12.0077C20.6099 12.076 20.9988 12.5757 20.9304 13.1237C20.3767 17.5644 16.5903 21 12 21C9.72322 21 7.60762 20.1535 5.99999 18.7559V20C5.99999 20.5523 5.55228 21 4.99999 21C4.44771 21 3.99999 20.5523 3.99999 20V16C3.99999 15.4477 4.44771 15 4.99999 15H8.99999C9.55228 15 9.99999 15.4477 9.99999 16C9.99999 16.5523 9.55228 17 8.99999 17H7.04285C8.32433 18.2362 10.0899 19 12 19C15.5689 19 18.5153 16.3283 18.9458 12.8763C19.0141 12.3282 19.5138 11.9393 20.0618 12.0077Z" fill="currentColor"></path>
		</svg>
		`
			document.querySelector('.first-header-mobile-chat-btn').innerHTML = `
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M3.06957 10.8763C3.62331 6.43564 7.40967 3 12 3C14.2824 3 16.4028 3.85067 18.0118 5.25439V4C18.0118 3.44772 18.4595 3 19.0118 3C19.5641 3 20.0118 3.44772 20.0118 4V8C20.0118 8.55228 19.5641 9 19.0118 9H15C14.4477 9 14 8.55228 14 8C14 7.44772 14.4477 7 15 7H16.9571C15.6757 5.76379 13.9101 5 12 5C8.43108 5 5.48466 7.67174 5.0542 11.1237C4.98586 11.6718 4.48619 12.0607 3.93815 11.9923C3.39011 11.924 3.00123 11.4243 3.06957 10.8763ZM20.0618 12.0077C20.6099 12.076 20.9988 12.5757 20.9304 13.1237C20.3767 17.5644 16.5903 21 12 21C9.72322 21 7.60762 20.1535 5.99999 18.7559V20C5.99999 20.5523 5.55228 21 4.99999 21C4.44771 21 3.99999 20.5523 3.99999 20V16C3.99999 15.4477 4.44771 15 4.99999 15H8.99999C9.55228 15 9.99999 15.4477 9.99999 16C9.99999 16.5523 9.55228 17 8.99999 17H7.04285C8.32433 18.2362 10.0899 19 12 19C15.5689 19 18.5153 16.3283 18.9458 12.8763C19.0141 12.3282 19.5138 11.9393 20.0618 12.0077Z" fill="currentColor"></path>
		</svg>
		`
		} else {
			document.getElementById('btnw').innerHTML = `
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M3.06957 10.8763C3.62331 6.43564 7.40967 3 12 3C14.2824 3 16.4028 3.85067 18.0118 5.25439V4C18.0118 3.44772 18.4595 3 19.0118 3C19.5641 3 20.0118 3.44772 20.0118 4V8C20.0118 8.55228 19.5641 9 19.0118 9H15C14.4477 9 14 8.55228 14 8C14 7.44772 14.4477 7 15 7H16.9571C15.6757 5.76379 13.9101 5 12 5C8.43108 5 5.48466 7.67174 5.0542 11.1237C4.98586 11.6718 4.48619 12.0607 3.93815 11.9923C3.39011 11.924 3.00123 11.4243 3.06957 10.8763ZM20.0618 12.0077C20.6099 12.076 20.9988 12.5757 20.9304 13.1237C20.3767 17.5644 16.5903 21 12 21C9.72322 21 7.60762 20.1535 5.99999 18.7559V20C5.99999 20.5523 5.55228 21 4.99999 21C4.44771 21 3.99999 20.5523 3.99999 20V16C3.99999 15.4477 4.44771 15 4.99999 15H8.99999C9.55228 15 9.99999 15.4477 9.99999 16C9.99999 16.5523 9.55228 17 8.99999 17H7.04285C8.32433 18.2362 10.0899 19 12 19C15.5689 19 18.5153 16.3283 18.9458 12.8763C19.0141 12.3282 19.5138 11.9393 20.0618 12.0077Z" fill="currentColor"></path>
		</svg>
		`
			document.querySelector('.s2').innerHTML = `
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M15.6729 3.91287C16.8918 2.69392 18.8682 2.69392 20.0871 3.91287C21.3061 5.13182 21.3061 7.10813 20.0871 8.32708L14.1499 14.2643C13.3849 15.0293 12.3925 15.5255 11.3215 15.6785L9.14142 15.9899C8.82983 16.0344 8.51546 15.9297 8.29289 15.7071C8.07033 15.4845 7.96554 15.1701 8.01005 14.8586L8.32149 12.6785C8.47449 11.6075 8.97072 10.615 9.7357 9.85006L15.6729 3.91287ZM18.6729 5.32708C18.235 4.88918 17.525 4.88918 17.0871 5.32708L11.1499 11.2643C10.6909 11.7233 10.3932 12.3187 10.3014 12.9613L10.1785 13.8215L11.0386 13.6986C11.6812 13.6068 12.2767 13.3091 12.7357 12.8501L18.6729 6.91287C19.1108 6.47497 19.1108 5.76499 18.6729 5.32708ZM11 3.99929C11.0004 4.55157 10.5531 4.99963 10.0008 5.00007C9.00227 5.00084 8.29769 5.00827 7.74651 5.06064C7.20685 5.11191 6.88488 5.20117 6.63803 5.32695C6.07354 5.61457 5.6146 6.07351 5.32698 6.63799C5.19279 6.90135 5.10062 7.24904 5.05118 7.8542C5.00078 8.47105 5 9.26336 5 10.4V13.6C5 14.7366 5.00078 15.5289 5.05118 16.1457C5.10062 16.7509 5.19279 17.0986 5.32698 17.3619C5.6146 17.9264 6.07354 18.3854 6.63803 18.673C6.90138 18.8072 7.24907 18.8993 7.85424 18.9488C8.47108 18.9992 9.26339 19 10.4 19H13.6C14.7366 19 15.5289 18.9992 16.1458 18.9488C16.7509 18.8993 17.0986 18.8072 17.362 18.673C17.9265 18.3854 18.3854 17.9264 18.673 17.3619C18.7988 17.1151 18.8881 16.7931 18.9393 16.2535C18.9917 15.7023 18.9991 14.9977 18.9999 13.9992C19.0003 13.4469 19.4484 12.9995 20.0007 13C20.553 13.0004 21.0003 13.4485 20.9999 14.0007C20.9991 14.9789 20.9932 15.7808 20.9304 16.4426C20.8664 17.116 20.7385 17.7136 20.455 18.2699C19.9757 19.2107 19.2108 19.9756 18.27 20.455C17.6777 20.7568 17.0375 20.8826 16.3086 20.9421C15.6008 21 14.7266 21 13.6428 21H10.3572C9.27339 21 8.39925 21 7.69138 20.9421C6.96253 20.8826 6.32234 20.7568 5.73005 20.455C4.78924 19.9756 4.02433 19.2107 3.54497 18.2699C3.24318 17.6776 3.11737 17.0374 3.05782 16.3086C2.99998 15.6007 2.99999 14.7266 3 13.6428V10.3572C2.99999 9.27337 2.99998 8.39922 3.05782 7.69134C3.11737 6.96249 3.24318 6.3223 3.54497 5.73001C4.02433 4.7892 4.78924 4.0243 5.73005 3.54493C6.28633 3.26149 6.88399 3.13358 7.55735 3.06961C8.21919 3.00673 9.02103 3.00083 9.99922 3.00007C10.5515 2.99964 10.9996 3.447 11 3.99929Z"
					fill="currentColor"
				></path>
			</svg>
		`
			document.querySelector('.first-header-mobile-chat-btn').innerHTML = `
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M15.6729 3.91287C16.8918 2.69392 18.8682 2.69392 20.0871 3.91287C21.3061 5.13182 21.3061 7.10813 20.0871 8.32708L14.1499 14.2643C13.3849 15.0293 12.3925 15.5255 11.3215 15.6785L9.14142 15.9899C8.82983 16.0344 8.51546 15.9297 8.29289 15.7071C8.07033 15.4845 7.96554 15.1701 8.01005 14.8586L8.32149 12.6785C8.47449 11.6075 8.97072 10.615 9.7357 9.85006L15.6729 3.91287ZM18.6729 5.32708C18.235 4.88918 17.525 4.88918 17.0871 5.32708L11.1499 11.2643C10.6909 11.7233 10.3932 12.3187 10.3014 12.9613L10.1785 13.8215L11.0386 13.6986C11.6812 13.6068 12.2767 13.3091 12.7357 12.8501L18.6729 6.91287C19.1108 6.47497 19.1108 5.76499 18.6729 5.32708ZM11 3.99929C11.0004 4.55157 10.5531 4.99963 10.0008 5.00007C9.00227 5.00084 8.29769 5.00827 7.74651 5.06064C7.20685 5.11191 6.88488 5.20117 6.63803 5.32695C6.07354 5.61457 5.6146 6.07351 5.32698 6.63799C5.19279 6.90135 5.10062 7.24904 5.05118 7.8542C5.00078 8.47105 5 9.26336 5 10.4V13.6C5 14.7366 5.00078 15.5289 5.05118 16.1457C5.10062 16.7509 5.19279 17.0986 5.32698 17.3619C5.6146 17.9264 6.07354 18.3854 6.63803 18.673C6.90138 18.8072 7.24907 18.8993 7.85424 18.9488C8.47108 18.9992 9.26339 19 10.4 19H13.6C14.7366 19 15.5289 18.9992 16.1458 18.9488C16.7509 18.8993 17.0986 18.8072 17.362 18.673C17.9265 18.3854 18.3854 17.9264 18.673 17.3619C18.7988 17.1151 18.8881 16.7931 18.9393 16.2535C18.9917 15.7023 18.9991 14.9977 18.9999 13.9992C19.0003 13.4469 19.4484 12.9995 20.0007 13C20.553 13.0004 21.0003 13.4485 20.9999 14.0007C20.9991 14.9789 20.9932 15.7808 20.9304 16.4426C20.8664 17.116 20.7385 17.7136 20.455 18.2699C19.9757 19.2107 19.2108 19.9756 18.27 20.455C17.6777 20.7568 17.0375 20.8826 16.3086 20.9421C15.6008 21 14.7266 21 13.6428 21H10.3572C9.27339 21 8.39925 21 7.69138 20.9421C6.96253 20.8826 6.32234 20.7568 5.73005 20.455C4.78924 19.9756 4.02433 19.2107 3.54497 18.2699C3.24318 17.6776 3.11737 17.0374 3.05782 16.3086C2.99998 15.6007 2.99999 14.7266 3 13.6428V10.3572C2.99999 9.27337 2.99998 8.39922 3.05782 7.69134C3.11737 6.96249 3.24318 6.3223 3.54497 5.73001C4.02433 4.7892 4.78924 4.0243 5.73005 3.54493C6.28633 3.26149 6.88399 3.13358 7.55735 3.06961C8.21919 3.00673 9.02103 3.00083 9.99922 3.00007C10.5515 2.99964 10.9996 3.447 11 3.99929Z"
					fill="currentColor"
				></path>
			</svg>
		`
		}
	})
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
	timelessChat.style.display = 'none'
	mainContent.style.display = 'none'
	document.querySelector('.dialog').style.display = 'block'
})

function getQueryParam(param) {
	const urlParams = new URLSearchParams(window.location.search)
	return urlParams.get(param)
}

if (getQueryParam('runScript') === 'true') {
	timelessChat.style.display = 'none'
	mainContent.style.display = 'none'
	document.querySelector('.dialog').style.display = 'block'
}
