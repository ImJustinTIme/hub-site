<script>
    import { run, self, createBubbler, stopPropagation } from 'svelte/legacy';

    const bubble = createBubbler();
    import { removeModal } from "Utils/modal-utils";
    
    /** @type {{index: number, header?: import('svelte').Snippet, children?: import('svelte').Snippet}} */
    let { index, header, children } = $props();
    /**
     * @type {HTMLDialogElement}
     */
    let dialog = $state();

    run(() => {
        if (dialog) dialog.showModal();
    });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog
    bind:this={dialog}
    onclose={removeModal}
    onclick={self(() => dialog.close())}
    {index}
>
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div onclick={stopPropagation(bubble('click'))}>
        <div class="header-bar">
            {@render header?.()}
            <img
                class="close-icon"
                src="/close.svg"
                alt="close-icon"
                onclick={() => dialog.close()}
            />
        </div>
        <hr />
        <div class="modal-content">
            {@render children?.()}
        </div>
    </div>
</dialog>

<style>
</style>
