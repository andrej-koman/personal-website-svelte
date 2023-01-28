import { register, init, getLocaleFromNavigator } from "svelte-i18n";

register("en", () => import("./lang/en.json"));
register("si", () => import("./lang/si.json"));

init({
    fallbackLocale: "en",
    initialLocale: "si",
})