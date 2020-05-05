<script>
  import PollStore from '../stores/PollStore';

  export let answer;
  export let totalVotes = 0;
  export let answerRef;

  $: percent = answer.votes / totalVotes * 100;

  const vote = () => {
    answerRef.update({
      votes: answer.votes + 1
    });
  }
</script>

<button class="list-group-item list-group-item-action" on:click={vote}>
  <div class="d-flex justify-content-between align-items-center">
    <h5>{answer.text}</h5>
    <div class="badge badge-pill badge-{answer.color}" >{answer.votes}</div>
  </div>
  <div class="progress">
    <div class="progress-bar progress-bar-striped bg-{answer.color}" style="width: {percent}%"></div>
  </div>
</button>