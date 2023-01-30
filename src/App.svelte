<script>
  // TODO: Add scrolling effect
  import Introduction from "./components/Introduction.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Content from "./components/Content.svelte";
  import { isLoading } from "svelte-i18n";
</script>

{#if $isLoading}
  <h1>Loading...</h1>
{:else}
<Navbar />
<main>
  <Introduction />
  <Content />
</main>
{/if}