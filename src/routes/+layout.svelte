<script global>
	import '../app.postcss';
	import Navigation from '../lib/Navigation.svelte';
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=Montserrat" rel="stylesheet" />
</svelte:head>

<Navigation />
<slot />

<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	:global(body) {
		font-family: 'Montserrat', sans-serif;
	}
	:global(*) {
		box-sizing: border-box;
	}
</style>
