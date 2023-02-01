<script>
    import { _ } from "svelte-i18n";  
    import { onMount } from "svelte";

    
    /* Make the navbar disapear when the Welcome text isnt visible */
    var observer = new IntersectionObserver((entries) => {
        let nav = document.getElementsByClassName("navigation")[0];
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                nav.classList.remove("disabled");
                nav.classList.add("enabled");
            } else {
                nav.classList.add("disabled");
                nav.classList.remove("enabled");
            }
        });
    }, {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    });

    /* Wait for the page to render */
    onMount(() => {
        observer.observe(document.getElementsByClassName("introduction-section")[0]);
    });
</script>

<section class="introduction-section">
  <div class="maintext-div disabled-start">
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
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }

  .maintext-div {
    display: none;
    opacity: 0;
    transition: all 2s ease-in-out;
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
