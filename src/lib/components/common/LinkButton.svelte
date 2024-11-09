<script>
    /** @type {{href?: any, onClick?: any, children?: import('svelte').Snippet}} */
    let { href = null, onClick = () => null, children } = $props();

    const clickButton = () => {
        if (href) {
            window.location.href = href;
        }

        if (onClick) {
            onClick();
        }
    };
</script>

<button onclick={clickButton} class="link-button">{@render children?.()}</button>

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
