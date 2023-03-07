<script lang="ts">
	let scrollY: number;
	let m = { x: 0, y: 0 };

	function handleMousemove(event: MouseEvent) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
</script>

<svelte:window bind:scrollY />
<svelte:body on:mousemove={handleMousemove} />

<div class="relative -z-10">
	<div
		class="absolute left-1/2 top-1/2 aspect-square h-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white bg-gradient-to-r from-rose-400 via-orange-300 to-rose-400 opacity-50 md:h-[900px]"
		style:left={`${m.x}px`}
		style:top={`${m.y + scrollY}px`}
	/>
	<div class="fixed z-0 h-full w-full backdrop-blur-[100px] md:backdrop-blur-[200px]" />
	<slot />
</div>
