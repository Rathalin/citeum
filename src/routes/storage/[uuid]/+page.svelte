<script lang="ts">
	import type { PageData } from './$types'

	let { data }: { data: PageData } = $props()
</script>

<section>
	<h1>{data.storage.name} ({data.products.length} Produkte)</h1>
	<ul>
		{#each data.products as product (product.id)}
			<li>{product.name}</li>
		{/each}
	</ul>
</section>
