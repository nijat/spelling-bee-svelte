import { get } from 'svelte/store';
import { toast } from '@zerodevx/svelte-toast';
import { successToastOptions, errorToastOptions, hintToastOptions, ErrorMessages, SuccessMessages } from '$utils/config'
import gameDataStore from '$utils/store';

const data = get(gameDataStore);

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
	if (data.words.some((e: any) => e["word"] == currentWord)) {
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
	data.words.forEach(function (value: any) {
		if (value["word"] == word) {
			data.userPoints += value["score"]
		}
	});
}

export function showHintonUI() {
	toast.pop();
	toast.push(getHint(), hintToastOptions)
}

export function getHint() {
	var currentTimestamp = getTimestamp()
	if (currentTimestamp > data.hintExpiration || checkHintWordInFoundList(data.hintStep)) {
		data.hintStep = data.hintStep + 1
		while (checkHintWordInFoundList(data.hintStep)) {
			data.hintStep = data.hintStep + 1
		}
		data.hintExpiration = currentTimestamp + 30 * 60
	}

	return data.words[data.hintStep]["explanation"]
}

export function getTimestamp(): number {
	return parseInt(new Date().getTime().toString().slice(0, 10));
}

export function checkHintWordInFoundList(hintStep: number) {
	if (data.foundWordList.includes(data.words[hintStep]["word"])) {
		return true
	}
	return false
}