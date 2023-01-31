
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import smelte from 'smelte/rollup-plugin-smelte';

export default {
  input: 'src/main.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife'
  },
  plugins: [
    svelte({
      // By default, all ".svelte" files are compiled
      extensions: ['.my-custom-extension'],

      // You can restrict which files are compiled
      // using `include` and `exclude`
      include: 'src/components/**/*.svelte',

      // Optionally, preprocess components with svelte.preprocess:
      // https://svelte.dev/docs#compile-time-svelte-preprocess
      preprocess: {
        style: ({ content }) => {
          return transformStyles(content);
        }
      },

      // Emit CSS as "files" for other plugins to process. default is true
      emitCss: false,

      // Warnings are normally passed straight to Rollup. You can
      // optionally handle them here, for example to squelch
      // warnings with a particular code
      onwarn: (warning, handler) => {
        // e.g. don't warn on <marquee> elements, cos they're cool
        if (warning.code === 'a11y-distracting-elements') return;

        // let Rollup handle all other warnings normally
        handler(warning);
      },

      // You can pass any of the Svelte compiler options
      compilerOptions: {

        // By default, the client-side compiler is used. You
        // can also use the server-side rendering compiler
        generate: 'ssr',

        // ensure that extra attributes are added to head
        // elements for hydration (used with generate: 'ssr')
        hydratable: true,

        // You can optionally set 'customElement' to 'true' to compile
        // your components to custom elements (aka web elements)
        customElement: false
      }
    }),
    // see NOTICE below
    resolve({
      browser: true,
      exportConditions: ['svelte'],
      extensions: ['.svelte']
    }),
    smelte({ 
        purge: production,
        output: "public/global.css", // it defaults to static/global.css which is probably what you expect in Sapper 
        postcss: [], // Your PostCSS plugins
        whitelist: [], // Array of classnames whitelisted from purging
        whitelistPatterns: [], // Same as above, but list of regexes
        tailwind: { 
          colors: { 
            primary: "#b027b0",
            secondary: "#009688",
            error: "#f44336",
            success: "#4caf50",
            alert: "#ff9800",
            blue: "#2196f3",
            dark: "#212121" 
          }, // Object of colors to generate a palette from, and then all the utility classes
          darkMode: true, 
        }, 
        // Any other props will be applied on top of default Smelte tailwind.config.js
      }),
  ]
}