<script>
    import LinkButton from "Components/common/LinkButton.svelte";
    import { addModal } from "Utils/modal-utils";
    import { gameCorner, aboutMe } from "Constants/modal-values";
</script>

<div class="page-content">
    <div class="content">
        <div class="titlebar">
            <span class="title">codejustin.dev</span>
            <LinkButton onClick={() => addModal(gameCorner)}
                >Open Game Corner</LinkButton
            >
            <LinkButton onClick={() => addModal(aboutMe)}>About Me</LinkButton>
        </div>
        <div class="interactive-map" />
    </div>
</div>

<style type="scss">
    .page-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: end;
        height: 2fr;
    }

    .content {
        width: 100%;
        max-width: 90%;
    }

    .interactive-map {
        border-radius: 30px;
        margin: 20px 20px 40px 20px;
        background: var(--primary);
        height: 70vh;
    }

    .title {
        font-size: 4rem;
        font-weight: 600;
    }
</style>
