<script lang="ts">
	import { SvelteToast } from '@zerodevx/svelte-toast';
</script>

<SvelteToast />

<style>
	:root {
		--toastContainerTop: auto;
		--toastContainerRight: auto;
        --toastBackground: #F56565;
        --toastBarBackground: #C53030;
		--toastContainerBottom: 8rem;
		--toastContainerLeft: calc(50vw - 8rem);
	}
</style>
