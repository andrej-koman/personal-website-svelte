<script>
    import { _ } from "svelte-i18n";
    import {onMount} from "svelte";


    /* Make observers for the image and the title, which make them appear */
    var imageObserver = new IntersectionObserver((entries) => {
        let image = document.getElementsByClassName("about-image")[0];
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                image.style.opacity = "1";
            }
        });
    }, {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    });

    var titleObserver = new IntersectionObserver((entries) => {
        let span = document.getElementsByClassName("about-text")[0];
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                span.style.opacity = "1"
            }
        });
    }, {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    });

    /* Wait for the load */
    onMount(() => {
        titleObserver.observe(document.getElementsByClassName("about-text")[0]);
        imageObserver.observe(document.getElementsByClassName("about-bio")[0]);
    });
</script>
<section class="about-section" id="about-section">
    <div class="about-bio">
        <img class="about-image" src="./me.jpeg" alt="Andrej Koman" />
        <span class="about-text"> 
            <h1 id="about-title">{$_("about.title")}</h1>
            {$_("about.text")}
        </span>
    </div>
</section>

<style>

.about-section {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(10, 10%);
}
#about-title {
    font-size: 30px;
    margin-bottom: 50px;
    margin-top: 0px;
}
.about-image {
    border-radius: 4px;
    max-width: 550px;
    margin-right: 20px;
    opacity: 0;
    transition: all 1.5s ease-in;
    transform-origin: left bottom;
}

.about-text {
    font-size: 15px;
    text-align: justify;
    align-self: center;
    opacity: 0;
    transition: all 1.5s ease-in;
    transform-origin: right bottom;
}

.about-bio {
    grid-column: 3 / 9;
    widows: auto;
    height: auto;
    display: flex;
    margin-top: 15px;
}
</style>