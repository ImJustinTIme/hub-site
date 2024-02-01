<script>
    export let Icon;
    export let color;
</script>

<div class="tag-pill" style={`background: ${color || "#818a91"};`}>
    {#if Icon}
        <svelte:component this={Icon} />
    {/if}
    <div>
        <slot />
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
