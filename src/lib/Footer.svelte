<script>
    const currentYear = new Date().getFullYear();
</script>

<footer class="aurora-footer">
    <p class="footer-font">Copyright &copy; <span>{currentYear}</span> Charles Cianos. All Rights Reserved.</p>
</footer>

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
        --color-borders: #7e4000; /* Hazelnut Chocolate (Coffee Shop Palette Color Palette https://www.color-hex.com/color-palette/13328) */
    }

    .footer-font {
        font-family: "BubblezGraffiti";
        font-size: 1em;
        margin: 0;
    }

    footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-top: 1px solid var(--color-borders);
        width: 100%;
        margin-top: 1rem;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .aurora-footer {
       background: linear-gradient(
            var(--color-bg-primary),
            var(--color-bg-secondary),
            var(--color-bg-tertiery)
        );
    }
</style>
