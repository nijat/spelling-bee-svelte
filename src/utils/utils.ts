import { get } from 'svelte/store';
import { toast } from '@zerodevx/svelte-toast';
import { hashValue } from '$utils/md5';

import gameDataStore from '$utils/store';

const data = get(gameDataStore);

enum ErrorMessages {
	WORD_EXIST_ALREADY = 'Word is exst',
	WORD_IS_NOT_CORRECT = 'WORD IS NOT CORRECT',
	WORD_IS_EMPTY = 'Hərflərdən söz yaratmağa çalışın'
}

enum SuccessMessages {
	CORRECT = 'Correct'
}

export function checkAndAddWord() {
	let currentWord = data.currentWord;
	let correctWordList = data.correctWordList;
	let foundWordList: never[] = data.foundWordList;

	if (!isWordCorrect(currentWord)) {
		showErrorMessage(ErrorMessages.WORD_IS_NOT_CORRECT);
		return;
	}
	if (isWordEmpty(currentWord)) {
		showErrorMessage(ErrorMessages.WORD_IS_EMPTY);
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
		showSuccessMessage();
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
	console.log(correctWordList);
	if (correctWordList.includes(hashValue(currentWord))) {
		return true;
	}
	return false;
}

export function showErrorMessage(type: ErrorMessages) {
	toast.pop();
	toast.push(type);
}

export function showSuccessMessage() {
	toast.pop();
	toast.push('Hello world!');
}

export function calculateUserPoints(data: any, word: string) {
	if (word.length == 4) {
		data.userPoints += 1;
	} else if (word.length > 4){
        data.userPoints += word.length;
    }
}
