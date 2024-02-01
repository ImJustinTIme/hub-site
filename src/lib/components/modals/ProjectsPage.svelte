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
    <div class="modal-content">
        <div class="project-list">
            {#each projectsPageContentArr as project}
                <PictureCard {...project} />
            {/each}
        </div>
    </div>
</Modal>

<style lang="scss">
    .project-list {
        height: 100%;
    }
</style>
