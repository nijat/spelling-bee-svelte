<script lang="ts">
	import gameDataStore from '$utils/store';
	import { toast } from '@zerodevx/svelte-toast';
	import { rankingLevels, successToastOptions } from '$utils/config';
	var rankIndex = 0;

	function shareProgress() {
		calculateUserRanking();
		let text = 'SözüYaz Oyunu\n' + 'sozuyaz.com ' + calculateDayCount() + ' ' + $gameDataStore.userPoints + '\n' + calculateProgress();
		navigator.clipboard.writeText(text);
		toast.push('Oyun nəticəsi kopyalandı', successToastOptions);
	}

	function calculateDayCount() {
		var today = new Date();
		var date_to_reply = new Date('2022-07-05');
		var timeinmilisec = date_to_reply.getTime() - today.getTime();
		return -1 * Math.ceil(timeinmilisec / (1000 * 60 * 60 * 24));
	}

	function calculateProgress() {
		let bee = '🐝 ';
		let hex = '🍯 ';
		let count = rankIndex + 1;
		return hex.repeat(count) + bee.repeat(rankingLevels.length - count);
	}

	function calculateUserRanking() {
		let userPoints = $gameDataStore.userPoints;
		let maxPoint = $gameDataStore.words_info.sum_score;

		if (userPoints === 0) {
			rankIndex = 0;
			return;
		}

		for (let i = 0; i < rankingLevels.length; i++) {
			if (rankingLevels && Math.floor(rankingLevels[i].minScoreMultiplier * maxPoint) > userPoints) {
				rankIndex = i - 1;
				return;
			}
			if (Math.floor(rankingLevels[i].minScoreMultiplier * maxPoint) == userPoints) {
				rankIndex = i;
			}
		}
	}
</script>

<div class="mt-3 flex flex-row items-center justify-center unselectable">
	<button on:click={() => shareProgress()}>
		<img src="twitter.svg" alt="Spinning wheel" class="w-10 h-10" />
	</button>
</div>
