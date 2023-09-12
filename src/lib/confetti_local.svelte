<script lang="ts">
	import { Confetti } from 'svelte-confetti';
	export let show: boolean = false;
</script>

{#if show}
	<div
		style="z-index: -1; position: fixed; top: -50px; left: 0; height: 100vh; width: 100vw; display: flex; justify-content: center; overflow: hidden; "
	>
		<Confetti x={[-5, 5]} y={[0, 0.1]} delay={[500, 2000]} infinite duration={5000} amount={50} fallDistance="100vh" />
	</div>
{/if}
