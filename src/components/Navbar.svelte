<script>
    import { locale, locales, _ } from "svelte-i18n";
    export let scrollY;
</script>

<svelte:window bind:scrollY={scrollY} />

<div class="navigation">
  <!-- svelte-ignore a11y-invalid-attribute -->
  <a href="#about-title">{$_("navbar.about")}</a>
  <!-- svelte-ignore a11y-invalid-attribute -->
  <a href="#">{$_("navbar.carrer")}</a>
  <!-- svelte-ignore a11y-invalid-attribute -->
  <a href="#">{$_("navbar.projects")}</a>
  <!-- svelte-ignore a11y-invalid-attribute -->
  <a href="#">{$_("navbar.contact")}</a>
  <i class="fa-solid fa-globe icon"></i>
  <select bind:value={$locale}  class="navigation-lang-select">
      {#each $locales as locale}
        <option value={locale}>{locale}</option>
      {/each}
  </select>
</div>

<style>
  /* Navigation styles */
  .navigation {
    background-color: #242424;
    overflow: hidden;
    position: fixed;
    border-radius: 0 0 10px 10px;
    margin-top: -10px;
    transition: all .1s ease-in-out;
    transform-origin: left top;
}

  .navigation a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 10px;
    text-decoration: none;
    font-size: 13px;
  }

  .navigation a:hover {
    color: gray;
  }

  .navigation-lang-select {
    background-color: #242424;
    border: none;
    color: #f2f2f2;
    margin-left: -10px;
    margin-right: 10px;
  }
  .navigation-lang-select:focus {
    outline: none;
    box-shadow: none;
  }

  .icon {
    font-size: 18px !important;
    padding: 12px;
  }

</style>
