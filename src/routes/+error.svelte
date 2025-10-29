<script>
    import { page } from '$app/state';
</script>


<div class="error">
    <h1>{page.status}</h1>
    <h2>{page.error.message}</h2>
    <p>Shhh... Nothing to see here!</p>
</div>

<div class="byterep-container blinking">
    <embed src="/error/rofp.txt" type="text/plain">
</div>

<style>
    :root {
        --text-animation-speed: 5s;
    }

    div {
        margin: 0 auto;
    }

    .error {
        font-size: 18px;
        margin-top: 10px;
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
    }

    embed {
        width: 600px;
        height: 840px;
        overflow: hidden;
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
</style>
