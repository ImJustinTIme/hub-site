<script>
    /** @type {{Icon: any, color: any, children?: import('svelte').Snippet}} */
    let { Icon, color, children } = $props();
</script>

<div class="tag-pill" style={`background: ${color || "#818a91"};`}>
    {#if Icon}
        <Icon />
    {/if}
    <div>
        {@render children?.()}
    </div>
</div>

<style lang="scss">
    .tag-pill {
        padding: 1px 8px;
        border-radius: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        width: fit-content;
        color: #fff;
        font-size: 11px;
    }
</style>
