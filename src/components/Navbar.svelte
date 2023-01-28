<script>
    import { locale, locales, _ } from "svelte-i18n";
</script>

<div class="navigation">
  <a href="#about">{$_("navbar.about")}</a>
  <a href="#news">{$_("navbar.carrer")}</a>
  <a href="#contact">{$_("navbar.projects")}</a>
  <a href="#about">{$_("navbar.contact")}</a>
  <select bind:value={$locale}>
    {#each $locales as locale}
      <option value={locale}>{locale}</option>
    {/each}
  </select>
</div>

<style>
  .navigation {
    background-color: #242424;
    overflow: hidden;
    position: fixed;
    border-radius: 0 0 10px 0;
    margin-top: -10px;
}

  .navigation a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  .navigation a:hover {
    background-color: #ddd;
    color: black;
  }

</style>
