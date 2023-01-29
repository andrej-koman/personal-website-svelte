<script>
    import { locale, locales, _ } from "svelte-i18n";

    const changeLocale = (e) => {
        localStorage.setItem("locale", e.target.value);
    };
</script>

<div class="navigation">
  <a href="#about">{$_("navbar.about")}</a>
  <a href="#news">{$_("navbar.carrer")}</a>
  <a href="#contact">{$_("navbar.projects")}</a>
  <a href="#about">{$_("navbar.contact")}</a>
  <i class="fa-solid fa-globe icon"></i>
  <select bind:value={$locale} on:select={changeLocale} class="navigation-lang-select">
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
    border-radius: 0 0 10px 10px;
    margin-top: -10px;
    left: 38%;
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
    background-color: #ddd;
    color: black;
  }

  .icon {
    font-size: 20px !important;
    padding: 12px;
    cursor: pointer;
  }

  .navigation-lang-select {
    background-color: #242424;
    border: none;
    font-size: 15px;
    cursor: pointer;
    margin-left: -10px;
    margin-right: 10px;
  }

</style>
