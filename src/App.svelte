<script>
	import { FirebaseApp, User, Doc, Collection } from 'sveltefire';

	import "firebase/firestore";
  import "firebase/auth";
  import "firebase/performance";
  import "firebase/analytics";

	export let firebase;
	console.log('Got firebase', firebase);

	// import PollStore from './stores/PollStore';
	import Header from './components/Header.svelte';
	import HeaderLoggedOut from './components/HeaderLoggedOut.svelte';
	import CreatePoll from './components/CreatePoll.svelte';
	import ListPolls from './components/ListPolls.svelte';
	// import {v4 as uuid} from 'uuid';

	// let items = [ 'Polls'];
	// let activeItem = items[0];
	// const handleRemove = (e) =>{
	// 	const poll = e.detail;
	// 	PollStore.update(polls => polls.filter(p => p.id !== poll.id));
	// };

</script>
<div class="container mx-auto">
	<FirebaseApp {firebase}>
    <!-- 2. 😀 Get the current user -->
    <User let:user let:auth>

			<Header {user} {auth} />

			<Collection
          path='polls'
          query={ref => ref.limit(3)}
          let:data={polls}
          let:ref={pollsRef}
          log>

				<CreatePoll {pollsRef} />

				<ListPolls {polls}/>
			</Collection>


      <!-- 3. 📜 Get a Firestore document owned by a user -->
      <Doc path={`polls/${user.uid}`} let:data={post} let:ref={postRef} log>

        <h2>{post.title}</h2>

        <p>
          Document
          created at <em>{new Date(post.createdAt).toLocaleString()}</em>
        </p>

        <span slot="loading">Loading post...</span>
        <span slot="fallback">
          <button
            on:click={() => postRef.set({
                title: '📜 I like Svelte',
                createdAt: Date.now()
              })}>
            Create Document
          </button>
        </span>

        <!-- 4. 💬 Get all the comments in its subcollection -->

        <h3>Comments</h3>
        <Collection
          path={postRef.collection('comments')}
          query={ref => ref.orderBy('createdAt')}
          let:data={comments}
          let:ref={commentsRef}
          log>

          {#if !comments.length}
              No comments yet...
          {/if}

          {#each comments as comment}
            <p>
              <!-- ID: <em>{comment.ref.id}</em> -->
            </p>
            <p>
              {comment.text}
              <button on:click={() => comment.ref.delete()}>Delete</button>
            </p>
          {/each}


          <button
            on:click={() => commentsRef.add({
                text: '💬 Me too!',
                createdAt: Date.now()
              })}>
            Add Comment
          </button>

          <span slot="loading">Loading comments...</span>

        </Collection>
      </Doc>
    </User>
	</FirebaseApp>
	<!-- <Header {items} bind:activeItem={activeItem}/>
	<main>
		<div class="container">
			<div class="row mt-4">
				<div class="col">
					<CreatePoll/>
				</div>
			</div>
			<ListPolls on:removePoll={handleRemove}/>
		</div>
	</main> -->
</div>
