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

<div class="page-container">
    <Navbar />
        <main>
            {@render children?.()}
        </main>
    <Footer />
</div>

<style>
    .page-container {
        display: flex;
        flex-direction: column;
        min-height: 100dvh;
    }

    main {
        flex-grow: 1;
    }
</style>
