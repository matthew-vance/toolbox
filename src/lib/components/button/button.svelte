<script lang="ts">
  import { Button } from "bits-ui";
  import { cn } from "$lib/utils";
  import { button, type ButtonProps } from ".";

  let { variant, size, style, mod, ghost, link, children, ...props }: ButtonProps = $props();
</script>

<Button.Root {...props} class={cn(button({ variant, size, style, mod, ghost, link }))}>
  {@render children?.()}
</Button.Root>
