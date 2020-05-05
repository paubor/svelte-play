<script>
  import PollDetail from './PollDetail.svelte';
  export let polls;
</script>

{#each polls as poll}
  <!-- <div class="row mt-4">
    {#each pollChunk as poll (poll.id)}
      <div class="col"> -->

        <PollDetail {poll}/>
      <!-- </div>
    {/each}
  </div> -->
{/each}

<style>
</style>

