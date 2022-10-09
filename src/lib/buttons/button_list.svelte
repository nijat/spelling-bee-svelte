<script lang="ts">
	import Icon from '@iconify/svelte';
	import gameDataStore from '$utils/store';
	import { checkAndAddWord, showHintonUI } from '$utils/utils';

	function shuffleLetters() {
		$gameDataStore.outerLetters = $gameDataStore.outerLetters.sort(() => Math.random() - 0.5);
	}

	function cleanCurrentWord() {
		$gameDataStore.currentWord = '';
	}

</script>

<div class="max-w-md mx-auto">
	<div class="buttons">
		<button class="single-btn" on:click={cleanCurrentWord}>Sil</button>
		<button class="shuffle-btn" on:click={shuffleLetters}><Icon icon="ei:refresh" /></button>
		<button class="single-btn" on:click={() => showHintonUI()}>😉</button>
		<button class="single-btn" on:click={() => checkAndAddWord()}>Daxil Et</button>
	</div>
</div>
