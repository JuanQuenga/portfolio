<script lang="ts">
	export let reversedDirection = false;
	export let title = 'Section Title';
	let scrollY: number;
	let clientWidth: number;
	let clientHeight: number;
	let outerWidth: number;
	let outerHeight: number;
</script>

<svelte:window bind:scrollY bind:outerWidth bind:outerHeight />

<div class="flex h-screen overflow-auto p-2 align-bottom" bind:clientHeight>
	<h1
		class={'inline font-inter text-6xl uppercase text-stone-800 md:text-9xl' +
			(reversedDirection ? ' text-right' : '')}
		style:transform={`translate3d(${
			scrollY < outerWidth ? (reversedDirection ? -clientWidth + scrollY : outerWidth - scrollY) : 0
		}px, 0, 0)`}
		bind:clientWidth
	>
		{`${outerHeight} | ${scrollY} < ${outerWidth}`}
	</h1>
	<div class="flex-grow">
		<slot />
	</div>
</div>
