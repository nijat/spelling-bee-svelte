import { writable } from 'svelte/store';

const gameDataStore = writable({
	currentWord: '',
	outerLetters: [''],
	centerLetter: '',
	foundWordList: [],
	correctWordList: []
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
        gameDataStore.update(data2 => {
            data2.centerLetter = data.gameData.centerLetter
            data2.outerLetters = data.gameData.outerLetters
            data2.correctWordList = data.gameData.answers
            return data2
        })
	};
	load();
	return storeNew;
}