export enum ErrorMessages {
	WORD_EXIST_ALREADY = 'Bu sözü artıq yazmısınız',
	WORD_IS_NOT_CORRECT = 'Ən azı 3 hərfli söz yazmağa çalışın',
	WORD_IS_EMPTY = 'Verilmiş hərflərdən söz yaratmağa çalışın',
	WORD_IS_NOT_EXIST = 'Belə bir söz bazada mövcüd deyil',
	CENTER_LETTER_NOT_EXIST = 'Ortadakı hərfdən istifadə edərək söz yaradın'
}

export enum SuccessMessages {
	CORRECT = 'Əla, davam edin😛'
}

export const rankingLevels = [
	{
		name: 'Başlanğıc',
		minScoreMultiplier: 0
	},
	{
		name: 'Əla',
		minScoreMultiplier: 0.1
	},
	{
		name: 'Yaxşı',
		minScoreMultiplier: 0.18
	},
	{
		name: 'Möhtəşəm',
		minScoreMultiplier: 0.3
	},
	{
		name: 'Gözəl',
		minScoreMultiplier: 0.5
	},
	{
		name: 'Dəhşət',
		minScoreMultiplier: 0.7
	},
	{
		name: 'Dahi',
		minScoreMultiplier: 1
	}
];

export var successToastOptions = {
	theme: {
		'--toastBackground': '#48BB78',
		'--toastBarBackground': '#2F855A'
	},
	duration: 2000
};

export var errorToastOptions = {
	duration: 2000
};

export var hintToastOptions = {
	theme: {
		'--toastBackground': '#808080',
		'--toastBarBackground': '#808080'
	},
	initial: 0,
	intro: { y: -64 }
};
