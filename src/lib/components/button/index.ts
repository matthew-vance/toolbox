import { type VariantProps, tv } from "tailwind-variants";
import type { Snippet } from "svelte";

export const button = tv({
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
    },
    ghost: { true: "btn-ghost" },
    link: { true: "btn-link" },
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
  },
});

export type ButtonProps = {
  variant?: VariantProps<typeof button>["variant"];
  size?: VariantProps<typeof button>["size"];
  style?: VariantProps<typeof button>["style"];
  mod?: VariantProps<typeof button>["mod"];
  ghost?: VariantProps<typeof button>["ghost"];
  link?: VariantProps<typeof button>["link"];
  onclick?: () => void;
  children?: Snippet;
};
