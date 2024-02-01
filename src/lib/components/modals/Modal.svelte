<script>
    import { removeModal } from "Utils/modal-utils";
    /**
     * @type {number}
     */
    export let index;
    /**
     * @type {HTMLDialogElement}
     */
    let dialog;

    $: if (dialog) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
    bind:this={dialog}
    on:close={removeModal}
    on:click|self={() => dialog.close()}
    {index}
>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:click|stopPropagation>
        <div class="header-bar">
            <slot name="header" />
            <img
                class="close-icon"
                src="/close.svg"
                alt="close-icon"
                on:click={() => dialog.close()}
            />
        </div>
        <hr />
        <div class="modal-content">
            <slot />
        </div>
    </div>
</dialog>

<style>
</style>
