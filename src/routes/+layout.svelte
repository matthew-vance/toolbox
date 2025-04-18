<script lang="ts">
  import "../app.css";
  import { base } from "$app/paths";

  let { children } = $props();
</script>

<svelte:head>
  <title>Toolbox</title>
  <meta name="description" content="A collection of useful tools." />
</svelte:head>

<div class="flex min-h-screen">
  <aside class="py-4">
    <nav class="px-4 border-r h-full">
      <div class="flex flex-col gap-2">
        <a href="{base}/">Home</a>
        <a href="{base}/uuid">UUID</a>
      </div>
    </nav>
  </aside>

  <div class="p-4">{@render children()}</div>
</div>
