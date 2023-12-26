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
>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:click|stopPropagation>
        <div class="header-bar">
            <slot name="header" />
            <img
                class="close-icon"
                src="/close.svg"
                alt="close-icon"
                on:click={dialog.close()}
            />
        </div>
        <hr />
        <div class="modal-content">
            <slot />
        </div>
    </div>
</dialog>

<style>
    .header-bar {
        display: flex;
        justify-content: space-between;
        padding: 8em 10px 15px 10px;
        align-items: center;
        background-color: var(--accent);
    }

    .close-icon {
        height: auto;
        width: 24px;
        margin: 0;
    }

    .modal-content {
        padding: 10px;
    }

    dialog {
        min-width: 70%;
        max-width: 90%;
        border-radius: 10px;
        border: none;
        padding: 0;
        margin-top: 7%;
    }

    dialog::backdrop {
        background: var(--primary);
    }

    hr {
        margin: 0;
    }

    dialog[open] {
        animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    @keyframes zoom {
        from {
            transform: scale(0.95);
        }
        to {
            transform: scale(1);
        }
    }
    dialog[open]::backdrop {
        animation: fade 0.2s ease-out;
    }
    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>

