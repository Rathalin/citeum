<script lang="ts">
	import Card from '$lib/components/ui/card/Card.svelte'
	import type { PageServerData } from './$types'

	let { data }: { data: PageServerData } = $props()
</script>

<svelte:head>
	<title>Citeum</title>
	<meta name="description" content="Food storage app" />
</svelte:head>

<section>
	<h1 class="mb-4">Hallo, {data.username}!</h1>
	{#if data.storages?.length === 0}
		<h1>404 - No storage</h1>
	{:else}
		<h2 class="text-xl">Lager</h2>
		<ul class="mt-4 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
			{#each data.storages as storage (storage.uuid)}
				<a href="storage/{storage.uuid}">
					<li>
						<Card class="hover:dark:bg-zinc-700 focus:dark:bg-zinc-700">
							{storage.name}
						</Card>
					</li>
				</a>
			{/each}
		</ul>
	{/if}
</section>
