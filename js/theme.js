function setTheme() {
	const isDarkMode =
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches

	if (isDarkMode) {
		document.documentElement.setAttribute('data-theme', 'dark')
	} else {
		document.documentElement.setAttribute('data-theme', 'light')
	}
}

setTheme()
window
	.matchMedia('(prefers-color-scheme: dark)')
	.addEventListener('change', setTheme)
