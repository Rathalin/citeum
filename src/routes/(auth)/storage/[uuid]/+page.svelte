<script lang="ts">
	import type { PageData } from './$types'

	let { data }: { data: PageData } = $props()

	let productCountText = $derived(
		` (${data.products.length} ${data.products.length === 1 ? 'Produkt' : 'Produkte'})`,
	)
</script>

<section>
	<h1 class="mb-4 text-2xl">{data.storage.name}{productCountText}</h1>
	<div class="relative overflow-x-auto">
		<table
			class="w-full table-auto text-left text-sm text-zinc-500 rtl:text-right dark:text-zinc-400"
		>
			<thead
				class="border-b border-b-zinc-400 text-xs text-zinc-700 uppercase dark:border-b-zinc-700 dark:text-zinc-400"
			>
				<tr>
					<th scope="col" class="px-6 py-3">Produkt</th>
					<th scope="col" class="px-6 py-3">Datum</th>
				</tr>
			</thead>
			<tbody>
				{#each data.products as product (product.id)}
					<tr class="border-b border-zinc-300 last-of-type:border-0 dark:border-zinc-800">
						<td class="px-6 py-4">{product.name}</td>
						<td class="px-6 py-4">{product.bestBeforeDate ?? '/'}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>
