<script>
  import AnswerDetail from './AnswerDetail.svelte';
  import {Collection} from 'sveltefire';
  export let poll;

  const removePoll = () => poll.ref.delete();

  // reactive values
  $: totalVotes = poll.ref.collection('answers').get().map(answer => answer.votes).reduce((a,b) => a+b);
</script>

<div class="card">
  <div class="card-header d-flex justify-content-between align-items-center">
    <h5 class="card-title">{poll.question}</h5>
    <h5 class="badge badge-primary badge-pill">{totalVotes}</h5>
    <!-- <h5>hi there {poll.ref}</h5> -->
  </div>
  <div class="card-body">
    <div class="list-group">
      <Collection path={poll.ref.collection('answers')} let:data={answers} let:ref={answerRef}>
        {#each answers as answer}
          <AnswerDetail {answer} {totalVotes} {answerRef}/>
        {/each}
      </Collection>
    </div>
  </div>
  <div class="card-footer">
    <button class="btn btn-danger" on:click={removePoll}>Remove Poll</button>
  </div>
</div>