<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import ContactButton from './ContactButton.svelte';
	import HamburgerButton from './HamburgerButton.svelte';
	import SocialButtons from './SocialButtons.svelte';

	let mobileMenuOpen = false;
	const links = [
		{
			name: 'About Me',
			href: '#'
		},
		{
			name: 'Skills',
			href: '#'
		},
		{
			name: 'Experience',
			href: '#'
		},
		{
			name: 'Projects',
			href: '#'
		}
	];
	const currentPage = 'About Me';

	const toggleMobileMenu = () => {
		mobileMenuOpen = !mobileMenuOpen;
	};
</script>

<nav class="uppercase md:text-lg">
	<div class="mx-auto px-2">
		<div class="relative flex h-16 items-center justify-between ">
			<div class="absolute inset-y-0 left-0 flex w-full items-center sm:hidden">
				<div class="mr-1 border-r border-stone-800 pr-1">
					<HamburgerButton onClick={toggleMobileMenu} opened={mobileMenuOpen} />
				</div>
				<SocialButtons />
			</div>
			<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
				<div class="hidden flex-grow border-b-2 border-stone-800 sm:flex">
					<div class="flex flex-grow space-x-4 text-stone-800">
						<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
						{#each links as link}
							{#if link.name === currentPage}
								<a
									href={link.href}
									class="bg-stone-800 px-3 py-2 font-medium text-stone-200 "
									aria-current="page">{link.name}</a
								>
							{:else}
								<a
									href={link.href}
									class="px-3 py-2 font-medium hover:bg-stone-800 hover:text-stone-200"
									>{link.name}</a
								>
							{/if}
						{/each}
					</div>
					<SocialButtons />
				</div>
				<div
					class="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0"
				>
					<ContactButton />
				</div>
			</div>
		</div>

		<!-- Mobile menu, show/hide based on menu state. -->
		{#if mobileMenuOpen}
			<div
				class="border-t-2 border-stone-800 sm:hidden"
				id="mobile-menu"
				transition:slide={{ duration: 500 }}
			>
				<div class="space-y-1 pt-2 pb-3">
					<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
					{#each links as link}
						{#if link.name === currentPage}
							<a
								href={link.href}
								class="block bg-stone-800 px-3 py-2 text-base font-medium text-white"
								aria-current="page">{link.name}</a
							>
						{:else}
							<a
								href={link.href}
								class="block px-3 py-2 text-base font-medium text-stone-500 hover:bg-stone-800 hover:text-white"
								>{link.name}</a
							>
						{/if}
					{/each}
				</div>
			</div>
		{/if}
	</div>
</nav>
