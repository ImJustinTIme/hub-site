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
        <div class="game-content-selection">
            {#each projectsPageContentArr as project}
                <PictureCard {...project} />
            {/each}
        </div>
    </div>
</Modal>

<style lang="scss">
    .game-content-selection {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
    }

    @media (max-width: 1200px) {
        .game-content-selection {
            grid-template-columns: 1fr;
        }
    }
</style>
