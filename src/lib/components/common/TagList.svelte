<script>
    import Tag from "Components/common/Tag.svelte";

    /** @type {{title: any, tagList: any}} */
    let { title, tagList } = $props();
</script>

<div class="sidebar" i>
    <h3 class="tag-list-title">{title}</h3>
    <div class="tag-list">
        {#each tagList as tag}
            <Tag Icon={tag.icon} color={tag.color}>{tag.tag}</Tag>
        {/each}
    </div>
</div>

<style lang="scss">
    .tag-list-title {
        margin: 8px 0;
    }

    .tag-list {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 8px;
    }
</style>
