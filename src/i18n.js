import { register, init, getLocaleFromNavigator } from "svelte-i18n";

register("EN", () => import("./lang/en.json"));
register("SI", () => import("./lang/si.json"));

var initialLocale = localStorage.getItem("locale");
if (!initialLocale) {
    initialLocale = "EN";
}
init({
    fallbackLocale: "EN",
    initialLocale: initialLocale,
})