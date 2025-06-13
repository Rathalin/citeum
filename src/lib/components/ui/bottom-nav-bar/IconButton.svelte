<script lang="ts">
	import { Button } from 'bits-ui'

	let { children } = $props()
</script>

<Button.Root
	class="cursor-pointer rounded-lg p-4 shadow-sm dark:bg-zinc-900 dark:hover:bg-zinc-800"
>
	{@render children()}
</Button.Root>
