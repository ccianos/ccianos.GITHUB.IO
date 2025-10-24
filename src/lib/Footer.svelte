<script>
    const currentYear = new Date().getFullYear();
</script>

<footer id="footer" class="aurora-footer">
    <p class="footer-font">Copyright &copy; <span>{currentYear}</span> Charles Cianos. All Rights Reserved</p>
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
    }

    .footer-font {
        font-family: "BubblezGraffiti";
        font-size: 1em;
    }

    footer {
        border-top: 1px;
        margin-top: 1rem;
        margin-left: -1em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    #footer {
        position: fixed;
        left: auto;
        bottom: 0;
        /*height: 94vh;
        width: 7vw;*/
        height: 10vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    .aurora-footer {
       background: linear-gradient(
       var(--color-bg-primary),
       var(--color-bg-secondary),
       var(--color-bg-tertiery)
        );
    }
</style>
