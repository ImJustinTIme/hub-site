<script>
    import TagList from "Components/common/TagList.svelte";
    import Modal from "./Modal.svelte";
    import {
        experiencedTechTagList,
        exploringTechTagList,
        hobbyTagList,
    } from "Constants/tag-list-constants.js";

    /** @type {{index: any}} */
    let { index } = $props();
</script>

<Modal {index}>
    {#snippet header()}
        <h2 >About Justin Kuennen</h2>
    {/snippet}
    <div class="about-me-content">
        <div class="pic-section">
            <img src="/justink.jpg" alt="me in a bedroom" />
            <div class="skill-section">
                <TagList
                    title={experiencedTechTagList.title}
                    tagList={experiencedTechTagList.tags}
                />

                <TagList
                    title={exploringTechTagList.title}
                    tagList={exploringTechTagList.tags}
                />
                <TagList
                    title={hobbyTagList.title}
                    tagList={hobbyTagList.tags}
                />
            </div>
        </div>
        <div class="about-me-paragraph">
            Hey! I am a Full Stack Senior Developer based in Iowa! Glad to have
            you here to look at some of the creative work I have done. Besides
            my main job I do a lot of side hobby's like photography and
            painting. I am currently working at QCI in West Des Moines, working
            with John Deere on the Onlink Project. Thank for stopping by!
        </div>
    </div>
</Modal>

<style lang="scss">
    .about-me-content {
        padding: 15px;
    }
    img {
        width: 30rem;
        max-height: 400px;
        border-radius: 15px;
        object-fit: cover;
    }

    .skill-section {
        width: 100%;
        justify-content: end;
        display: flex;
        flex-direction: column;
    }

    .pic-section {
        display: flex;
        align-content: end;
        gap: 20px;
        margin-bottom: 30px;
        align-content: end;
    }

    .about-me-paragraph {
        padding: 20px 0;
    }

    @media (max-width: 1000px) {
        img {
            width: 85%;
            margin: 30px;
            align-self: center;
        }

        .pic-section {
            padding: 15px;
            flex-direction: column;
            margin-bottom: 10px;
        }
        .about-me-paragraph {
            padding: 15px;
        }
    }
</style>
