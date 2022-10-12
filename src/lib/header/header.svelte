<script lang="ts">
	import Icon from '@iconify/svelte';
	import { infoModalLangugage, scoreModalLangugage } from '$utils/config'
	import { openModal } from 'svelte-modals';
	import Modal from '$lib/modal.svelte';
	import gameDataStore from '$utils/store';

	function openInfo() {
		openModal(Modal, infoModalLangugage);
	}

	function openScore(){
		getScoreText()
		openModal(Modal, scoreModalLangugage)
	}

	function getScoreText(){
		scoreModalLangugage.messages = []
		scoreModalLangugage.messages.push("Bu günün hərfləri ilə <b>"+$gameDataStore.words_info.word_count+"</b> söz tapmaq mümkündür.")
		scoreModalLangugage.messages.push("Və <b>"+$gameDataStore.words_info.panagram_count+"</b> dənə panagram var, ala biləcəyiniz maximum xal: <b>"+$gameDataStore.words_info.sum_score+"</b>")
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

			<div class="flex items-center">
				<div class="flex text-4xl space-x-2 asm:text-2xl font-medium text-gray-700">SÖZÜ YAZ</div>
			</div>

			<div class="flex items-center cursor-pointer" on:click={openScore}>
				<Icon icon="bx:bx-bar-chart-alt-2" class="text-gray-700 h-8 w-8 asm:h-6 asm:w-6" />
			</div>
		</div>
	</div>
</div>
