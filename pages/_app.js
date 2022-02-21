import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from '../styles'
import { Fonts } from '../utils/fonts'

import '../styles/global.css'

export default function App({ Component, pageProps }) {
	// using fontfaceobserver
	useEffect(async () => {
		const fontData = {
			NotoSansKR: {
				fontName: 'Noto Sans KR',
				url: '//fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap',
			},
		}

		return await Fonts(fontData)
	}, [])

	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}
