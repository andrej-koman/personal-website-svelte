<script>
  // TODO: Add scrolling effect
  import Introduction from "./components/Introduction.svelte";
  import Career from "./components/Career.svelte";
  import Navbar from "./components/Navbar.svelte";
  import { isLoading } from "svelte-i18n";
  let scroll;
</script>

<svelte:window bind:scrollY={scroll} />

{#if $isLoading}
  <div class="loading">
    <div class="loading__spinner"></div>
  </div>
{:else}
<main>
  <Navbar />
  <Introduction />
  <Career />
</main>
{/if}