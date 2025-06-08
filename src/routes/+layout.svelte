<script lang="ts">
	import Header from './Header.svelte'
	import '../app.css'
	import type { PageServerData } from './$types'
	import type { Snippet } from 'svelte'

	let { children, data }: { children: Snippet; data: PageServerData } = $props()
</script>

<div class="flex min-h-screen flex-col">
	<Header username={data.username} />

	<main class="mx-auto flex w-full max-w-[64rem] flex-1 flex-col p-4">
		{@render children()}
	</main>
</div>
