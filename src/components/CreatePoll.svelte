<script>
  import { createEventDispatcher } from 'svelte';
  import { Doc } from 'sveltefire';
  let dispatch = createEventDispatcher();
  import PollAnswerFormField from './PollAnswerFormField.svelte';
  import "firebase/firestore";
  import {v4 as uuid} from 'uuid';

  export let pollsRef;

  let poll = {
    question: ''
  };
  let answers = [
    {
        text: '',
        color: 'primary',
        votes: 0,
      },
      {
        text: '',
        color: 'primary',
        votes: 0,
      }
  ]

  const removeAnswer = (index) => {
    const copyOfAnswers = [...poll.answers];
    copyOfAnswers.splice(index, 1);
    poll.answers = [...copyOfAnswers];
  };
  const addAnswer = () => {
    answers = [
      ...answers,
      {
        text: '',
        color: 'primary',
        votes: 0,
      }
    ];
  }
  const savePoll = (e) => {
    let form = document.getElementById("input-form");
    if(!form.checkValidity()){
      e.stopPropagation();
      form.classList.add('was-validated');
    }else{
      pollsRef.add({...poll, timestamp: Date.now()})
      .then(docRef => Promise.all(answers.map(answer => docRef.collection('answers').add(answer)))
        .then(answerResults => docRef.update({
          'sortkey': answerResults.map(r => r.id)
        })));
      // .then(form.reset)
      // .catch(error => console.error(error));
    }
  }

  $: totalVotes = answers.map(answer => answer.votes).reduce((a,b) => a+b);
  $: percentages = answers
      .map(answer => answer.votes)
      .map(votes => votes / totalVotes * 100);
</script>

<button class="btn btn-outline-primary btn-block" data-toggle="modal" data-target="#createPollModal">
  Create new poll
</button>

<div class="modal fade" id="createPollModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">New Poll</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form class="needs-validation" novalidate id="input-form">
          <div class="form-group">
            <label for="questionField">Question</label>
            <div class="input-group" id="questionField">
              <input type="text" class="form-control" required minlength="3" bind:value={poll.question}>
              <div class="input-group-append">
                <span class="input-group-text">?</span>
              </div>
              <div class="invalid-tooltip">Question needs to be at least 3 characters long</div>
            </div>
          </div>
          {#each answers as answer, index}
            <PollAnswerFormField {answer} {index} addButton={index===answers.length-1} on:addAnswer={addAnswer} on:removeAnswer={removeAnswer}/>
          {/each}
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" on:click|preventDefault={savePoll}>Save changes</button>
      </div>
    </div>
  </div>
</div>

<style>
  /* .percent {
    height: 8px;
  }

  h3{
    margin: 0 auto;
    color: #555;
  }
  p{
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
  }
  .answer{
    background: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
  }
  .answer:hover{
    opacity: 0.6;
  }
  span{
    display: inline-block;
    padding: 10px 20px;
  } */
</style>