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

	import { Modals, closeModal } from 'svelte-modals';
	import { getData, storedData } from '$utils/store';
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
	<Twitter/>
{:catch error}
	Oops. something's wrong.
{/await}