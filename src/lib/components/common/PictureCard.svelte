<script>
    import LinkButton from "./LinkButton.svelte";

    export let appLink;
    export let alt;
    export let imgSrc;
    export let descriptionText;
    export let srcLink;
    export let title;
</script>

<div class="card-container">
    <a href={appLink}>
        {#if imgSrc}
            <img src={imgSrc} {alt} />
        {:else}
            <div class={"stock-img"} />
        {/if}
    </a>
    <div class="card-text">
        <div>
            <h3>{title}</h3>
            <div>{descriptionText}</div>
        </div>
        <div class="button-link-area">
            <LinkButton href={appLink}>View</LinkButton>
            <LinkButton href={srcLink}>Code</LinkButton>
        </div>
    </div>
</div>

<style lang="scss">
    a {
        padding: 10px;
        max-height: 300px;
        min-width: 400px;
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 15px;
    }

    .stock-img {
        width: 100%;
        height: 100%;
        background: #1f1f1f;
        border-radius: 15px;
    }
    h3 {
        margin-top: 5px;
    }
    .card-text {
        padding: 0 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .card-container {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr;
        margin: 10px;
        min-height: 300px;
    }

    .button-link-area {
        display: flex;
        width: 100%;
    }
</style>
