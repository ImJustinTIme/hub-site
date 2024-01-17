<script>
    import LinkButton from "Components/common/LinkButton.svelte";
    import { addModal } from "Utils/modal-utils";
    import { gameCorner, aboutMe, projectsPage } from "Constants/modal-values";
</script>

<div class="page-content">
    <div class="content">
        <div class="titlebar">
            <span class="title">codejustin.dev</span>
        </div>

        <div class="interactive-map">
            <LinkButton onClick={() => addModal(gameCorner)}>
                {"Open Game Corner"}
            </LinkButton>
            <LinkButton onClick={() => addModal(aboutMe)}>About Me</LinkButton>
            <LinkButton onClick={() => addModal(projectsPage)}>
                {"Projects Page"}
            </LinkButton>
            <LinkButton href="https://justink.photo">
                Photography & Art
            </LinkButton>
            <LinkButton href="https://blog.codejustin.dev">Blog</LinkButton>
        </div>
    </div>
</div>

<style type="scss">
    .page-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: end;
    }

    .content {
        width: 100%;
        max-width: 90%;
    }

    .interactive-map {
        border-radius: 30px;
        margin: 20px 20px 40px 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .titlebar {
        display: flex;
    }

    .title {
        font-size: 4rem;
        font-weight: 600;
    }

    @media (max-width: 1000px) {
        .title {
            font-size: 2rem;
            margin: 15px 0 10px 0;
        }
    }
</style>
