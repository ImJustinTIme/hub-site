<script>
    export let href = null;
    export let onClick = () => null;

    const clickButton = () => {
        if (href) {
            window.location.href = href;
        }

        if (onClick) {
            onClick();
        }
    };
</script>

<button on:click={clickButton} class="link-button"><slot /></button>

<style lang="scss">
    .link-button {
        padding: 10px 30px;
        border-radius: 10px;
        background: var(--accent);
        font-family: "ellograph-cf";
        border: none;
        margin: 10px 0;

        width: var(--buttonWidth, 100%);
        text-align: center;
    }
</style>
