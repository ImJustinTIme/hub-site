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
        {#each projectsPageContentArr as project}
            <PictureCard {...project} />
        {/each}
    </div>
</Modal>

<style lang="scss">
</style>
