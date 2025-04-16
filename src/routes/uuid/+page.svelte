<script lang="ts">
  import { v4, v7 } from "uuid";
  import { TextInput } from "$lib/components";

  const uuidVersions = ["v4", "v7"] as const;
  type UUIDVersion = (typeof uuidVersions)[number];
  const generators = {
    v4,
    v7,
  };

  function generateUUIDs() {
    return Array.from({ length: quantity }, () => generators[version]());
  }

  let version = $state<UUIDVersion>(uuidVersions[0]);
  let quantity = $state(1);
  let uuids = $derived(generateUUIDs());
</script>

<main prose>
  <h1>UUID Generator</h1>
  <p>Generate a list of UUIDs</p>
  <div flex gap="4" items-end>
    <div flex flex-col gap="4">
      <label
        >Version:
        <select bind:value={version}>
          {#each uuidVersions as ver}
            <option value={ver}>{ver}</option>
          {/each}
        </select>
      </label>
      <label>Quantity: <TextInput type="number" bind:value={quantity} min="1" max="100" /></label>
    </div>
    <button
      onclick={() => (uuids = generateUUIDs())}
      border
      p="y-1 x-3"
      rounded-md
      class="hover:bg-gray-100 hover:cursor-pointer">Regenerate</button
    >
  </div>
  {#each uuids as uuid}
    <p class="not-prose">{uuid}</p>
  {/each}
</main>
