<script>
	import '../app.css';
	import '$lib/assets/main.css';
	import favicon from '$lib/assets/favicon.svg';
    import Navbar from '$lib/Navbar.svelte'
    import Footer from '$lib/Footer.svelte'
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div>
    <Navbar />
    {@render children?.()}
    <Footer />
</div>

