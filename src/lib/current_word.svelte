<script lang="ts">
	export let userWord: string = 'TEST';
	export let centerLetter: string = 'T';
	export let outerLetters: string[] = ['T', 'E', 'O', 'B'];
</script>

<div class="max-w-md mx-auto pt-3">
	<h2 class="flex justify-center text-2xl ">
		{#each userWord.split('') as letter}
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
