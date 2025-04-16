<script lang="ts">
  import type { HTMLInputAttributes } from "svelte/elements";
  let { value = $bindable(), ...rest }: HTMLInputAttributes = $props();
</script>

<input bind:value {...rest} p="y-1 x-3" rounded="md" border="1 black" />
