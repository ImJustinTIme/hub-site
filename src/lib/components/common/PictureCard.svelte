<script>
    export let appLink, alt, imgSrc, descriptionText, srcLink, title;
</script>

<div class="card-container">
    <a href={appLink}>
        <img src={imgSrc} {alt} />
    </a>
    <div>
        <h3>{title}</h3>
        <div>{descriptionText}</div>
        <button href={appLink}>View</button>
        <button href={srcLink}>Code</button>
    </div>
</div>

<style lang="scss">
    .card-container {
        display: grid;
        grid-template-rows: 2fr 2fr;
        grid-template-columns: 3fr 1fr;
    }
</style>
