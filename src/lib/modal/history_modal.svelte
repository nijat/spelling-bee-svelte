<script lang="ts">
	let words: any = [];
	async function getYesterdayWords() {
		const res = await fetch('https://sozuyaz.com/words/' + getYesterdayTime() + '.json');

		if (res.ok) {
			const data = await res.json();
			words = data.gameData.words;
			return words;
		} else {
			throw new Error('Error');
		}
	}

	let promise = getYesterdayWords();

	function getYesterdayTime(separator = '') {
		var dt = new Date(new Date().toLocaleString('en', { timeZone: 'Asia/Baku' }));
		dt.setDate(dt.getDate() - 1);
		var year = dt.getFullYear();
		var month = (dt.getMonth() + 1).toString().padStart(2, '0');
		var day = dt.getDate().toString().padStart(2, '0');
		return year + '' + month + '' + day;
	}
</script>

<div role="dialog" class="modal">
	<div class="modal_contents">
		<h2 class="modal_title">Dünənki Sözlər</h2>
		<div class="modal_content">
			<div id="dialog-window">
				{#await promise}
					<p>...waiting</p>
				{:then words}
					<div id="scrollable-content">
						<ul>
							{#each words as word, i}
								<p>{(i += 1)}. {word.word}</p>
							{/each}
						</ul>
					</div>
				{:catch error}
					<p style="color: red">{error.message}</p>
				{/await}
			</div>
		</div>
		<div class="modal_actions">
			<button on:click>OK</button>
		</div>
	</div>
</div>
