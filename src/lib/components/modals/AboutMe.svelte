<script>
    import Modal from "./Modal.svelte";

    export let index;
</script>

<Modal {index}>
    <h2 slot="header">About Justin Kuennen</h2>
    <div class="about-me-content">
        <img alt="Photo Of Me" src="/justink.jpg" />
        <div></div>
    </div>
</Modal>

<style lang="scss">
    h2 {
        margin: 0;
        line-height: 1;
        margin-bottom: -2px;
    }

    .about-me-content {
        width: 70vw;
    }
</style>
