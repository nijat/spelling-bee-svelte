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
		const response = await fetch(`https://spelling-bee-svelte.vercel.app/words/` + getCurrentDate() + `.json`);
		const data = await response.json();
		storedData.set(Promise.resolve(data));
		gameDataFromServer.set(data)
		gameDataStore.update(localData => {
			localData.centerLetter = data.gameData.centerLetter
			localData.outerLetters = data.gameData.outerLetters
			localData.words_info = data.gameData.words_info
			localData.words = data.gameData.words
			var timezone = new Date().getTime().toString().slice(0,10);
			if (localData.expiration == null) {
				localData.expiration = data.gameData.expiration
				localData.currentWord = '';
				localData.foundWordList = foundWordList;
				localData.userPoints = 0;
				localData.hintStep = 0;
			}
			if (timezone > localData.expiration) {
				localData.expiration = data.gameData.expiration
				localData.currentWord = '';
				localData.foundWordList = foundWordList;
				localData.userPoints = 0;
				localData.hintStep = 0;
			}

			return localData
		})
	};
	load();
	return storedData;
}

export function getCurrentDate(separator = '') {
	var dt = new Date();
	const myTimeZone = 4; // Baku Timezone
	dt.setTime(dt.getTime() + myTimeZone * 60 * 60 * 1000);
	var year = dt.getFullYear();
	var month = (dt.getMonth() + 1).toString().padStart(2, "0");
	var day = dt.getDate().toString().padStart(2, "0");
	return year + '' + month + '' + day;
}

