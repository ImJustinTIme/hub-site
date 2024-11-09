<script>
    import LinkButton from "./LinkButton.svelte";

    /** @type {{appLink?: any, alt: any, imgSrc: any, descriptionText: any, srcLink: any, title: any}} */
    let {
        appLink = null,
        alt,
        imgSrc,
        descriptionText,
        srcLink,
        title
    } = $props();
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
            {#if srcLink}
                <LinkButton href={srcLink}>View Code</LinkButton>
            {/if}
        </div>
    </div>
</div>

<style lang="scss">
    a {
        padding: 10px;
        max-height: var(--picMaxHeight, unset);
    }

    img {
        max-height: inherit;
        width: 100%;
        height: 100%;
        max-width: 100%;
        border-radius: 15px;
        box-shadow:
            0 5px 10px rgba(154, 160, 185, 0.05),
            0 15px 40px rgba(166, 173, 201, 0.2);

        object-fit: var(--imgFit, cover);
    }

    .stock-img {
        width: var(--picWidth, 18rem);
        height: 100%;
        background: #1f1f1f;
        border-radius: 16px;
        display: inline-block;
        box-shadow:
            0 5px 10px rgba(154, 160, 185, 0.05),
            0 15px 40px rgba(166, 173, 201, 0.2);
    }
    h3 {
        margin-top: 5px;
    }
    .card-text {
        padding: 10px 10px 0 10px;
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
        justify-content: center;
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

        img {
            min-height: 200px;
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
