<script>
    import TagList from "Components/common/TagList.svelte";
    import Modal from "./Modal.svelte";
    import {
        experiencedTechTagList,
        exploringTechTagList,
        hobbyTagList,
    } from "Constants/tag-list-constants.js";

    export let index;
</script>

<Modal {index}>
    <h2 slot="header">About Justin Kuennen</h2>
    <div class="modal-content">
        <div class="pic-section">
            <img src="/justink.jpg" alt="photo of me" />
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
    .modal-content {
        padding: 15px;
    }

    img {
        width: 50%;
        height: auto;
        border-radius: 15px;
    }

    .skill-section {
        border-radius: 15px;
        width: 100%;
        justify-content: end;
        display: flex;
        flex-direction: column;
    }

    .pic-section {
        display: flex;
        flex-direction: columns;
        align-content: end;
        gap: 20px;
        margin-bottom: 30px;
        align-content: end;
    }

    .about-me-paragraph {
        border-radius: 15px;
        padding: 20px 0;
    }
</style>
