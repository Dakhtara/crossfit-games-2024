<script>
  import data from "../lib/data.json";

  let firstWod = data["24.1"];
  let secondWod = data["24.2"];
</script>

<div class="mx-auto w-3/4">
  <h1 class="text-3xl text-center pt-4">Résultats box Games 2024</h1>

  <div class="grid grid-cols-2 gap-x-4 mt-8">
    <div>
      <h2 class="text-2xl text-center">24.1</h2>
      <div class="bg-gray-100 rounded-lg border-gray-200 border">
        <table class=" w-full table-fixed">
          <thead class="bg-gray-200">
            <tr>
              <th class="text-left pl-1 py-2">Prénom</th>
              <th class="text-left py-2">Difficultés</th>
              <th class="text-left py-2">Score</th>
            </tr>
          </thead>

          <tbody>
            {#each firstWod as { name, level, score }}
              <tr>
                <td class="pl-1 py-1">{name}</td>
                <td class="py-1">{level}</td>
                <td class="py-1">{score}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>

    <div>
        
      <h2 class="text-2xl text-center">24.2</h2>
      <div class="bg-gray-100 rounded-lg border-gray-200 border">
        <table class="w-full table-fixed">
        <thead class="bg-gray-200">
          <tr>
            <th class="text-left py-2 pl-1">Prénom</th>
            <th class="text-left py-2">Score</th>
          </tr>
        </thead>

        <tbody>
          {#each firstWod as { name, score }}
            <tr>
              <td class="pl-1 py-1">{name}</td>
              <td class="py-1">{score}</td>
            </tr>
          {/each}
        </tbody>
      </table>
</div>
    </div>
  </div>
</div>
