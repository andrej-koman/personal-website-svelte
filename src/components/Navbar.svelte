<script>
    import { locale, locales, _ } from "svelte-i18n";

    const setLangLocal = (e) =>{
        localStorage.setItem("locale", e.target.value);
    }
</script>

<div class="navigation">
  <img src="/logo.svg" alt="logo" />
  <!-- svelte-ignore a11y-invalid-attribute -->
  <a href="#about-section" class="nav-item">{$_("navbar.about")}</a>
  <!-- svelte-ignore a11y-invalid-attribute -->
  <a href="#" class="nav-item">{$_("navbar.experience")}</a>
  <!-- svelte-ignore a11y-invalid-attribute -->
  <a href="#" class="nav-item">{$_("navbar.projects")}</a>
  <!-- svelte-ignore a11y-invalid-attribute -->
  <a href="#contact-title" class="nav-item">{$_("navbar.contact")}</a>
</div>
<div class="navbar-lang">
  <i class="fa-solid fa-globe icon"></i>
  <select bind:value={$locale}  class="navigation-lang-select" on:change={setLangLocal}>
      {#each $locales as locale}
        <option value={locale}>{locale}</option>
      {/each}
  </select>
</div>

<style>
  /* Navigation styles */
  .navigation {
    overflow: hidden;
    position: fixed;
    border-radius: 0 0 10px 10px;
    display:none;
    opacity: 0;
    margin-top: -10px;
    transition: all 2s ease-in-out;
    transform-origin: left top;
}

  .navigation a, .navigation img {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 10px;
    text-decoration: none;
    font-size: 13px;
  }
  .navigation a {
    margin-top: 5px;
    transition: margin-top 0.2s ease;
  }

  .navigation img {
    width: 30px;
    cursor: pointer;
  }

  .navigation a:hover {
    color: gray;
    margin-top: 1px;
  }

  .navigation-lang-select {
    background-color: #242424;
    border: none;
    color: #f2f2f2;
    margin-left: -15px;
    margin-right: 10px;
    margin-top: 5px;
    border-radius: 2px;
  }
  .navigation-lang-select:focus {
    outline: none;
    box-shadow: none;
  }

  .icon {
    font-size: 18px !important;
    padding: 12px;
  }

  .navbar-lang {
    right: 0;
    position: fixed;
    display:none;
    opacity: 0;
    transition: all 2s ease-in-out;
  }

</style>
