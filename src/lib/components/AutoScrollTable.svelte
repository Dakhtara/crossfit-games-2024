<script>
  import { browser } from "$app/environment";
  import { onMount } from "svelte";

  let body;
  let head;
  if (browser) {
    //Automate scroll on y axis from top to bottom
    function scrollDown() {
      body.scrollTop += 1;
      if (body.scrollTop < body.scrollHeight - body.clientHeight) {
        setTimeout(scrollDown, 30);
      }
    }

    //Automate scroll on y axis from bottom to top
    function scrollUp() {
      body.scrollTop -= 1;
      if (body.scrollTop > 0) {
        setTimeout(scrollUp, 30);
      }
    }

    function scrollingUpAndDown() {
      if (body.scrollTop === body.scrollHeight - body.clientHeight) {
        setTimeout(scrollUp, 2000);
      } else if (body.scrollTop === 0) {
        setTimeout(scrollDown, 2000);
      }
    }

    function onResize() {
      body.style = `width:${head.offsetWidth}px;`;

      //if we are on desktop we should scroll
      if (window.innerWidth > 768) {
        body.classList.add("h-[900px]");

        setTimeout(scrollDown, 2000);
        //When bottom is reached, scroll up
        body.addEventListener("scroll", scrollingUpAndDown);
      } else {
        body.classList.remove("h-[900px]");
        body.removeEventListener("scroll", scrollingUpAndDown);
      }
    }

    //Automate scroll on y axis from top to bottom
    onMount(() => {
      onResize();
      window.addEventListener("resize", () => {
        onResize();
      });
    });
  }
</script>

<div class="overflow-x-auto">
  <table class="table-lg table-pin-rows text-xl table-zebra w-full table-fixed">
    <thead bind:this={head} class="bg-gray-200">
      <tr>
        <th class="text-left pl-1 py-2">Prénom</th>
        <th class="text-left py-2">Difficulté</th>
        <th class="text-left py-2">Score</th>
      </tr>
    </thead>

    <tbody bind:this={body} class="h-[900px] block overflow-y-auto">
      <slot />
    </tbody>
  </table>
</div>
