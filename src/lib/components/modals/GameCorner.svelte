<script>
  import Modal from "Components/modals/Modal.svelte";
  import { gameCornerContentArr } from "Utils/modal-values.svelte";
  /**
   * @type {number}
   */
  export let index;

  gameListArr = gameCornerContentArr;
</script>

<Modal {index}>
  <h2 slot="header">Game Corner</h2>
  <div class="game-corner-content">This is testing to make sure it works</div>
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
</style>
