import localFont from 'next/font/local'

export const cocogoose = localFont({
	variable: '--font-cocogoose',
	display: 'swap',
	src: [
		{ path: '../styles/cocogoose/Cocogoose-Pro-Light-trial.ttf', weight: '300', style: 'normal' },
		{ path: '../styles/cocogoose/Cocogoose-Pro-Regular-trial.ttf', weight: '400', style: 'normal' },
		{ path: '../styles/cocogoose/Cocogoose-Pro-Bold-trial.ttf', weight: '700', style: 'normal' },
	],
})

export const acumin = localFont({
	variable: '--font-acumin',
	display: 'swap',
	weight: '100 900',
	src: [{ path: '../styles/Acumin-Variable-Concept.ttf/Acumin Variable Concept.ttf' }],
})


