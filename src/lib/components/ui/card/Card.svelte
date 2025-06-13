<script lang="ts">
	import { cn } from '$lib/utils/cn'
	import type { ClassValue } from 'clsx'
	import type { Snippet } from 'svelte'
	import type { SvelteHTMLElements } from 'svelte/elements'

	export type CardProps = { children: Snippet; class: ClassValue } & SvelteHTMLElements['div']

	let { children, class: className, ...restProps }: CardProps = $props()
</script>

<div class={cn('rounded-md dark:bg-zinc-800', className)} {...restProps}>
	{@render children()}
</div>
