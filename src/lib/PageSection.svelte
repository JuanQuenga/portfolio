<script lang="ts">
	import { slide } from 'svelte/transition';
	export let reversedDirection = false;
	export let title = 'Section Title';
	let scrollY: number;
	let clientWidth: number;
	let clientHeight: number;
	let outerWidth: number;
	let outerHeight: number;
	$: moveToX = scrollY < outerWidth ? outerHeight - scrollY : 0;
</script>

<svelte:window bind:scrollY bind:outerWidth bind:outerHeight />

<div class="flex h-screen flex-col overflow-auto p-2 align-bottom" bind:clientHeight>
	<h1
		class:text-right={reversedDirection}
		class={'font-inter text-6xl uppercase text-stone-800 md:text-9xl'}
		bind:clientWidth
		transition:slide
	>
		{title}
	</h1>
	<div class="flex-grow " class:text-right={!reversedDirection}>
		<slot />
	</div>
</div>

<!-- scrollY < outerWidth ? (reversedDirection ? -clientWidth + scrollY : outerWidth - scrollY) : 0 -->
<!-- style:transform={`translate3d(${moveToX}px, 0, 0)`} -->
