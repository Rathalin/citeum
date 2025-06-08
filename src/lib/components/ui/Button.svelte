<script lang="ts">
	import { cn } from '$lib/utils/cn'
	import { Button } from 'bits-ui'
	let { children, class: className, ...restProps }: Button.RootProps = $props()
</script>

<Button.Root
	class={cn(
		'rounded-input text-background shadow-mini hover:bg-dark/95 bg-dark inline-flex	h-12 cursor-pointer items-center justify-center px-[21px]	text-[15px] font-semibold active:scale-[0.98] active:transition-all',
		className,
	)}
	{...restProps}
>
	{@render children?.()}
</Button.Root>
