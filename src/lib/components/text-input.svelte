<script lang="ts">
  import type { HTMLInputAttributes } from "svelte/elements";
  let { value = $bindable(), ...rest }: HTMLInputAttributes = $props();
</script>

<input bind:value {...rest} class="py-1 px-3 rounded-md border" />
