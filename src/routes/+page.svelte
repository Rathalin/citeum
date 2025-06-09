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
	<h1>Hallo, {data.username}!</h1>
	{#if data.storages?.length === 0}
		<h1>404 - No storage</h1>
	{:else}
		<ul class="mt-4 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
			{#each data.storages as storage (storage.uuid)}
				<li>
					<Card>
						<a href="storage/{storage.uuid}">{storage.name}</a>
					</Card>
				</li>
			{/each}
		</ul>
	{/if}
</section>
