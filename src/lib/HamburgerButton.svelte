<script lang="ts">
	export let opened: boolean = false;
	export let onClick: () => void;
</script>

<button
	type="button"
	class="inline-flex items-center justify-center stroke-stone-800 p-2 text-gray-400 hover:bg-stone-800 hover:stroke-stone-100 hover:text-stone-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-stone-100"
	aria-controls="mobile-menu"
	aria-expanded="false"
	on:click={onClick}
>
	<span class="sr-only">Open main menu</span>
	{#if !opened}
		<svg
			class="h-7 w-7"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			aria-hidden="true"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
			/>
		</svg>
	{:else}
		<svg
			class="h-7 w-7"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			aria-hidden="true"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
		</svg>
	{/if}
</button>
