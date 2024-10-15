const itemsContainer = document.querySelector('.scroll-items')
const scrollButtonNext = document.querySelector('.btn-next')
const scrollButtonPrev = document.querySelector('.btn-prev')
const scrollButtonPrevWrap = document.querySelector('.btn-prev-wrap')
const scrollButtonNextWrap = document.querySelector('.btn-next-wrap')
const links = document.querySelectorAll('.scroll-item')

const scrollAmount = 300

if (window.innerWidth < 600) {
	links.forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault()

			links.forEach(link => {
				link.classList.remove('slct')
			})

			anchor.classList.add('slct')

			const targetId = this.getAttribute('href')
			const targetElement = document.querySelector(targetId)

			// Вычисляем целевую позицию с учетом смещения
			const targetPosition = targetElement.offsetTop - 160

			document.querySelector('.main-content').scrollTo({
				top: targetPosition,
				behavior: 'smooth', // Плавная прокрутка
			})
		})
	})

	document.querySelector('.main-content').addEventListener('scroll', () => {
		const scrollTop = document.querySelector('.main-content').scrollTop
		console.log(scrollTop)

		if (scrollTop < 1800) {
			links[0].classList.add('slct')

			links[1].classList.remove('slct')
			links[2].classList.remove('slct')
			links[3].classList.remove('slct')
			links[4].classList.remove('slct')
			links[5].classList.remove('slct')
			links[6].classList.remove('slct')
			document.querySelector('.scroll-items').scrollLeft = 0
		}
		if (scrollTop >= 1800 && scrollTop <= 3100) {
			links[1].classList.add('slct')

			links[0].classList.remove('slct')
			links[2].classList.remove('slct')
			links[3].classList.remove('slct')
			links[4].classList.remove('slct')
			links[5].classList.remove('slct')
			links[6].classList.remove('slct')
			document.querySelector('.scroll-items').scrollLeft = 0
		}
		if (scrollTop >= 3100 && scrollTop <= 3950) {
			links[2].classList.add('slct')

			links[1].classList.remove('slct')
			links[0].classList.remove('slct')
			links[3].classList.remove('slct')
			links[4].classList.remove('slct')
			links[5].classList.remove('slct')
			links[6].classList.remove('slct')
			document.querySelector('.scroll-items').scrollLeft = 300
		}

		if (scrollTop >= 3950 && scrollTop <= 4750) {
			links[3].classList.add('slct')

			links[1].classList.remove('slct')
			links[2].classList.remove('slct')
			links[0].classList.remove('slct')
			links[4].classList.remove('slct')
			links[5].classList.remove('slct')
			links[6].classList.remove('slct')
			document.querySelector('.scroll-items').scrollLeft = 300
		}
		if (scrollTop >= 4750 && scrollTop <= 5450) {
			links[4].classList.add('slct')

			links[1].classList.remove('slct')
			links[2].classList.remove('slct')
			links[3].classList.remove('slct')
			links[0].classList.remove('slct')
			links[5].classList.remove('slct')
			links[6].classList.remove('slct')
			document.querySelector('.scroll-items').scrollLeft = 1000
		}
		if (scrollTop >= 5450 && scrollTop <= 6350) {
			document.querySelector('.scroll-items').scrollLeft = 1000
			links[5].classList.add('slct')

			links[1].classList.remove('slct')
			links[2].classList.remove('slct')
			links[3].classList.remove('slct')
			links[4].classList.remove('slct')
			links[0].classList.remove('slct')
			links[6].classList.remove('slct')
		}
		if (scrollTop >= 6351) {
			links[6].classList.add('slct')

			links[1].classList.remove('slct')
			links[2].classList.remove('slct')
			links[3].classList.remove('slct')
			links[4].classList.remove('slct')
			links[5].classList.remove('slct')
			links[0].classList.remove('slct')
			document.querySelector('.scroll-items').scrollLeft = 1000
		}
	})
} else {
	scrollButtonNext.addEventListener('click', () => {
		scrollButtonNextWrap.style.display = 'none'
		scrollButtonPrevWrap.style.display = 'block'
		itemsContainer.scrollBy({
			top: 0,
			left: scrollAmount,
			behavior: 'smooth',
		})
	})

	scrollButtonPrev.addEventListener('click', () => {
		scrollButtonPrevWrap.style.display = 'none'
		scrollButtonNextWrap.style.display = 'block'
		itemsContainer.scrollBy({
			top: 0,
			left: -scrollAmount,
			behavior: 'smooth',
		})
	})

	links.forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault()

			links.forEach(link => {
				link.classList.remove('slct')
			})

			anchor.classList.add('slct')

			const targetId = this.getAttribute('href')
			const targetElement = document.querySelector(targetId)

			// Вычисляем целевую позицию с учетом смещения
			const targetPosition = targetElement.offsetTop - 110

			document.querySelector('.main-content').scrollTo({
				top: targetPosition,
				behavior: 'smooth', // Плавная прокрутка
			})
		})
	})

	document.querySelector('.scroll-items').addEventListener('scroll', () => {
		if (document.querySelector('.scroll-items').scrollLeft <= 50) {
			scrollButtonPrevWrap.style.display = 'none'
			scrollButtonNextWrap.style.display = 'block'
		}

		if (document.querySelector('.scroll-items').scrollLeft >= 200) {
			scrollButtonPrevWrap.style.display = 'block'
			scrollButtonNextWrap.style.display = 'none'
		}
	})

	document.querySelector('.main-content').addEventListener('scroll', () => {
		const scrollTop = document.querySelector('.main-content').scrollTop // Количество прокрутки по вертикали
		console.log(scrollTop)

		if (scrollTop < 900) {
			document.querySelector('.scroll-items').scrollLeft = 0
			links[0].classList.add('slct')

			links[1].classList.remove('slct')
			links[2].classList.remove('slct')
			links[3].classList.remove('slct')
			links[4].classList.remove('slct')
			links[5].classList.remove('slct')
			links[6].classList.remove('slct')
		}
		if (scrollTop >= 900 && scrollTop <= 2100) {
			document.querySelector('.scroll-items').scrollLeft = 0
			links[1].classList.add('slct')

			links[0].classList.remove('slct')
			links[2].classList.remove('slct')
			links[3].classList.remove('slct')
			links[4].classList.remove('slct')
			links[5].classList.remove('slct')
			links[6].classList.remove('slct')
		}
		if (scrollTop >= 2100 && scrollTop <= 2600) {
			document.querySelector('.scroll-items').scrollLeft = 0
			links[2].classList.add('slct')

			links[1].classList.remove('slct')
			links[0].classList.remove('slct')
			links[3].classList.remove('slct')
			links[4].classList.remove('slct')
			links[5].classList.remove('slct')
			links[6].classList.remove('slct')
		}

		if (scrollTop >= 2600 && scrollTop <= 3100) {
			document.querySelector('.scroll-items').scrollLeft = 0
			links[3].classList.add('slct')

			links[1].classList.remove('slct')
			links[2].classList.remove('slct')
			links[0].classList.remove('slct')
			links[4].classList.remove('slct')
			links[5].classList.remove('slct')
			links[6].classList.remove('slct')
		}
		if (scrollTop >= 3100 && scrollTop <= 3500) {
			document.querySelector('.scroll-items').scrollLeft = 0
			links[4].classList.add('slct')

			links[1].classList.remove('slct')
			links[2].classList.remove('slct')
			links[3].classList.remove('slct')
			links[0].classList.remove('slct')
			links[5].classList.remove('slct')
			links[6].classList.remove('slct')
		}
		if (scrollTop >= 3500 && scrollTop <= 3643) {
			document.querySelector('.scroll-items').scrollLeft = 500
			links[5].classList.add('slct')

			links[1].classList.remove('slct')
			links[2].classList.remove('slct')
			links[3].classList.remove('slct')
			links[4].classList.remove('slct')
			links[0].classList.remove('slct')
			links[6].classList.remove('slct')
		}
		if (scrollTop >= 3644) {
			document.querySelector('.scroll-items').scrollLeft = 500
			links[6].classList.add('slct')

			links[1].classList.remove('slct')
			links[2].classList.remove('slct')
			links[3].classList.remove('slct')
			links[4].classList.remove('slct')
			links[5].classList.remove('slct')
			links[0].classList.remove('slct')
		}
	})
}
