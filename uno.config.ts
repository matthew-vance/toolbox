import { defineConfig, presetAttributify, presetWind4, presetTypography } from "unocss";

export default defineConfig({
  presets: [
    presetAttributify(),
    presetTypography(),
    presetWind4({
      reset: true,
    }),
  ],
});
