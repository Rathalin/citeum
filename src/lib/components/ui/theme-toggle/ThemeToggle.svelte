<script lang="ts">
	import { Button } from 'bits-ui'
	import { onMount } from 'svelte'
	let theme = $state('light')

	onMount(() => {
		const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
		theme = systemTheme
	})

	function toggleTheme() {
		theme = theme === 'light' ? 'dark' : 'light'
		document.documentElement.setAttribute('class', theme)
	}
</script>

<Button.Root
	onclick={toggleTheme}
	role="switch"
	aria-label="Light Switch"
	aria-checked={theme === 'light'}
	title="Toggle {theme === 'dark' ? 'Dark' : 'Light'} Mode"
	class="rounded-input hover:bg-dark-10 focus-visible:ring-foreground focus-visible:ring-offset-background relative inline-flex h-10 w-10 items-center justify-center px-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden"
>
	{#if theme === 'light'}
		<div
			class="absolute inline-flex h-full w-full items-center justify-center"
			transition:scale={{
				delay: 50,
				duration: 200,
				start: 0.7,
				easing: cubicOut,
			}}
		>
			<Moon class="size-6" aria-label="Moon" />
		</div>
	{:else}
		<div
			class="absolute inline-flex h-full w-full items-center justify-center"
			transition:scale={{
				delay: 50,
				duration: 200,
				start: 0.7,
				easing: cubicOut,
			}}
		>
			<Sun class="size-6" aria-label="Sun" />
		</div>
	{/if}
</Button.Root>
