<script>
    import PictureCard from "Components/common/PictureCard.svelte";
    import Modal from "Components/modals/Modal.svelte";
    import { gameCornerContentArr } from "Constants/modal-values.js";
    /**
     * @type {number}
     */
    export let index;
</script>

<Modal {index}>
    <h2 slot="header">Game Corner</h2>
    <div class="modal-content">
        <div class="game-array">
            {#each gameCornerContentArr as game}
                <PictureCard {...game} />
            {/each}
        </div>
    </div>
</Modal>

<style lang="scss">
    .game-array {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 0.5fr 0.5fr;
    }

    @media (max-width: 1200px) {
        .game-array {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
        }
    }
</style>
