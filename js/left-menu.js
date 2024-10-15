const menu = document.querySelector('.left-side')
const bt = document.querySelectorAll('.s')
const main = document.querySelector('.main')
const btns = document.querySelectorAll('.button-wrap1')
const mobileBtn = document.querySelectorAll('.first-header-mobile-menu-btn')

bt[0].addEventListener('click', () => {
	menu.classList.toggle('open')
	main.classList.toggle('pad')

	btns.forEach(btn => {
		btn.classList.toggle('none')
	})
})

bt[1].addEventListener('click', () => {
	menu.classList.toggle('open')
	main.classList.toggle('pad')
	btns.forEach(btn => {
		btn.classList.toggle('none')
	})
})

mobileBtn[0].addEventListener('click', e => {
	document.querySelector('.left-side-overlay').classList.toggle('db')
	document.querySelector('.chat-placeholder-mob').classList.remove('db')
	menu.classList.toggle('open')
	btns.forEach(btn => {
		btn.classList.toggle('none')
	})
})

mobileBtn[1].addEventListener('click', e => {
	document.querySelector('.left-side-overlay').classList.toggle('db')
	document.querySelector('.chat-placeholder-mob').classList.add('db')
	menu.classList.toggle('open')
	btns.forEach(btn => {
		btn.classList.toggle('none')
	})
})

document.querySelector('.left-side-overlay').addEventListener('click', e => {
	if (e.target === document.querySelector('.left-side-overlay')) {
		document.querySelector('.left-side-overlay').classList.toggle('db')
		document.querySelector('.chat-placeholder-mob').classList.remove('db')
		menu.classList.toggle('open')
		btns.forEach(btn => {
			btn.classList.toggle('none')
		})
	}
})

const popup7 = document.querySelector('.ls-avatar-popup ')
const openPopupButton7 = document.querySelector('.ls-avatar-btn')

openPopupButton7.addEventListener('click', () => {
	popup7.classList.toggle('db')
	document.querySelector('.lsavatar-overlay').classList.toggle('db')
})

document.querySelector('.lsavatar-overlay').addEventListener('click', e => {
	if (e.target === document.querySelector('.lsavatar-overlay')) {
		document.querySelector('.lsavatar-overlay').classList.toggle('db')
		popup7.classList.toggle('db')
	}
})

menu.addEventListener('click', () => {
	document.querySelector('.chat-placeholder-mob').classList.remove('db')
})
