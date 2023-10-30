<script>
  //
  import { closeModal, processModal } from "$lib/stores/index";
  export let buttonOptions;

  //
  export let title;
</script>

<div class="modal-container">
  <!--content-->
  <div class="modal-content">
    <!--header-->
    <div
      class="modal-header flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"
    >
      <h3 class="modal-title text-3xl text-gray-600 font-semibold">
        {title}
      </h3>
      <button
        class="modal-close p-1 ml-auto bg-transparent border-0 text-gray-500 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
        on:click={$closeModal()}
      >
        <span
          class="bg-transparent text-gray-500 opacity-4 h-6 w-6 text-2xl block outline-none focus:outline-none"
        />
      </button>
    </div>
    <!--body-->
    <div class="relative p-6 flex-auto">
      <slot />
    </div>
  </div>
</div>
<div class="opacity-25 fixed inset-0 z-40 bg-black" />

<style lang="scss">
  .modal-container {
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 50;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
  }

  .modal-title {
  }

  .modal-close {
  }
</style>
