import { get } from 'svelte/store';

import gameDataStore from '$utils/store';

const data = get(gameDataStore);

enum ErrorMessages {
    WORD_EXIST_ALREADY = "Word is exst",
    WORD_IS_NOT_CORRECT = "WORD IS NOT CORRECT",
}

enum SuccessMessages {
    CORRECT = "Correct",
}

export function checkAndAddWord() {
	let currentWord = data.currentWord
	let correctWordList = data.correctWordList
	let foundWordList: never[] = data.foundWordList
    if (!isWordCorrect(currentWord)) {
		showErrorMessage(ErrorMessages.WORD_IS_NOT_CORRECT)
        return
	}
	if (isWordExistAlready(currentWord, foundWordList)) {
		showErrorMessage(ErrorMessages.WORD_EXIST_ALREADY)
        return
	}
    if(isWordExist(currentWord, correctWordList)){
        data.foundWordList.push(currentWord)
		data.currentWord = ''
        showSuccessMessage()
    }
	gameDataStore.set(data)
}

export function isWordExistAlready(currentWord: string, foundWordList: string[]) {
	if (foundWordList.includes(currentWord)) {
		return true
	}
    return false
}

export function isWordCorrect(currentWord: string) {
	if (currentWord.length > 3) {
		return true
	}
    return false
}

export function isWordExist(currentWord: string, correctWordList: string[]){
    if (correctWordList.includes(currentWord)) {
        return true
	}
    return false
}

export function showErrorMessage(type: ErrorMessages) {
    alert(type)
}

export function showSuccessMessage(){
    alert()
}