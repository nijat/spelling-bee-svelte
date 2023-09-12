<script lang="ts">
	import CurrentWord from '$lib/current_word.svelte';
	import Header from '$lib/header/header.svelte';
	import Hexagon from '$lib/hexagon/hexagon.svelte';
	import UserRankingBar from '$lib/user_ranking_bar.svelte';
	import WordList from '$lib/word_list/word_list.svelte';
	import ButtonList from '$lib/buttons/button_list.svelte';
	import Toast from '$lib/toast.svelte';
	import SplashScreen from '$lib/splash_screen.svelte';
	import Twitter from '$lib/twitter.svelte';
	import ConfettiLocal from '$lib/confetti_local.svelte';

	import { Modals, closeModal } from 'svelte-modals';
	import { storedData, gameDataStore } from '$utils/store';

</script>

{#await $storedData}
	<SplashScreen />
{:then data}
	<Header />
	<UserRankingBar />
	<WordList />
	<CurrentWord />
	<Hexagon />
	<ButtonList />
	<Toast />
	<Modals>
		<button slot="backdrop" class="backdrop" on:click={closeModal} />
	</Modals>
	<Twitter />
	<ConfettiLocal show={$gameDataStore.userPoints == $gameDataStore.words_info.sum_score} />
{:catch error}
	Oops. something's wrong.
{/await}
