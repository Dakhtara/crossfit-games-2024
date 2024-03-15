<script>
  import { browser } from '$app/environment';

  export let data = [];
  let { firstWod } = data;

  // Refetch every minute
    setInterval(() => {
        if (browser) {
            fetch('/api/records')
            .then((res) => res.json())
            .then((data) => {
                firstWod = data.firstWod;
            });
            
        }
    }, 60000);
</script>

<div class="mx-auto md:w-10/12">
  <div class="flex md:flex-row flex-col items-center gap-x-4 justify-center">
    <h1 class="text-3xl text-center pt-4">Résultats box Games 2024</h1>
    <div class="flex items-center gap-x-2 justify-center">
      <img src="/qrcode.png" alt="QRCode" width="130" />
      <a href="/add-score" class=" text-center btn-sm btn btn-primary"
        >Ajouter mon score</a
      >
    </div>
  </div>
  <div class="grid md:grid-cols-3 gap-y-4 gap-x-4 mt-2">
    <div>
      <h2 class="text-2xl text-center">24.1</h2>
      <div class="">
        <table class="table-lg text-xl table-zebra w-full table-fixed">
          <thead class="bg-gray-200">
            <tr>
              <th class="text-left pl-1 py-2">Prénom</th>
              <th class="text-left py-2">Difficultés</th>
              <th class="text-left py-2">Score</th>
            </tr>
          </thead>

          <tbody>
            {#each firstWod as { wod, firstName, difficulty, score }}
              {#if wod == "24.1"}
                <tr>
                  <td class=" pl-1 py-1">{firstName}</td>
                  <td class=" py-1">{difficulty}</td>
                  <td class=" py-1">{score}</td>
                </tr>
              {/if}
            {/each}
          </tbody>
        </table>
      </div>
    </div>

    <div>
      <h2 class="text-2xl text-center">24.2</h2>
      <div class="overflow-x-auto">
      <table class="table-lg text-xl table-zebra w-full">
        <thead class="bg-gray-200">
          <tr>
            <th class="text-left py-2 pl-1">Prénom</th>
            <th class="text-left py-2 pl-1">Difficulté</th>
            <th class="text-left py-2">Score</th>
          </tr>
        </thead>

        <tbody>
          {#each firstWod as { wod, firstName, difficulty, score }}
            {#if wod == "24.2"}
              <tr>
                <td class="pl-1 py-1">{firstName}</td>
                <td class="text-xl pl-1 py-1">{difficulty}</td>
                <td class="text-xl py-1">{score}</td>
              </tr>
            {/if}
          {/each}
        </tbody>
      </table>
    </div>
    </div>
    <div>
      <h2 class="text-2xl text-center">24.3</h2>
      <table class="table-lg text-xl table-zebra w-full table-fixed">
        <thead class="bg-gray-200">
          <tr>
            <th class="text-left py-2 pl-1">Prénom</th>
            <th class="text-left py-2 pl-1">Difficulté</th>
            <th class="text-left py-2">Score</th>
          </tr>
        </thead>

        <tbody>
          {#each firstWod as { wod, firstName, score, difficulty }}
            {#if wod == "24.3"}
              <tr>
                <td class="text-xl pl-1 py-1">{firstName}</td>
                <td class="text-xl pl-1 py-1">{difficulty}</td>
                <td class="text-xl py-1">{score}</td>
              </tr>
            {/if}
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>
