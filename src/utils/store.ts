import { writable } from 'svelte/store';

const foundWordList: string[] = []
const gameDataStore = writable({
	currentWord: '',
	outerLetters: [''],
	centerLetter: '',
	foundWordList: foundWordList,
	userPoints: 0,
	words_info: {
		sum_score: 0,
		word_count: 0,
		panagram_count: 0,
		word_length: {}
	},
	words: []
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

