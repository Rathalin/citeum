<script lang="ts">
	import type { PageServerData } from './$types'

	let { data }: { data: PageServerData } = $props()
</script>

<svelte:head>
	<title>Citeum</title>
	<meta name="description" content="Food storage app" />
</svelte:head>

<section>
	<h1>Hello, {data.username}!</h1>
	{#if data.storages?.length === 0}
		<h1>404 - No storage</h1>
	{:else}
		<ul>
			{#each data.storages as storage (storage.uuid)}
				<li>
					<a href="storage/{storage.uuid}">{storage.name}</a>
				</li>
			{/each}
		</ul>
	{/if}
</section>
