<script>
  export let user = {};
  export let auth = {};

  $: userName = user.isAnonymous ? 'Anonymous' : user.displayName;
</script>


<header>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <span class="navbar-brand">Polly</span>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- {JSON.stringify(user)}
    {isLoggedIn} -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <span class="nav-text">Hi {userName}</span>
          </li>
          <li class="nav-item"></li>
          <!-- {#each items as item}
            <li class="nav-item" class:active={activeItem===item} on:click={() => tabChange(item)}>
              <span class="nav-link">{item}</span>
            </li>
          {/each} -->
        </ul>
        <button class="btn btn-outline-light" on:click={() => auth.signOut()}>
          Sign out
        </button>
      </div>
  </nav>
</header>