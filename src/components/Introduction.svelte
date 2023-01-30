<script>
    import { _ } from "svelte-i18n";  
    import Particles from "svelte-particles";
    import { onMount } from "svelte";
    import {loadFull} from "tsparticles";

    let particlesInit = async engine => {
        // you can use main to customize the tsParticles instance adding presets or custom shapes
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    };
    
    /* Make the navbar disapear when the Welcome text isnt visible */
    var observer = new IntersectionObserver((entries) => {
        let nav = document.getElementsByClassName("navigation")[0];
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                nav.classList.remove("active");
                nav.classList.add("disabled");
            } else {
                nav.classList.add("active");
                nav.classList.remove("disabled");
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
  <Particles id="tsparticles" particlesInit={particlesInit} options={{
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
          enable: true,
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
    retina_detect: true,}} />
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
    height: 99vh;
    width: 100%;
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
