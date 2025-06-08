<script lang="ts">
	import type { PageServerData } from './$types'

	let { data }: { data: PageServerData } = $props()
</script>

{#if data.storageName != null}
	<h1>Hello, {data.username}!</h1>
	<p>Your storage is named {data.storageName}</p>
{:else}
	<h1>404 - No storage</h1>
{/if}
