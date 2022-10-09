import { writable } from 'svelte/store';

const gameDataStore = writable({
	currentWord: '',
	outerLetters: [''],
	centerLetter: '',
	foundWordList: [],
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

export const storeNew = writable(new Promise(() => {}));
export const gameDataFromServer = writable({});

export function getData() {
	const load = async () => {
		const response = await fetch(`http://localhost:5173/api`);
		const data = await response.json();
		storeNew.set(Promise.resolve(data));
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
	return storeNew;
}