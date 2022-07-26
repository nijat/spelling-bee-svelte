<script lang="ts">
	import Hex from '$lib/hexagon/hex.svelte';
	export let listOfLetter = ['H', 'A', 'B', 'T', 'R', 'S'];
	export let centerLetter = 'I';
</script>

<div class="max-w-md mx-auto">
    <div class="w-full letters justify-center flex flex-row md:p-6">
        <div class="left flex flex-col h-full ">
            <Hex center={false} letter={listOfLetter[0]} />
            <Hex center={false} letter={listOfLetter[1]} />
        </div>
        <div class=" flex flex-col h-full -mt-10 md:-mt-14">
            <Hex center={false} letter={listOfLetter[2]} />
            <Hex center={true} letter={centerLetter} />
            <Hex center={false} letter={listOfLetter[3]} />
        </div>
        <div class="flex flex-col">
            <Hex center={false} letter={listOfLetter[4]} />
            <Hex center={false} letter={listOfLetter[5]} />
        </div>
    </div>
</div>