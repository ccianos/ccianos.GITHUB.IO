<header aria-label="Main Navigation" class="aurora-header">
    <a class="buttery logo-font" href="/">HUMACADO</a>
    <ul class="nav-font">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/blog">Blog</a></li>
    </ul>
</header>

<style>
    @font-face {
        font-family: "BubblezGraffiti";
        font-style: normal;
        font-weight: 900;
        src: url(assets/fonts/bubblez_graffiti/BubblezGraffiti-Regular.ttf) format("truetype");
    }

    :root {
        --color-bg-primary: #290e00; /* #290e00 Chocolate Melange (Coffee Shop Palette Color Palette https://www.color-hex.com/color-palette/13328) */
        --color-bg-secondary: #080029; /* #080029 Erebus Blue (https://icolorpalette.com/color/080029) */
        --color-bg-tertiery: #00290f; /* #00290f Clock Chimes Thirteen (https://icolorpalette.com/color/00290f) */
        --color-secondary: #ee6084; /* Jellyfish Sting (Coffee Shop Palette Color Palette https://www.color-hex.com/color-palette/13328) */
        --color-borders: #7e4000; /* Hazelnut Chocolate (Coffee Shop Palette Color Palette https://www.color-hex.com/color-palette/13328) */
        --color-buttery-1: #c38e6a; /* Shiracha Brown (Coffee shop Color Palette https://www.color-hex.com/color-palette/3533) */
        --color-buttery-2:	#b8b17b; /* Leek Powder (Coffee shop Color Palette https://www.color-hex.com/color-palette/3533) */
        --color-buttery-3: #b8855c; /* Vermicelles (Coffee shop Color Palette https://www.color-hex.com/color-palette/3533) */
    }

    ul {
        list-style: none;
        display: flex;
        flex-direction: row;
    }

    a {
        text-decoration: none;
        padding: 1em;
        margin: 0;
        text-decoration: underline;
        box-shadow: 0 0 0px 0px rgba(52, 152, 219, 0.8);
        border-radius: 0%;
        transition: box-shadow 1.0s ease-in-out,
            border-radius 1.0s ease-out;
    }

    a:hover,
    a:focus,
    a:active {
        outline: dotted 5px var(--color-secondary);
        box-shadow: 0 0 15px 5px rgba(52, 152, 219, 0.8);
        border-radius: 30%;
    }

    .nav-font {
        font-family: "BubblezGraffiti";
        font-size: 20px;
    }

    .logo-font {
        font-family: "BubblezGraffiti";
        font-size: 40px;
        justify-self: start;
    }

    header {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        border-bottom: 1px solid var(--color-borders);
        width: 100%;
        margin-bottom: 1rem;
        padding: 20px 1.5em;
    }

    .aurora-header {
       background: linear-gradient(
           var(--color-bg-tertiery),
           var(--color-bg-secondary),
           var(--color-bg-primary)
       );
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
</style>
