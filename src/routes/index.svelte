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

	import { Confetti } from "svelte-confetti"

	import { Modals, closeModal } from 'svelte-modals';
	import { getData, storedData, gameDataStore } from '$utils/store';
	getData();
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
		<div slot="backdrop" class="backdrop" on:click={closeModal} />
	</Modals>
	<Twitter />
	{#if $gameDataStore.userPoints==$gameDataStore.words_info.sum_score}
		<div style="z-index: -1; position: fixed; top: -50px; left: 0; height: 100vh; width: 100vw; display: flex; justify-content: center; overflow: hidden; ">
			<Confetti x={[-5, 5]} y={[0, 0.1]} delay={[500, 2000]}  infinite duration=5000 amount=500 fallDistance="100vh" />
		</div>
	{/if}
{:catch error}
	Oops. something's wrong.
{/await}
