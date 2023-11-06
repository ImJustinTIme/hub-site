<script>
    import { addModal } from 'Utils/modal-utils';
    import { gameCorner } from 'Utils/modal-values';

</script>

<div class="page-content">
    <div class="content">
        <div class="titlebar">
            <span class="title">codejustin.dev</span>
            <button
                on:click={() => addModal(gameCorner)}
            >Open Game Corner</button>
            <div class="extra-info" />
        </div>
        <div class="interactive-map" />
    </div>
</div>

<style type="scss">
  .page-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content {
    width: 100%;
    max-width: 90%;
  }

  .interactive-map {
    border-radius: 30px;
    margin: 20px 20px 40px 20px;
    background: var(--primary);
    height: 80vh;
  }

  .titlebar {
    margin: 60px 40px 0 40px;
  }

  .title {
    background: linear-gradient(120deg, var(--primary), var(--accent));
    background-clip: text;
    font-size: 4rem;
    font-weight: 600;
    fill: transparent;
  }
</style>
