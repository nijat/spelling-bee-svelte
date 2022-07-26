<script lang="ts">
	import CurrentWord from '$lib/current_word.svelte';
	import Header from '$lib/header/header.svelte';
	import Hexagon from '$lib/hexagon/hexagon.svelte';
	import UserRankingBar from '$lib/user_ranking_bar.svelte';
	import WordList from '$lib/word_list/word_list.svelte';
</script>

<Header />
<UserRankingBar />
<WordList />
<CurrentWord />
<Hexagon />
