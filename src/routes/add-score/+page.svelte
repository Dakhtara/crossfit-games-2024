<script>
  export let form;
</script>

<h1 class="text-3xl text-center mb-8">Ajoute ton score</h1>
<form class="md:w-3/12 mx-8 md:mx-auto" method="POST">
  {#if form?.success}
    <p class="text-center">Votre score a bien été enregistré</p>
  {/if}

  <div class="w-full grid grid-cols-2 mb-4">
    <label class="font-semibold" for="wod">Choisis ton WOD</label>
    <select class="select select-bordered" id="wod" name="wod">
      <option>24.1</option>
      <option>24.2</option>
      <option selected>24.3</option>
      <option>24.4</option>
    </select>
  </div>

  <div class="grid grid-cols-2 mb-4">
    <label class="font-semibold" for="firstname">Prénom</label>
    <input
      class="input input-bordered"
      id="firstname"
      name="firstname"
      type="text"
    />
  </div>

  <div class="grid grid-cols-2 mb-4">
    <label class="font-semibold" for="difficulty">Difficulté</label>
    <input
      class="input input-bordered"
      id="difficulty"
      name="difficulty"
      type="text"
    />
  </div>

  <div class="grid grid-cols-2 mb-4">
    <label class="font-semibold" for="score">Score</label>
    <input class="input input-bordered" id="score" name="score" type="text" />
  </div>

  <div class="">
    <input class="btn btn-primary w-full" type="submit" value="Enregistrer" />
  </div>
</form>
