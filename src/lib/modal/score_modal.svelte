<script lang="ts">
	import gameDataStore from '$utils/store';

	var word_length = $gameDataStore.words_info.word_length;
	var found_length: any = {};

	function calculateWordLength() {
		for (let length in word_length) {
			found_length[length] = 0;
		}
		for (let word in $gameDataStore.foundWordList) {
			let length = $gameDataStore.foundWordList[word].length;
			found_length[length]++;
		}
	}
	calculateWordLength();
</script>

<div role="dialog" class="modal">
	<div class="modal_contents">
		<h2 class="modal_title">Xallar</h2>
		<p class="pl-3 pb-1">Sözlər sayı: <b>{$gameDataStore.words_info.word_count}</b></p>
		<p class="pl-3 pb-1">Panaqram sayı: <b>{$gameDataStore.words_info.panagram_count}</b></p>
		<p class="pl-3 pb-5">Maksimum xal: <b>{$gameDataStore.words_info.sum_score}</b></p>
		<ul class="list-disc pl-8">
			{#each Object.entries(word_length) as [length, i]}
				<li>
					<b>{word_length[length]}</b> dənə <b>{length}</b> hərfli sözdən <b>{found_length[length]}</b> söz tapılmışdır
				</li>
			{/each}
		</ul>
		<div class="modal_actions">
			<button on:click>OK</button>
		</div>
	</div>
</div>
