<script lang="ts">
	import Icon from '@iconify/svelte';
	import gameDataStore from '$utils/store';

	export let showList: boolean = false;
	$: foundWordList = $gameDataStore.foundWordList;

	function toggleShowList() {
		showList = !showList;
	}
	function capitalize(text: string) {
		return text.toUpperCase();
	}
</script>

<div class="max-w-md mx-auto unselectable p-2">
	<div class={showList ? 'word-list expanded-word-list' : 'word-list'} on:click={toggleShowList}>
		{#if showList}
			<div class="w-full">
				<p class="slide-in-text pb-4 w-full text-gray-400">
					Siz {foundWordList.length} söz tapmısız
				</p>
				{#if foundWordList.length > 0}
					<p class="font-medium">{foundWordList.map(capitalize).join(', ')}</p>
				{/if}
			</div>
		{:else if foundWordList.length > 0 && foundWordList.length < 4}
			<p class="font-medium">{foundWordList.map(capitalize).join('  ')}</p>
		{:else if foundWordList.length > 4}
			<p class="font-medium">{foundWordList.slice(0, 4).map(capitalize).join('  ')}...</p>
		{:else}
			<p class="text-gray-300 ">Tapdığınız Sözlər...</p>
		{/if}
		<Icon icon="akar-icons:arrow-down" class="arrow-icon" />
	</div>
</div>
