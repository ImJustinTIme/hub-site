<script>
    import { modals } from "Stores/index.js";
    /** @type {{children?: import('svelte').Snippet}} */
    let { children } = $props();

    /**
     * @type {any[]}
     */
    let modalArr = $state([]);
    

    modals.subscribe((value) => {
        modalArr = value;
    });
</script>

<!-- <button on:click={() => (showModal = true)}> show modal </button> -->
{#each modalArr as modalComponent, index}
    {@const SvelteComponent = modalComponent}
    <SvelteComponent {index} />
{/each}

{@render children?.()}

<footer>
    <a href="https://github.com/ImJustinTIme"> Github </a>
    <a href="https://ko-fi.com/justinintime"> Kofi </a>
</footer>

<style type="scss">
    footer {
        padding: 20px 20px 15px 20px;
        background-color: var(--accent);
        display: flex;
        justify-content: center;
        gap: 10px;
    }
</style>
