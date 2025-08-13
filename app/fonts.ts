import localFont from 'next/font/local'

export const cocogoose = localFont({
	variable: '--font-cocogoose',
	display: 'swap',
	src: [
		{ path: '../styles/cocogoose/Cocogoose-Pro-Semilight-trial.ttf', style: 'normal' },
	],
})

export const acumin = localFont({
	variable: '--font-acumin',
	display: 'swap',
	weight: '100 900',
	src: [{ path: '../styles/Acumin-Variable-Concept.ttf/Acumin Variable Concept.ttf' }],
})


