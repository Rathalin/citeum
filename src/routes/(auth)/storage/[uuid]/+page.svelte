<script lang="ts">
	import type { PageData } from './$types'

	let { data }: { data: PageData } = $props()

	let productCountText = $derived(
		` (${data.products.length} ${data.products.length === 1 ? 'Produkt' : 'Produkte'})`,
	)
</script>

<section>
	<h1>{data.storage.name}{productCountText}</h1>
	<ul>
		{#each data.products as product (product.id)}
			<li>{product.name} - {product.bestBeforeDate ?? '/'}</li>
		{/each}
	</ul>
</section>
