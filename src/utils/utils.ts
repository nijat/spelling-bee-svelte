import { get } from 'svelte/store';
import { toast } from '@zerodevx/svelte-toast';
import { successToastOptions, errorToastOptions } from '$utils/config'
import gameDataStore from '$utils/store';

const data = get(gameDataStore);

enum ErrorMessages {
	WORD_EXIST_ALREADY = 'Bu sözü artıq yazmısınız',
	WORD_IS_NOT_CORRECT = 'Ən azı 3 hərfli söz yazmağa çalışın',
	WORD_IS_EMPTY = 'Verilmiş hərflərdən söz yaratmağa çalışın',
	WORD_IS_NOT_EXIST = 'Belə bir söz bazada mövcüd deyil',
	CENTER_LETTER_NOT_EXIST = 'CENTER LETTER'
}

enum SuccessMessages {
	CORRECT = 'Əla, davam edin😛'
}

export function checkAndAddWord() {
	let currentWord = data.currentWord;
	let foundWordList = data.foundWordList;

	if (isWordEmpty(currentWord)) {
		showErrorMessage(ErrorMessages.WORD_IS_EMPTY);
		return;
	}
	if (!isWordCorrect(currentWord)) {
		showErrorMessage(ErrorMessages.WORD_IS_NOT_CORRECT);
		return;
	}
	if (!isWordContainsCenterLetter(currentWord)) {
		showErrorMessage(ErrorMessages.CENTER_LETTER_NOT_EXIST);
		return;
	}
	if (isWordExistAlready(currentWord, foundWordList)) {
		showErrorMessage(ErrorMessages.WORD_EXIST_ALREADY);
		return;
	}
	if (isWordExist(currentWord)) {
		data.foundWordList.push(currentWord);
		data.currentWord = '';
		calculateUserPoints(currentWord);
		showSuccessMessage(SuccessMessages.CORRECT);
	} else {
		showErrorMessage(ErrorMessages.WORD_IS_NOT_EXIST);
	}
	gameDataStore.set(data);
}

export function isWordEmpty(currentWord: string) {
	if (currentWord.length == 0) {
		return true;
	}
	return false;
}

export function isWordExistAlready(currentWord: string, foundWordList: string[]) {
	if (foundWordList.includes(currentWord)) {
		return true;
	}
	return false;
}

export function isWordContainsCenterLetter(currentWord: string) {
	if (currentWord.includes(data.centerLetter)) {
		return true
	}
	return false
}

export function isWordCorrect(currentWord: string) {
	if (currentWord.length > 3) {
		return true;
	}
}

export function isWordExist(currentWord: string) {
	if (data.words.some(e => e["word"] == currentWord)) {
		return true
	}
	return false;
}

export function showErrorMessage(type: ErrorMessages) {
	toast.pop();
	toast.push(type, errorToastOptions);
}

export function showSuccessMessage(type: SuccessMessages) {
	toast.pop();
	toast.push(type, successToastOptions);
}

export function calculateUserPoints(word: string) {
	data.words.forEach(function (value) {
		if (value["word"] == word) {
			data.userPoints += value["score"]
		}
	});
}