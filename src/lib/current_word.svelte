<script lang="ts">
	import gameDataStore from '$utils/store';

	$: outerLetters = $gameDataStore.outerLetters;
	$: centerLetter = $gameDataStore.centerLetter;
</script>

<div class="max-w-md mx-auto pt-3 h-8">
	<h2 class="flex justify-center text-2xl ">
		{#each $gameDataStore.currentWord.split('') as letter}
			{#if letter.toUpperCase() == centerLetter}
				<p class="text-yellow-500">{letter}</p>
			{:else if outerLetters.includes(letter.toUpperCase())}
				<p class="text-black">{letter}</p>
			{:else}
				<p class="text-gray-300">{letter}</p>
			{/if}
		{/each}
	</h2>
</div>
