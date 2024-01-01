<script>
    import { modals } from "Stores/index.js";

    /**
     * @type {any[]}
     */
    $: modalArr = [];

    modals.subscribe((value) => {
        modalArr = value;
    });
</script>

<!-- <button on:click={() => (showModal = true)}> show modal </button> -->
{#each modalArr as modalComponent, index}
    <svelte:component this={modalComponent} {index} />
{/each}

<slot />

<footer>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/settings">Settings</a>
</footer>

<style type="scss">
    footer {
        padding: 20px 20px 15px 20px;
        background-color: var(--accent);
    }
</style>
