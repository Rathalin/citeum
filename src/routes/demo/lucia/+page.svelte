<script lang="ts">
	import { enhance } from '$app/forms'
	import Button from '$lib/components/ui/Button.svelte'
	import type { PageServerData } from './$types'

	let { data }: { data: PageServerData } = $props()
</script>

<h1>Hi, {data.user.username}!</h1>
<p>Your user ID is {data.user.id}.</p>
<form method="post" action="?/logout" use:enhance>
	<Button type="submit" class="mt-5">Sign out</Button>
</form>
