<script lang="ts">
	import ScoreModal from './score_modal.svelte';
	import InfoModal from './info_modal.svelte';

	import { closeModal } from 'svelte-modals';

	export let isOpen: boolean;
	export let type: string;
</script>

{#if type == 'Info' && isOpen}
	<InfoModal on:click={closeModal} />
{:else if type == 'Score'  && isOpen}
	<ScoreModal on:click={closeModal} />
{/if}
