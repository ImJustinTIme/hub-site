<script>
    import Tag from "Components/common/Tag.svelte";

    export let title;
    export let tagList;
</script>

<div class="sidebar">
    <div class="tag-list-title">{title}</div>
    <div class="tag-list">
        {#each tagList as tag}
            <Tag Icon={tag.icon} color={tag.color}>{tag.tag}</Tag>
        {/each}
    </div>
</div>

<style lang="scss">
    .tag-list-title {
        margin: 5px 0;
    }

    .tag-list {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
    }
</style>
