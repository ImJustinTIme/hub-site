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
    <div class="game-array">
        {#each gameCornerContentArr as game}
            <div class="game-item">
                <PictureCard {...game} />
            </div>
        {/each}
    </div>
</Modal>

<style lang="scss">
    .game-array {
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(2, 1fr);
        height: 100%;

        .game-item {
            display: grid;
            place-content: center;
        }
    }

    @media (max-width: 1200px) {
    }
</style>
