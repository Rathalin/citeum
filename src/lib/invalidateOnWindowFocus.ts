import { invalidateAll } from '$app/navigation'

/**
 * Registeres an onMount function to invalidateAll when the user focues the window
 */
export function invalidateOnWindowFocus() {
	const revalidate = () => {
		console.log('Invalidate All')
		invalidateAll()
	}

	window.addEventListener('focus', revalidate)
	document.addEventListener('visibilitychange', () => {
		if (document.visibilityState === 'visible') {
			revalidate()
		}
	})

	return () => {
		window.removeEventListener('focus', revalidate)
		document.removeEventListener('visibilitychange', revalidate)
	}
}
