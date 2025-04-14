<script lang="ts">
  import { v4 as uuidv4 } from "uuid";
  import { Input } from "$lib/components";

  let quantity = $state(1);
  let uuids = $derived(Array.from({ length: quantity }, () => uuidv4()));
</script>

<main prose>
  <h1>UUID Generator</h1>
  <p>Generate a list of v4 UUIDs</p>
  <label>Quantity: <Input type="number" bind:value={quantity} min="1" max="100" /></label>
  {#each uuids as uuid}
    <p class="not-prose">{uuid}</p>
  {/each}
</main>
