<script>
  import PollAnswerFormField from './PollAnswerFormField.svelte';
  export let answers = [];

  const addAnswer=() => {
    answers = [...answers, {
      text: '',
      color: '#000000',
      votes: 0,
    }];
  };
</script>

<div class="answers">
  {#each answers as answer, index}
    <PollAnswerFormField {answer} {index} addButton={index===answers.length-1} on:addAnswer={addAnswer}/>
  {/each}
</div>
