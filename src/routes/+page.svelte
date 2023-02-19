<script lang="ts">
	import PageSection from '$lib/PageSection.svelte';

	let scrollY: number;
	let innerHeight: number;
	let clientWidth: number;
</script>

<svelte:window bind:scrollY bind:innerHeight />
<div
	class="mx-2 flex h-[calc(100vh-64px)] flex-col overflow-auto border-t border-stone-800 pb-2 align-bottom sm:border-none"
>
	<div class="w-2/3 flex-grow  text-xl md:text-6xl">
		Empowering businesses using <strong
			class="bg-gradient-to-r from-rose-400 to-orange-300 px-1 font-extrabold md:px-2"
			>innovative</strong
		>
		front-end web development
		<strong class="bg-gradient-to-r from-orange-300 to-rose-400 px-1 font-extrabold md:px-2"
			>solutions</strong
		>.
	</div>
	<h1
		class="text-right font-inter text-6xl uppercase text-stone-800 md:text-9xl"
		style:transform={`translate3d(${-scrollY}px, 0, 0)`}
	>
		Juan<br />Quenga
	</h1>
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
<PageSection title="Test">Testing new section.</PageSection>
<div class="flex h-screen overflow-auto p-2 align-bottom">
	<h1
		class="inline font-inter text-6xl uppercase text-stone-800 md:text-9xl"
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
