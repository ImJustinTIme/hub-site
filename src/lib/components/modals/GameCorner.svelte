<script>
    import PictureCard from "Components/common/PictureCard.svelte";
    import Modal from "Components/modals/Modal.svelte";
    import { gameCornerContentArr } from "Utils/modal-values.js";
    /**
     * @type {number}
     */
    export let index;
</script>

<Modal {index}>
    <h2 slot="header">Game Corner</h2>
    <div class="game-corner-content"></div>
    <div class="game-content-selection">
        {#each gameCornerContentArr as game}
            <PictureCard {...game} />
        {/each}
    </div>
</Modal>

<style lang="scss">
    h2 {
        margin: 0;
        line-height: 1;
        margin-bottom: -2px;
    }

    .game-corner-content {
        width: 70vw;
    }

    .game-content-selection {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 0.5fr 0.5fr;
    }

    @media (max-width: 1200px) {
        .game-content-selection {
            grid-template-columns: 1fr;
        }
    }
</style>
