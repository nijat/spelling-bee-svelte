import { writable } from 'svelte/store';

const gameDataStore = writable({
    currentWord: '', 
    outerLetters: ['N', 'Ə', 'Ş', 'Ç', 'I', 'Ə'],
    centerLetter: 'M',
    foundWordList: [],
    correctWordList: ['ŞŞNƏ']
},);

export default gameDataStore;

