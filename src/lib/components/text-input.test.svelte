<script lang="ts">
  import TextInput from "./text-input.svelte";

  let value = $state("");
</script>

<TextInput bind:value />
<p data-testid="value">{value}</p>
