<script>
    import PictureCard from "Components/common/PictureCard.svelte";
    import Modal from "Components/modals/Modal.svelte";
    import { projectsPageContentArr } from "Constants/modal-values.js";
    /**
     * @type {number}
     */
    export let index;
</script>

<Modal {index}>
    <h2 slot="header">Projects Page</h2>
    <div class="project-list">
        {#each projectsPageContentArr as project}
            <PictureCard
                --picWidth={"30rem"}
                --picMaxHeight={"300px"}
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
