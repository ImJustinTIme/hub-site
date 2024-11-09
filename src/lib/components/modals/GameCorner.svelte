<script>
    import PictureCard from "Components/common/PictureCard.svelte";
    import Modal from "Components/modals/Modal.svelte";
    import { gameCornerContentArr } from "Constants/modal-values.js";
    
    /** @type {{index: number}} */
    let { index } = $props();
</script>

<Modal {index}>
    {#snippet header()}
        <h2 >Game Corner</h2>
    {/snippet}
    <div class="game-array">
        {#each gameCornerContentArr as game}
            <div class="game-item">
                <PictureCard --buttonWidth={"100%"} {...game} />
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
    }

    .game-item {
        grid-column: span 1;
    }
</style>
