<script lang="ts">
	import { rankingLevels } from '$utils/config';
	import gameDataStore from '$utils/store';

	$: userPoints = $gameDataStore.userPoints
	$: rankIndex = 0

	function calculateUserRankBar() {
		for (let i = 0; i < rankingLevels.length; i++) {
			if (
				rankingLevels &&
				Math.floor(rankingLevels[i].minScoreMultiplier * $gameDataStore.maxScore) > userPoints
			) {
				rankIndex = i - 1;
				return;
			}
			if (Math.floor(rankingLevels[i].minScoreMultiplier * $gameDataStore.maxScore) == userPoints) {
				rankIndex = i;
			}
		}
	}
	gameDataStore.subscribe( valueE => {
		console.log("test")
		calculateUserRankBar()
		console.log(rankIndex)
	})
	
</script>

<div class="max-w-md mx-auto p-2">
	<div class="flex flex-row w-full items-center justify-center">
		<h3 class="flex items-center justify-center p-1  w-32 font-semibold">
			{rankingLevels[rankIndex].name}
		</h3>
		<div class="w-full">
			<div class="ranking-bar">
				{#each rankingLevels as level, i}
					{#if i == rankIndex}
						<div class="current-rank-icon bounce">
							<p class="font-thin text-sm">{userPoints}</p>
						</div>
					{:else if i < rankIndex}
						<div class="past-rank-icon" />
					{:else if i == rankingLevels.length - 1}
						<div class="final-rank-icon" />
					{:else}
						<div class="future-rank-icon" />
					{/if}
				{/each}
			</div>
			<div class="line" />
		</div>
	</div>
</div>
