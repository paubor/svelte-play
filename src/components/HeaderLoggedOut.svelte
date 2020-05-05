<script>
  export let auth = {};
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
          <li>
            
          </li>
        </ul>
        <button class="btn btn-outline-light" on:click={() => auth.signInAnonymously()}>
          Sign In Anonymously
        </button>
      </div>
  </nav>
</header>

<style>
  .nav-link {
    cursor: pointer;
  }
</style>