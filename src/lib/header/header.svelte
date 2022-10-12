<script lang="ts">
	import Icon from '@iconify/svelte';
	import Modal from '$lib/modal/modal.svelte';

	import { openModal } from 'svelte-modals';

	function openInfo() {
		openModal(Modal, {"type": "Info"});
	}

	function openScore() {
		openModal(Modal, {"type": "Score"});
	}

	function openHistory() {
		openModal(Modal, {"type": "History"});
	}
</script>

<div>
	<div class="max-w-md mx-auto p-2 px-4 asm:p-1 border-b">
		<div class="flex justify-between">
			<div class="flex items-center cursor-pointer" on:click={openInfo}>
				<Icon
					icon="ant-design:question-circle-outlined"
					class="text-gray-700 h-8 w-8 asm:h-6 asm:w-6"
				/>
			</div>
			<div class="flex items-center cursor-pointer" style="visibility: hidden">
				<Icon icon="bx:bx-bar-chart-alt-2" class="text-gray-700 h-8 w-8 asm:h-6 asm:w-6" />
			</div>

			<div class="flex items-center">
				<div class="flex text-4xl space-x-2 asm:text-2xl font-medium text-gray-700">SÖZÜ YAZ</div>
			</div>

			<div class="flex items-center cursor-pointer" on:click={openHistory}>
				<Icon icon="fluent:history-20-filled" class="text-gray-700 h-8 w-8 asm:h-6 asm:w-6" />
			</div>
			<div class="flex items-center cursor-pointer" on:click={openScore}>
				<Icon icon="bx:bx-bar-chart-alt-2" class="text-gray-700 h-8 w-8 asm:h-6 asm:w-6" />
			</div>
		</div>
	</div>
</div>
