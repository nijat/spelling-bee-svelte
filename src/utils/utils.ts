import { get } from 'svelte/store';
import { toast } from '@zerodevx/svelte-toast';

import gameDataStore from '$utils/store';

const data = get(gameDataStore);

enum ErrorMessages {
	WORD_EXIST_ALREADY = 'Bu sözü artıq yazmısınız',
	WORD_IS_NOT_CORRECT = 'Ən azı 3 hərfli söz yazmağa çalışın',
	WORD_IS_EMPTY = 'Verilmiş hərflərdən söz yaratmağa çalışın',
	WORD_IS_NOT_EXIST = 'Belə bir söz bazada mövcüd deyil'
}

enum SuccessMessages {
	CORRECT = 'Əla, davam edin'
}

export function checkAndAddWord() {
	let currentWord = data.currentWord;
	let correctWordList = data.correctWordList;
	let foundWordList: never[] = data.foundWordList;

	if (isWordEmpty(currentWord)) {
		showErrorMessage(ErrorMessages.WORD_IS_EMPTY);
		return;
	}
	if (!isWordCorrect(currentWord)) {
		showErrorMessage(ErrorMessages.WORD_IS_NOT_CORRECT);
		return;
	}
	if (isWordExistAlready(currentWord, foundWordList)) {
		showErrorMessage(ErrorMessages.WORD_EXIST_ALREADY);
		return;
	}
	if (isWordExist(currentWord, correctWordList)) {
		data.foundWordList.push(currentWord);
		data.currentWord = '';
		calculateUserPoints(data, currentWord);
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

export function isWordCorrect(currentWord: string) {
	if (currentWord.length > 3) {
		return true;
	}
	return false;
}

export function isWordExist(currentWord: string, correctWordList: string[]) {
	if (correctWordList.includes(currentWord)) {
		return true;
	}
	return false;
}

export function showErrorMessage(type: ErrorMessages) {
	toast.pop();
	toast.push(type);
}

export function showSuccessMessage(type: SuccessMessages) {
	toast.pop();
	toast.push(type, {
		theme: {
		  '--toastBackground': '#48BB78',
		  '--toastBarBackground': '#2F855A'
		}
	  });
}

export function calculateUserPoints(data: any, word: string) {
	if (word.length == 4) {
		data.userPoints += 1;
	} else if (word.length > 4){
        data.userPoints += word.length;
    }
}
