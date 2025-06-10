<script lang="ts">
	import { cn } from '$lib/utils/cn'
	import Card, { type CardProps } from './Card.svelte'

	let { children, class: className, ...restProps }: CardProps = $props()
</script>

<Card class={cn('hover:dark:bg-zinc-700', className)} {...restProps}>{@render children()}</Card>
