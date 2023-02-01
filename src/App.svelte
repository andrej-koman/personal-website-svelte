<script>
  import Introduction from "./components/Introduction.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Content from "./components/Content.svelte";
  import Particles from "svelte-particles";
  import { loadFull } from "tsparticles";
  import { isLoading } from "svelte-i18n";
  import { onMount } from "svelte";
  let showContent = false;
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const showContentAsync = async () => {
    await sleep(3000);
    showContent = true;
  }

  onMount(() => {
    setTimeout(() => {
      /* Wait 3 seconds with a loader, to give the site time to load */
      let loader = document.getElementsByClassName("loader-container")[0];
      loader.classList.add("disabled");

      /* Main intro text */
      let introduction = document.getElementsByClassName("maintext-div")[0];
      introduction.style.display = "block";
      /* First make it visible and the set the opacity so the animation goes trough */
      setTimeout(() => {
        introduction.style.opacity = "1";
      }, 50);

      /* Navbar */
      let navigation = document.getElementsByClassName("navigation")[0];
      navigation.style.display = "block";
      setTimeout(() => {
        navigation.style.opacity = "1";
        setTimeout(() => {
          navigation.style.transition = "all 0.2s ease-in-out";
        }, 50);
      }, 50);

      /* Language selector */
      let lang = document.getElementsByClassName("navbar-lang")[0];
      lang.style.display = "block";
      setTimeout(() => {
        lang.style.opacity = "1";
      }, 50);

      /* Show scrollbar */
      let body = document.getElementsByTagName("body")[0];
      setTimeout(() => {
        body.style.overflow = "auto";
      }, 1000);
    }, 3000);
    showContentAsync();
  });

  let particlesInit = async (engine) => {
    // you can use main to customize the tsParticles instance adding presets or custom shapes
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  };
</script>

{#if $isLoading}
  <h1>Loading messages...</h1>
{:else}
  <div class="loader-container">
    <div class="loader" />
  </div>
  <Particles
    id="tsparticles"
    {particlesInit}
    options={{
      particles: {
        number: {
          value: 50,
          density: {
            enable: false,
            value_area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 4,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.79,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 299.88083682536654,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 7,
          direction: "top",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: false,
            mode: "grab",
          },
          onclick: {
            enable: false,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    }}
  />
  <main>
    <Navbar />
    <Introduction />
    {#if showContent}
      <Content />
    {/if}
  </main>
{/if}

<style>
  main {
    transition: all 1s ease-in;
  }

  /* Loader styles and animations */
  .loader {
    position: relative;
    left: -9999px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #fff;
    color: #fff;
    box-shadow: 9999px 0 0 0 #fff;
    animation: dot-falling 1s infinite linear;
    animation-delay: 0.1s;
  }
  .loader::before,
  .loader::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
  }
  .loader::before {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #fff;
    color: #fff;
    animation: dot-falling-before 1s infinite linear;
    animation-delay: 0s;
  }
  .loader::after {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #fff;
    color: #6c6c6d;
    animation: dot-falling-after 1s infinite linear;
    animation-delay: 0.2s;
  }
  .loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 50%;
    top: 50%;
  }

  @keyframes dot-falling {
    0% {
      box-shadow: 9999px -15px 0 0 rgba(152, 128, 255, 0);
    }
    25%,
    50%,
    75% {
      box-shadow: 9999px 0 0 0 #fff;
    }
    100% {
      box-shadow: 9999px 15px 0 0 rgba(152, 128, 255, 0);
    }
  }
  @keyframes dot-falling-before {
    0% {
      box-shadow: 9984px -15px 0 0 rgba(152, 128, 255, 0);
    }
    25%,
    50%,
    75% {
      box-shadow: 9984px 0 0 0 #fff;
    }
    100% {
      box-shadow: 9984px 15px 0 0 rgba(152, 128, 255, 0);
    }
  }
  @keyframes dot-falling-after {
    0% {
      box-shadow: 10014px -15px 0 0 rgba(152, 128, 255, 0);
    }
    25%,
    50%,
    75% {
      box-shadow: 10014px 0 0 0 #fff;
    }
    100% {
      box-shadow: 10014px 15px 0 0 rgba(152, 128, 255, 0);
    }
  }
</style>
