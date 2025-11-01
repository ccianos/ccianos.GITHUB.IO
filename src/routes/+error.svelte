<script>
    import { page } from '$app/state';
    import { onMount } from 'svelte';

    let unicodeArt = 'Loading...';

    // Fetch the txt file when the component loads
    onMount (async () => {
        try {
            const res = await fetch('/error/rofp.txt');
            if (res.ok) {
                unicodeArt = await res.text();
            } else {
                unicodeArt = 'Error loading art';
            } 
        } catch (err) {
                unicodeArt = 'Error loading art';
        }
    });
</script>

<div class="error">
    <h1>{page.status}</h1>
    <h2>{page.error.message}</h2>
    <p>Shhh... Nothing to see here!</p>
</div>

<div class="byterep-container blinking">
    <pre class="buttery">{unicodeArt}</pre>
</div>

<style>
    :root {
        --text-animation-speed: 5s;
        --color-borders: #7e4000; /* Hazelnut Chocolate (Coffee Shop Palette Color Palette https://www.color-hex.com/color-palette/13328) */
        --color-buttery-1: #c38e6a; /* Shiracha Brown (Coffee shop Color Palette https://www.color-hex.com/color-palette/3533) */
        --color-buttery-2:	#b8b17b; /* Leek Powder (Coffee shop Color Palette https://www.color-hex.com/color-palette/3533) */
        --color-buttery-3: #b8855c; /* Vermicelles (Coffee shop Color Palette https://www.color-hex.com/color-palette/3533) */
    }

    div {
        margin: 0 auto;
    }

    .error {
        font-size: 18px;
        margin-top: 10px;
        text-align: center;
    }

    p {
        font-weight: bold;
    }

    .byterep-container {
        display: flex;
        flex-grow: 1;
        position: relative;
        left: auto;
        right: auto;
        padding: 1em;
        align-items: center;
        justify-content: center;
        pointer-events: none;
        overflow: hidden;
    }

    pre {
        font-family: "Courier New", Courier, monospace;
        text-align: left;
        line-height:  0.8;
        font-size: clamp(1px, 1vw, 8px);
    }

    .buttery {
        background: linear-gradient(
            to left,
            var(--color-buttery-1),
            var(--color-buttery-2),
            var(--color-buttery-3),
            var(--color-buttery-1)
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
        text-decoration: none;
        text-shadow: 4px 6px 8px var(--color-borders);
        margin: 0;
        padding: 0;
    }

    .blinking {
        animation: blink var(--text-animation-speed);
        animation-iteration-count: infinite;
        opacity: 0;
        will-change: opacity;
    }

    @keyframes blink {
        0%, 100% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
    }

    @media (max-width: 600px) {
        .error {
            font-size: 14px;
        }
    }
</style>
