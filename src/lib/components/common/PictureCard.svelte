<script>
    import LinkButton from "./LinkButton.svelte";

    export let appLink = null;
    export let alt;
    export let imgSrc;
    export let descriptionText;
    export let srcLink;
    export let title;
</script>

<div class="card-container">
    <a href={appLink}>
        <div class="stock-img">
            {#if imgSrc}
                <img src={imgSrc} {alt} />
            {/if}
        </div>
    </a>
    <div class="card-text">
        <div>
            <h3>{title}</h3>
            <div class="description-text">{descriptionText}</div>
        </div>
        <div class="button-link-area">
            {#if appLink}
                <LinkButton href={appLink}>Play</LinkButton>
            {/if}
            {#if srcLink}
                <LinkButton href={srcLink}>View Code</LinkButton>
            {/if}
        </div>
    </div>
</div>

<style lang="scss">
    a {
        padding: 10px;
    }

    img {
        max-height: 100%;
        width: 100%;
        height: 100%;
        max-width: 100%;
        border-radius: 15px;
        object-fit: cover;
    }

    .stock-img {
        width: 18rem;
        height: 100%;
        background: #1f1f1f;
        border-radius: 15px;
        display: inline-block;
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
        display: flex;
        min-height: 300px;

        height: 100%;
    }

    .button-link-area {
        display: flex;
        width: 100%;
        align-items: stretch;
        gap: 10px;
    }

    @media (max-width: 1200px) {
        .card-container {
            margin: 0;
            max-width: 99%;
            flex-direction: column;
        }

        .stock-img {
            width: 100%;
            min-height: 200px;
            max-height: 200px;
        }

        .card-text {
            margin-bottom: 20px;
        }

        h3 {
            margin: 6px 0;
        }

        a {
            padding: 5px 10px 2px 10px;
        }
    }
</style>
