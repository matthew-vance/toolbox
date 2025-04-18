<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Button from "./button.svelte";

  const { Story } = defineMeta({
    title: "UI/Button",
    tags: ["autodocs"],
  });
</script>

<Story name="Variants">
  <div class="flex gap-2">
    <Button>Default</Button>
    <Button variant="neutral">Neutral</Button>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="accent">Accent</Button>
    <Button variant="info">Info</Button>
    <Button variant="success">Success</Button>
    <Button variant="warning">Warning</Button>
    <Button variant="error">Error</Button>
  </div>
</Story>

<Story name="Sizes">
  <div class="flex gap-2">
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </div>
</Story>

<Story name="Ghost & Link">
  <div class="flex gap-2">
    <Button ghost>Ghost</Button>
    <Button link>Link</Button>
  </div>
</Story>

<Story name="Soft">
  <div class="flex gap-2">
    <Button style="soft">Default</Button>
    <Button style="soft" variant="neutral">Neutral</Button>
    <Button style="soft" variant="primary">Primary</Button>
    <Button style="soft" variant="secondary">Secondary</Button>
    <Button style="soft" variant="accent">Accent</Button>
    <Button style="soft" variant="info">Info</Button>
    <Button style="soft" variant="success">Success</Button>
    <Button style="soft" variant="warning">Warning</Button>
    <Button style="soft" variant="error">Error</Button>
  </div>
</Story>

<Story name="Outline">
  <div class="flex gap-2">
    <Button style="outline">Default</Button>
    <Button style="outline" variant="neutral">Neutral</Button>
    <Button style="outline" variant="primary">Primary</Button>
    <Button style="outline" variant="secondary">Secondary</Button>
    <Button style="outline" variant="accent">Accent</Button>
    <Button style="outline" variant="info">Info</Button>
    <Button style="outline" variant="success">Success</Button>
    <Button style="outline" variant="warning">Warning</Button>
    <Button style="outline" variant="error">Error</Button>
  </div>
</Story>

<Story name="Dash">
  <div class="flex gap-2">
    <Button style="dash">Default</Button>
    <Button style="dash" variant="neutral">Neutral</Button>
    <Button style="dash" variant="primary">Primary</Button>
    <Button style="dash" variant="secondary">Secondary</Button>
    <Button style="dash" variant="accent">Accent</Button>
    <Button style="dash" variant="info">Info</Button>
    <Button style="dash" variant="success">Success</Button>
    <Button style="dash" variant="warning">Warning</Button>
    <Button style="dash" variant="error">Error</Button>
  </div>
</Story>

<Story name="Active">
  <div class="flex gap-2">
    <Button style="active">Default</Button>
    <Button style="active" variant="neutral">Neutral</Button>
    <Button style="active" variant="primary">Primary</Button>
    <Button style="active" variant="secondary">Secondary</Button>
    <Button style="active" variant="accent">Accent</Button>
    <Button style="active" variant="info">Info</Button>
    <Button style="active" variant="success">Success</Button>
    <Button style="active" variant="warning">Warning</Button>
    <Button style="active" variant="error">Error</Button>
  </div>
</Story>

<Story name="Modifiers">
  <div class="flex flex-col gap-3">
    <div class="flex gap-2">
      <Button mod="wide">Wide</Button>
      <Button mod="square">Sq</Button>
      <Button mod="circle">Ci</Button>
    </div>
    <Button mod="block">Block</Button>
  </div>
</Story>
