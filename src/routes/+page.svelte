<script lang="ts">
	import ContactButton from '$lib/ContactButton.svelte';
	import PageSection from '$lib/PageSection.svelte';
	import viewport from '../actions/useViewportAction';

	let scrollY: number;
	let innerHeight: number;
	let clientWidth: number;
</script>

<svelte:window bind:scrollY bind:innerHeight />
<div class="flex h-screen flex-col overflow-auto pb-2 pt-[64px] align-bottom md:px-6">
	<div class="w-full flex-grow bg-cover  text-xl md:w-2/3 md:text-6xl">
		Empowering businesses using <strong
			class="bg-gradient-to-r from-rose-400 to-orange-300 px-1 font-extrabold md:px-2"
			>innovative</strong
		>
		front-end web development
		<strong class="bg-gradient-to-r from-orange-300 to-rose-400 px-1 font-extrabold md:px-2"
			>solutions</strong
		>.
	</div>
	<div class="flex">
		<div class="flex-grow"><ContactButton /></div>
		<!-- style:transform={`translate3d(${scrollY}px, 0, 0)`} -->
		<h1 class="text-right font-inter text-6xl font-medium uppercase text-stone-800 md:text-9xl">
			Juan<br />Quenga
		</h1>
	</div>
	<div class="flex w-full">
		<div
			class="mx-auto mt-2 w-full border-b-2 border-stone-800 p-2 text-center hover:bg-stone-800 hover:text-stone-200"
		>
			<div class="animate-bounce">
				Learn More
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					class="bi bi-caret-down inline-block w-5"
					viewBox="0 0 16 16"
				>
					<path
						d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
					/>
				</svg>
			</div>
		</div>
	</div>
</div>
<PageSection title="Test" reversedDirection={true}>Testing new section.</PageSection>
<div
	class="flex h-screen overflow-auto p-2 align-bottom"
	use:viewport
	on:enterViewport={() => console.log('enter!')}
	on:exitViewport={() => console.log('exit!')}
>
	<h1
		class="inline -translate-x-full font-inter text-6xl uppercase text-stone-800 md:text-9xl"
		style:transform={`translate3d(${scrollY > clientWidth ? 0 : -clientWidth + scrollY}px, 0, 0)`}
		bind:clientWidth
	>
		About Me
	</h1>
	<div class="flex-grow">Web Developer</div>
</div>
<div class="flex h-screen flex-col overflow-auto p-2 text-right align-bottom">
	<h1 class="font-inter text-6xl uppercase text-stone-800 md:text-9xl">Skills</h1>
	<div class="flex-grow">Web Developer</div>
</div>
<div class="flex h-screen flex-col overflow-auto p-2 align-bottom">
	<h1 class="font-inter text-6xl uppercase text-stone-800 md:text-9xl">Projects</h1>
	<div class="grid-col grid">Web Developer</div>
</div>
<div class="flex h-screen flex-col overflow-auto p-2 text-right align-bottom">
	<h1 class="font-inter text-6xl uppercase text-stone-800 md:text-9xl">Contact Me</h1>
	<div class="flex-grow">Web Developer</div>
</div>
