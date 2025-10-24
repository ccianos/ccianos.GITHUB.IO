<header class="title-container">
    <svg viewBox="0 0 800 300" class="buttery blinking-chars" xmlns="http://www.w3.org/2000/svg">
        <!-- Define the animations -->
        <text text-anchor="middle" x="50%" y="20%" font-size="15" class="blinking-chars-group">
            <!-- First text: "Human Can Do" -->
             <tspan id="text1" class="char" dy="0">Human Can Do</tspan>
            <!-- Second text: "Within The Humanity That Do" -->
             <tspan id="text2" class="char" dy="15">Within The Humanity That Do</tspan>
            <!-- Third text: "Humanity Can Do" -->
            <tspan id="text3" class="char" dy="-15">Humanity Can Do</tspan>
            <!-- Fourth text: "Within The Human That Do" -->
            <tspan id="text4" class="char" dy="15">Within The Human That Do</tspan>
        </text>
    </svg>
</header>

<style>
    @font-face {
        font-family: "NeonSans";
        font-style: normal;
        font-weight: 900;
        src: url(assets/fonts/neon_sans/NeonSans.ttf) format("truetype");
    }

    :root {
        --text-body-bg-color: #d2dae2;
        --text-body-color: #82589f;
        --text-font-family: sans-serif;
        --text-animation-speed: 5s;
        --color-borders: #7e4000; /* Hazelnut Chocolate (Coffee Shop Palette Color Palette https://www.color-hex.com/color-palette/13328) */
        --color-buttery-1: #c38e6a; /* Shiracha Brown (Coffee shop Color Palette https://www.color-hex.com/color-palette/3533) */
        --color-buttery-2:	#b8b17b; /* Leek Powder (Coffee shop Color Palette https://www.color-hex.com/color-palette/3533) */
        --color-buttery-3: #b8855c; /* Vermicelles (Coffee shop Color Palette https://www.color-hex.com/color-palette/3533) */
    }

    svg {
        fill: currentColor;
        max-width: 100%;
        height: auto;
        vertical-align: baseline;
    }

    .title-container {
        display: flex;
        position: relative;
        left: auto;
        right: auto;
        padding: 5em 1em;
        min-height: 50vh;
        max-height: 100vh;
        align-items: center;
        justify-content: center;
        pointer-events: none;
    }
    
    .buttery {
        font-family: "NeonSans";
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

    .blinking-chars {
        font-family: "NeonSans";
    }

    .blinking-chars-group .char {
        animation: blink var(--text-animation-speed);
        animation-iteration-count: infinite;
        opacity: 0;
        will-change: opacity;
    }

    .blinking-chars .char:nth-child(1) {
        animation-delay: calc(var(--text-animation-speed) * 0);
    }

    .blinking-chars .char:nth-child(2) {
        animation-delay: calc(var(--text-animation-speed) * 0.2);
    }

    .blinking-chars .char:nth-child(3) {
        animation-delay: calc(var(--text-animation-speed) * 0.4);
    }

    .blinking-chars .char:nth-child(4) {
        animation-delay: calc(var(--text-animation-speed) * 0.6);
    }

    @keyframes blink {
        0%, 100% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
    }
</style>
