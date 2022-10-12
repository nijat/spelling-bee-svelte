export enum ErrorMessages {
	WORD_EXIST_ALREADY = 'Bu sözü artıq yazmısınız',
	WORD_IS_NOT_CORRECT = 'Ən azı 3 hərfli söz yazmağa çalışın',
	WORD_IS_EMPTY = 'Verilmiş hərflərdən söz yaratmağa çalışın',
	WORD_IS_NOT_EXIST = 'Belə bir söz bazada mövcüd deyil',
	CENTER_LETTER_NOT_EXIST = 'Ortadakı hərfdən istifadə edərək söz yaradın',
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
]

export const infoModalLangugage = {
    "type": "Info",
    "title": "Qaydalar",
    "messages":
        ["Pətəkdəki hərflərdən istifadə edərək sözlər qurun. Sözlər minimum 4 hərfdən ibarət olmalıdır. Sözlərdə mütləq “mərkəz hərf” olmalıdır. Lüğətdə müəyyən olmayan, tireli, xüsusi isimlər yoxdur. Sözlərdə hər hərfdən bir neçə dəfə istifadə oluna bilər. Reytinqinizi qaldırmaq üçün xallar toplayın. 4 hərfli sözlərin hər biri 1 xal dəyərindədir. Daha uzun sözlərdə isə hər hərf üçün əlavə 1 xal qazana bilərsiniz. Hər günün oyununda bütün hərflərdən istifadə olunmuş ən az bir ədəd “panqramma” var. Hər panqramma əlavə 7 xal dəyərindədir!"]
}

export const scoreModalLangugage = {
    "type": "Score",
    "title": "Xallar",
    "messages": [""]
}

export var successToastOptions = {
    theme: {
        '--toastBackground': '#48BB78',
        '--toastBarBackground': '#2F855A'
    },
    duration: 2000,
}

export var errorToastOptions = {
    duration: 2000,
}

export var hintToastOptions = {
    theme: {
        '--toastBackground': '#808080',
        '--toastBarBackground': '#808080'
    },
    initial: 0, intro: { y: -64 },
}