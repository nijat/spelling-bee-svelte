import { writable } from 'svelte/store';

const gameDataStore = writable({
	currentWord: '',
	outerLetters: [''],
	centerLetter: '',
	foundWordList: [],
	correctWordList: [],
	maxScore: 0,
	userPoints: 0,
	panagrams: []
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
            localData.correctWordList = data.gameData.answers
			localData.maxScore = data.gameData.score
			localData.panagram = data.gameData.pangrams
            return localData
        })
	};
	load();
	return storeNew;
}