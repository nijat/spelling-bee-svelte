import { writable } from 'svelte/store';
import { browser } from '$app/env';

const defaultValue = {};
const initialValue = browser ? JSON.parse(window.localStorage.getItem('gameState')) ?? defaultValue : defaultValue;

const foundWordList: string[] = []

export const gameDataStore = writable<any>(initialValue);

gameDataStore.subscribe((value) => {
	if (browser) {
		if (value != undefined)
			window.localStorage.setItem('gameState', JSON.stringify(value));
	}
});


export default gameDataStore;
export const storedData = writable(new Promise(() => { }));
export const gameDataFromServer = writable({});

export function getData() {
	const load = async () => {
		console.log(getCurrentDate())
		const response = await fetch(`https://sozuyaz.com/words/` + getCurrentDate() + `.json`);
		const data = await response.json();
		storedData.set(Promise.resolve(data));
		gameDataFromServer.set(data)
		gameDataStore.update(localData => {
			localData.centerLetter = data.gameData.centerLetter
			localData.outerLetters = data.gameData.outerLetters
			localData.words_info = data.gameData.words_info
			localData.words = data.gameData.words
			var current_timestamp = getTimestampAsTime()
			console.log("old" + current_timestamp)
			console.log("new" + localData.expiration)
			if (localData.expiration == null || current_timestamp > localData.expiration) {
				localData.expiration = data.gameData.expiration
				localData.currentWord = '';
				localData.foundWordList = foundWordList;
				localData.userPoints = 0;
				localData.hintStep = -1;
				localData.hintExpiration = 0;
			}
			return localData
		})
	};
	load();
	return storedData;
}

export function getCurrentDate(separator = '') {
	var dt = new Date(new Date().toLocaleString('en', { timeZone: 'Asia/Baku' }))
	var year = dt.getFullYear();
	var month = (dt.getMonth() + 1).toString().padStart(2, "0");
	var day = dt.getDate().toString().padStart(2, "0");
	return year + '' + month + '' + day;
}

export function getTimestampAsTime() {
	var dt = new Date(new Date().toLocaleString('en', { timeZone: 'Asia/Baku' }))
	return dt.getTime().toString().slice(0, 10);
}
