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
        {#if imgSrc}
            <img src={imgSrc} {alt} />
        {:else}
            <div class={"stock-img"} />
        {/if}
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
        max-width: 15rem;
        height: 100%;

        border-radius: 15px;
        object-fit: cover;
    }

    .stock-img {
        width: 15rem;
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
        display: flex;
        min-height: 300px;
    }

    .button-link-area {
        display: flex;
        width: 100%;
        align-items: stretch;
        gap: 10px;
    }

    @media (max-width: 1000px) {
        .card-container {
            margin: 0;
            flex-direction: column;
        }

        a {
            width: 100%;
            min-width: 200px;
            min-height: 200px;
        }

        .stock-img {
            width: 100%;
            min-width: 200px;
            min-height: 200px;
        }

        .card-text {
            margin-bottom: 20px;
        }

        .description-text {
            max-width: 100%;
        }

        h3 {
            margin: 6px 0;
        }

        a {
            padding: 5px 10px 2px 10px;
        }
    }
</style>
