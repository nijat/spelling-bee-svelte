<script lang="ts">
	import gameDataStore from '$lib/store'
	import Hex from '$lib/hexagon/hex.svelte';
	$: outerLetters = $gameDataStore.outerLetters;
	$: centerLetter = $gameDataStore.centerLetter;
</script>

<div class="max-w-md mx-auto h-max pb-16">
	<div class="w-full letters justify-center flex flex-row md:p-6">
		<div class="left flex flex-col h-full ">
			<Hex center={false} letter={outerLetters[0]} />
			<Hex center={false} letter={outerLetters[1]} />
		</div>
		<div class=" flex flex-col h-full -mt-10 md:-mt-14">
			<Hex center={false} letter={outerLetters[2]} />
			<Hex center={true} letter={centerLetter} />
			<Hex center={false} letter={outerLetters[3]} />
		</div>
		<div class="flex flex-col">
			<Hex center={false} letter={outerLetters[4]} />
			<Hex center={false} letter={outerLetters[5]} />
		</div>
	</div>
</div>
