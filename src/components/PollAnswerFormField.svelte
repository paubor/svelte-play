<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  export let answer = {};
  export let index = 0;
  export let addButton = false;
</script>

<div class="form-group" >
  <label for="answer{index}">Answer {index+1}</label>
    <div class="form-group"  id="answer{index}">
      <div class="input-group">
        <input type="text" class="form-control" required minlength="1" bind:value={answer.text}>
        <select type="custom-select" class="bg-{answer.color}" bind:value={answer.color}>
          <option value="primary" class="bg-primary">Blue</option>
          <option value="danger" class="bg-danger">Red</option>
          <option value="success" class="bg-success">Green</option>
          <option value="info" class="bg-info">Blueish</option>
          <option value="warning" class="bg-warning">Yellow</option>
        </select>
        <div class="invalid-tooltip">Answer {index+1} needs to be at least one character long.</div>
        <div class="input-group-append">
          <button type="button" class="btn btn-outline-danger" on:click|preventDefault={() => dispatch('removeAnswer', index)}>
            <span>&times;</span>
          </button>
        </div>
      </div>
  </div>
  {#if addButton}
      <div class="form-group">
        <button class="btn btn-outline-primary btn-block" on:click={() => dispatch('addAnswer', null)}>add answer</button>
      </div>
    {/if}
</div>