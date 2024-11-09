<script>
    import "Styles/app.scss";
    import "Styles/modal.scss";
    /** @type {{children?: import('svelte').Snippet}} */
    let { children } = $props();
</script>

{@render children?.()}
