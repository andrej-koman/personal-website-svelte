<script>
    import { _ } from "svelte-i18n";   
</script>

<section class="introduction-section">
  <div class="maintext-div">
    <h1>{$_("introduction.welcome")}</h1>
    <small>
        {$_("introduction.description1")}<br/>
        {$_("introduction.description2")}
        <a href="https://www.viar.si">{$_("introduction.VIAR")}</a>
        {$_("introduction.description3")} <br />
        {$_("introduction.description4")}
        <a href="https://feri.um.si/en/">{$_("introduction.FERI")}</a>.
    </small>
  </div>
</section>

<style>
  .introduction-section {
    height: 98vh;
    width: 100%;
    background-color: rgba(237, 231, 225, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }

  .maintext-div h1 {
    font-size: 5em;
    color: white;
  }

  a {
    color: gray;
    text-decoration: none;
  }
</style>
