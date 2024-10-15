// const gridContainer = document.querySelector('.block-items-grid')
const showMoreButton = document.querySelectorAll('.block-items-btn')

let additionalItems = [
	'Элемент 7',
	'Элемент 8',
	'Элемент 9',
	'Элемент 10',
	'Элемент 11',
	'Элемент 12',
]

let currentIndex = 0
const itemsToShow = 6 // Количество элементов, которые нужно показывать при нажатии

function showMoreItems(btn) {
	const container = btn.closest('.block-items-wrap')

	const gridContainer = container.querySelector('.block-items-grid')
	for (
		let i = 0;
		i < itemsToShow && currentIndex < additionalItems.length;
		i++, currentIndex++
	) {
		const newItem = document.createElement('div')
		newItem.className = 'block-item'
		newItem.innerHTML = `
        <a class="block-item-a" href="#!">
            <div class="block-item-number">${currentIndex + 7}</div>
            <div class="block-item-inner">
                <div class="block-item-logo-wrap">
                    <div class="block-item-logo">
                        <img src="./img/1.png" alt="GPT" width="80" height="80" />
                    </div>
                </div>
                <div class="block-item-desc">
                    <span class="block-item-desc-t">image generator</span>
                    <span class="block-item-desc-d">A GPT specialized in generating and refining images with a mix of professional and friendly tone.</span>
                    <div class="block-item-desc-from">
                        <div class="block-item-desc-from-wrap">
                            <div class="block-item-desc-from-text">
                                От NAIF J ALOTAIBI
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    `

		gridContainer.style.maxHeight = 'unset'
		gridContainer.appendChild(newItem)

		// Запускаем анимацию после добавления элемента
		requestAnimationFrame(() => {
			// Задержка для плавной анимации
			setTimeout(() => {
				newItem.classList.add('show')
			}, 50) // Небольшая задержка для активации анимации
		})
	}

	// Скрываем кнопку, если больше нет элементов для показа
	if (currentIndex >= additionalItems.length) {
		btn.style.display = 'none'
	}

	currentIndex = 0
}

// Добавление обработчика событий для кнопки
showMoreButton.forEach(btn => {
	btn.addEventListener('click', () => showMoreItems(btn))
})

document.querySelector('.main-content').addEventListener('scroll', () => {
	const scrollTop = document.querySelector('.main-content').scrollTop
	if (scrollTop >= 230) {
		document.querySelector('.header-input').classList.add('hidd')
	} else {
		document.querySelector('.header-input').classList.remove('hidd')
	}
})

const recItems = document.querySelectorAll('.recomended-item')
recItems.forEach(item => {
	item.addEventListener('click', () => {
		document.querySelector('.recommendaions-overlay').classList.add('db')
	})
})

document.querySelector('.btn-up2').addEventListener('click', () => {
	document.querySelector('.recommendaions-overlay').classList.remove('db')
})

document
	.querySelector('.recommendaions-overlay')
	.addEventListener('click', e => {
		if (e.target === document.querySelector('.recommendaions-overlay-wrap2')) {
			document.querySelector('.recommendaions-overlay').classList.remove('db')
		}
	})

const blockItems = document.querySelectorAll('.block-item')
blockItems.forEach(item => {
	item.addEventListener('click', () => {
		document.querySelector('.block-item-overlay').classList.add('db')
	})
})

document.querySelector('.btn-up3').addEventListener('click', () => {
	document.querySelector('.block-item-overlay').classList.remove('db')
})

document.querySelector('.block-item-overlay').addEventListener('click', e => {
	if (e.target === document.querySelector('.block-overlay-wrap2 ')) {
		console.log(e.target)
		document.querySelector('.block-item-overlay').classList.remove('db')
	}
})
