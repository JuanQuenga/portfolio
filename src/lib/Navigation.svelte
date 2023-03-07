<script lang="ts">
	let scrollY: number;
	import { fly, slide } from 'svelte/transition';
	import HamburgerButton from './HamburgerButton.svelte';
	import SocialButtons from './SocialButtons/SocialButtons.svelte';

	let mobileMenuOpen = false;
	const links = [
		{
			name: 'About Me',
			href: '#AboutMe'
		},
		{
			name: 'Skills',
			href: '#Skills'
		},
		{
			name: 'Experience',
			href: '#Experience'
		},
		{
			name: 'Projects',
			href: '#Projects'
		}
	];
	const currentPage = 'Home';

	const toggleMobileMenu = () => {
		mobileMenuOpen = !mobileMenuOpen;
	};

	$: hasScrolled = scrollY > 10;
</script>

<svelte:window bind:scrollY />

<nav
	class="fixed z-[100] w-full uppercase md:text-lg"
	class:shadow-md={hasScrolled}
	class:backdrop-blur-3xl={hasScrolled}
>
	<div class="mx-auto px-2 md:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<div class="absolute inset-y-0 left-0 flex w-full items-center sm:hidden">
				<div class="mr-2">
					<HamburgerButton onClick={toggleMobileMenu} opened={mobileMenuOpen} />
				</div>
			</div>
			<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
				<div class="hidden flex-grow sm:flex">
					<div class="flex flex-grow space-x-2 text-xl font-medium text-stone-800">
						<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
						{#each links as link}
							{#if link.name === currentPage}
								<a
									href={link.href}
									class="bg-stone-800 px-3 py-2  text-stone-200 "
									aria-current="page">{link.name}</a
								>
							{:else}
								<a
									href={link.href}
									class="px-3 py-2 transition-transform hover:scale-105 hover:bg-stone-800 hover:text-orange-300"
									>{link.name}</a
								>
							{/if}
						{/each}
					</div>
				</div>

				<!-- <div
					class="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0"
				>
					<ContactButton />
				</div> -->
			</div>
			<div class="float-right text-right"><SocialButtons /></div>
		</div>

		<!-- Mobile menu, show/hide based on menu state. -->
		{#if mobileMenuOpen}
			<div
				class="z-50 mb-2 border-b border-stone-800 pb-2 sm:hidden"
				id="mobile-menu"
				transition:slide={{ duration: 500 }}
			>
				<div class="space-y-1">
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
								class="block px-3 py-2 text-base font-medium text-stone-800 hover:bg-stone-800 hover:text-orange-300"
								>{link.name}</a
							>
						{/if}
					{/each}
				</div>
			</div>
		{/if}
	</div>
</nav>
