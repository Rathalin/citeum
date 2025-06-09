<script lang="ts">
	let { children } = $props()
</script>

<div class="rounded-md p-4 dark:bg-zinc-800">{@render children()}</div>
