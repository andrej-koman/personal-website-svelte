<script>
    import { _ } from "svelte-i18n";
    import { Image } from "smelte";
</script>
<section class="about-section">
    <h1 id="about-title">{$_("about.title")}</h1>
    <img class="about-image" src="./me.jpeg" alt="Andrej Koman" />
    <span class="about-text">{$_("about.text")}</span>
</section>

<style>
:root {
    --primary-background-color: #696969;
}
.about-section {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(10, 10%);
}
#about-title {
    font-size: 30px;
    grid-column: 5 / 7;
    justify-self: center;
    margin-bottom: 50px;
}
.about-image {
    grid-column: 3 / 5;
    border-radius: 4px;
    width: 550px;
}

.about-text {
    grid-column: 6 / 9;
    font-size: 15px;
    text-align: justify;
    align-self: center;
}
</style>