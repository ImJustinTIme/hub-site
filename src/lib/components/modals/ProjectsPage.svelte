<script>
    import PictureCard from "Components/common/PictureCard.svelte";
    import Modal from "Components/modals/Modal.svelte";
    import { projectsPageContentArr } from "Constants/modal-values.js";
    
    /** @type {{index: number}} */
    let { index } = $props();
</script>

<Modal {index}>
    {#snippet header()}
        <h2 >Projects Page</h2>
    {/snippet}
    <div class="project-list">
        {#each projectsPageContentArr as project}
            <PictureCard
                --picWidth={"30rem"}
                --picMaxHeight={"300px"}
                --buttonWidth={"80%"}
                --imgFit={project.imgFit || "cover"}
                {...project}
            />
        {/each}
    </div>
</Modal>

<style lang="scss">
    .project-list {
        display: flex;
        flex-direction: column;
    }
</style>
