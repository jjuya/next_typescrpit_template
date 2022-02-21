import FontFaceObserver from 'fontfaceobserver'

export const Fonts = async (fontData) => {
	let observers = []

	// Make one observer for each font,
	// by iterating over the data we already have
	Object.keys(fontData).forEach(function (family) {
		const data = fontData[family]

		const link = document.createElement('link')
		link.href = data?.url
		link.rel = 'stylesheet'
		document.head.appendChild(link)

		const obs = new FontFaceObserver(data?.fontName)
		observers.push(obs.load())
	})

	Promise.all(observers)
		.then(function (fonts) {
			fonts.forEach(function (font) {
				const fixFontNames = font?.family?.toLowerCase().split(' ')
				document.documentElement.classList.add(...fixFontNames)
				console.log(`FontFaceObserver load: ${font?.family}`)
			})
		})
		.catch(function (err) {
			console.warn('FontFaceObserver fail:', err)
		})
}
