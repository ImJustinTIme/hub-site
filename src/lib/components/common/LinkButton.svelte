<script>
    export let href;
</script>

<button {href} class="link-button"><slot /></button>

<style lang="scss">
    .link-button {
        padding: 10px 30px;
        border-radius: 10px;
        background: var(--accent);
        font-family: "ellograph-cf";
        border: none;
        margin: 10px;
    }
</style>
