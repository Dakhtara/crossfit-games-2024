<script>
  import { browser } from "$app/environment";
  import AutoScrollTable from "$lib/components/AutoScrollTable.svelte";

  export let data = [];
  let { firstWod } = data;

  // Refetch every minute
  setInterval(() => {
    if (browser) {
      fetch("/api/records")
        .then((res) => res.json())
        .then((data) => {
          firstWod = data.firstWod;
        });
    }
  }, 5000);
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
      <h2 class="text-3xl font-bold text-center">24.1</h2>
      <AutoScrollTable>
        {#each firstWod as { wod, firstName, difficulty, score }}
          {#if wod == "24.1"}
            <tr class="table w-full" style="table-layout: fixed;">
              <td class="md:text-2xl pl-1 py-1">{firstName}</td>
              <td class="md:text-2xl py-1">{difficulty}</td>
              <td class="md:text-2xl py-1">{score}</td>
            </tr>
          {/if}
        {/each}
      </AutoScrollTable>
    </div>

    <div>
      <h2 class="text-3xl font-bold text-center">24.2</h2>
      <AutoScrollTable>
        {#each firstWod as { wod, firstName, difficulty, score }}
          {#if wod == "24.2"}
            <tr class="table w-full" style="table-layout: fixed;">
              <td class="md:text-2xl pl-1 py-1">{firstName}</td>
              <td class="md:text-2xl pl-1 py-1">{difficulty}</td>
              <td class="md:text-2xl py-1">{score}</td>
            </tr>
          {/if}
        {/each}
      </AutoScrollTable>
    </div>
    <div>
      <h2 class="text-3xl font-bold text-center">24.3</h2>
      <AutoScrollTable>
        {#each firstWod as { wod, firstName, difficulty, score }}
          {#if wod == "24.3"}
            <tr class="table w-full" style="table-layout: fixed;">
              <td class="md:text-2xl pl-1 py-1">{firstName}</td>
              <td class="md:text-2xl pl-1 py-1">{difficulty}</td>
              <td class="md:text-2xl py-1">{score}</td>
            </tr>
          {/if}
        {/each}
      </AutoScrollTable>
    </div>
  </div>
</div>
