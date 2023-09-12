<script lang="ts">
	import gameDataStore from '$utils/store';
	export let center = true;
	export let letter = '';

	const topClass = center ? 'center-top' : 'hex-top';
	const bottomClass = center ? 'center-bottom' : 'hex-bottom';
	const midClassList = 'flex flex-col justify-center items-center';
	const middleClass = center ? 'hex-center' : 'hex-middle';

	function addLetterToCurrentWord(letter: string) {
		$gameDataStore.currentWord = $gameDataStore.currentWord + letter;
	}
</script>

<button class="hex my-16 rounded-full unselectable" on:click={() => addLetterToCurrentWord(letter)}>
	<div class={topClass} />
	<div class="{midClassList} {middleClass}">
		<h2 class="text-2xl font-bold">
			{letter}
		</h2>
	</div>
	<div class={bottomClass} />
</button>
