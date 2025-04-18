<script lang="ts">
  import { Button } from "bits-ui";
  import { tv } from "tailwind-variants";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { cn } from "$lib/utils";

  const variants = [
    "neutral",
    "primary",
    "secondary",
    "accent",
    "info",
    "success",
    "warning",
    "error",
    "ghost",
    "link",
  ] as const;
  type Variant = (typeof variants)[number];
  const sizes = ["sm", "md", "lg"] as const;
  type Size = (typeof sizes)[number];
  const styles = ["soft", "outline", "dash", "active"] as const;
  type Style = (typeof styles)[number];
  const mods = ["wide", "square", "circle", "block"] as const;
  type Mod = (typeof mods)[number];

  type ButtonProps = {
    variant?: Variant;
    size?: Size;
    style?: Style;
    mod?: Mod;
  } & Button.RootProps;

  let { variant, size, style, mod, children, ...props }: ButtonProps = $props();

  const button = tv({
    base: "btn",
    variants: {
      size: {
        sm: "btn-xs md:btn-sm",
        md: "btn-sm md:btn-md",
        lg: "btn-md md:btn-lg",
      },
      variant: {
        neutral: "btn-neutral",
        primary: "btn-primary",
        secondary: "btn-secondary",
        accent: "btn-accent",
        info: "btn-info",
        success: "btn-success",
        warning: "btn-warning",
        error: "btn-error",
        ghost: "btn-ghost",
        link: "btn-link",
      },
      style: {
        soft: "btn-soft",
        outline: "btn-outline",
        dash: "btn-dash",
        active: "btn-active",
      },
      mod: {
        wide: "btn-wide",
        square: "btn-square",
        circle: "btn-circle",
        block: "btn-block",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "neutral",
    },
  });
</script>

<Button.Root {...props} class={cn(button({ variant, size, style, mod }))}>
  {@render children?.()}
</Button.Root>
