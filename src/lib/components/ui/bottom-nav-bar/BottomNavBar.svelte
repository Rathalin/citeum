<script lang="ts">
	import { Icon, MagnifyingGlass, User, Home, RectangleStack } from 'svelte-hero-icons'
	import IconButton from './IconButton.svelte'
</script>

<div class="  mb-4 flex flex-row items-center justify-around gap-6 p-4">
	<a href="/">
		<IconButton>
			<Icon src={Home} class="size-5" />
		</IconButton>
	</a>
	<a href="/search">
		<IconButton>
			<Icon src={MagnifyingGlass} class="size-5" />
		</IconButton>
	</a>
	<a href="/storages">
		<IconButton>
			<Icon src={RectangleStack} class="size-5" />
		</IconButton>
	</a>
	<a href="/profile">
		<IconButton>
			<Icon src={User} class="size-5" />
		</IconButton>
	</a>
</div>
