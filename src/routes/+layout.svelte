<script lang="ts">
  import "virtual:uno.css";
  import { base } from "$app/paths";

  let { children } = $props();
</script>

<svelte:head>
  <title>Toolbox</title>
  <meta name="description" content="A collection of useful tools." />
</svelte:head>

<div class="flex flex-row w-full">
  <aside class="max-w-2xs p-4 flex flex-col gap-2">
    <a href="{base}/">Home</a>
    <a href="{base}/uuid" class="text-nowrap">UUID</a>
  </aside>
  <div class="w-full p-4">{@render children()}</div>
</div>
