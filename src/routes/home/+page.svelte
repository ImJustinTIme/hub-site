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

        <div class="link-map">
            <div class="link-container">
                <LinkButton onClick={() => addModal(gameCorner)}>
                    {"Game Corner"}
                </LinkButton>
            </div>
            <div class="link-container">
                <LinkButton onClick={() => addModal(aboutMe)}
                    >About Me</LinkButton
                >
            </div>
            <div class="link-container">
                <LinkButton onClick={() => addModal(projectsPage)}>
                    {"Projects Page"}
                </LinkButton>
            </div>
            <div class="link-container">
                <LinkButton href="https://justink.photo">
                    Photography & Art
                </LinkButton>
            </div>
            <div class="link-container">
                <LinkButton href="https://blog.codejustin.dev">Blog</LinkButton>
            </div>
        </div>
    </div>
</div>

<style type="scss">
    .page-content {
        height: 100%;
        justify-content: center;
        display: flex;
    }

    .content {
        width: 100%;
        max-width: 90%;
        flex-direction: column;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .link-map {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        margin-bottom: 30px;
        justify-content: center;
        align-items: center;
        padding: 15px;
        gap: 15px;
        border-radius: 15px;
        background: var(--accent-2);
    }

    .link-map > :nth-child(n + 4) {
        grid-column: span 3;
    }

    .link-container {
        display: flex;
        place-content: center;
        grid-column: span 2;
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

        .content {
            justify-content: start;
            gap: 20px;
        }

        .link-map {
            width: 80%;
        }

        .link-container {
            grid-column: span 6;
        }

        .link-map > :nth-child(n + 4) {
            grid-column: span 6;
        }
    }
</style>
