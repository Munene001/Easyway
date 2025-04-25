<script lang="ts">
  import { onMount } from "svelte";
  import { quintOut } from "svelte/easing";
  import Nav from "./nav.svelte";
  import Uppernav from "./uppernav.svelte";

  let slides = [
    {
      image: "/optimized/nai2.webp_q50.webp",
      title: "Easyways Credit",
      description: "We are a Nairobi-based microfinance offering loans like logbook and salary advances for businesses.",
      buttons: [
        { text: "Contact us", link: "/contact" },
        { text: "Client Portal", link: "/contact" },
      ],
    },
    {
      image: "/optimized/coinsx.webp",
      title: "Financial Solution",
      description: "Our tailored financial solutions empower Nairobi’s entrepreneurs with quick approvals and flexible plans to thrive.",
      buttons: [{ text: "Contact us", link: "/contact" },{ text: "Learn More", link: "/about" },],
    },
  ];

  let currentIndex = 0;
  let interval: number | undefined;

  onMount(() => {
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
    }, 9000);

    return () => {
      if (interval) clearInterval(interval);
    };
  });

  function flyTransition(
    node: HTMLElement,
    { x, duration, easing }: { x: number; duration: number; easing: (t: number) => number }
  ) {
    return {
      duration,
      easing,
      css: (t: number) => {
        const translateX = x * (1 - t);
        return `transform: translateX(${translateX}px);`;
      },
    };
  }
</script>

<div class="slideshow">
  <Uppernav />
  <Nav />
  {#key currentIndex}
    <div
      class="slide"
      style="background-image: url({slides[currentIndex].image});"
      in:flyTransition={{ x: 1000, duration: 500, easing: quintOut }}
      out:flyTransition={{ x: -1000, duration: 500, easing: quintOut }}
    ></div>
    <div
      class="content-wrapper"
      in:flyTransition={{ x: 1000, duration: 500, easing: quintOut }}
      out:flyTransition={{ x: -1000, duration: 500, easing: quintOut }}
    >
      <div class="content">
        <div class="title">{slides[currentIndex].title}</div>
        <div class="description">{slides[currentIndex].description}</div>
        <div class="button-container">
          {#each slides[currentIndex].buttons as button, i}
            <a
              href={button.link}
              class="button {i === 0 || slides[currentIndex].buttons.length === 1 ? 'primary-button' : 'secondary-button'}"
            >
              {button.text}
            </a>
          {/each}
        </div>
      </div>
    </div>
  {/key}
</div>

<style>
  .slideshow {
    position: relative;
    width: 100%;
    height: 750px;
    overflow: hidden;
  }

  .slide {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    animation: zoomIn 9000ms linear infinite;
    z-index: 0; /* Below the overlay for tinting */
  }

  @keyframes zoomIn {
    0% {
      transform: scale(1);
    }
    33.33% {
      transform: scale(1.0667);
    }
    100% {
      transform: scale(1.2);
    }
  }

  .content-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .content {
    position: relative;
    top: 42%;
    left: 3%;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    font-family: "Open Sans", sans-serif;
  }

  .title {
    font-size: 110px;
    font-weight: 700;
    line-height: 1.2;
    color: rgb(255, 255, 255);
  }

  .description {
    font-family: "Open Sans", sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
    color: rgb(255, 255, 255);
    max-width: 500px;
    margin-left: 10px;
  }

  .button-container {
    display: flex;
    gap: 1rem;
  }

  .button {
    padding: 20px;
    font-size: 20px;
    font-weight: 700;
    color: white;
    border: 1px solid white;
    border-radius: 40px;
    text-decoration: none;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .primary-button {
    background-color: transparent;
    border: 1px solid white;
  }

  .primary-button:hover {
    background-color: blue;
    color: white;
    border: 1px solid blue;
  }

  .secondary-button {
    background-color: blue;
    border: 1px solid blue;
  }

  .secondary-button:hover {
    background-color: transparent;
    border: 1px solid white;
  }

  .slideshow::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 255, 0.4);
    z-index: 1; /* Above slides for tinting */
    pointer-events: none;
  }
  .slideshow::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 208px; /* Matches the height of .upper on desktop */
    background-color: rgba(0, 0, 139, 0.5); /* Darker blue tint with transparency */
    z-index: 2; /* Below .upper (z-index: 3) but above slides (z-index: 0) */
    pointer-events: none;
  }

  .slideshow :global(.pageroute) {
    position: absolute;
    top: 19%;
    left: 3%;
    width: 100%;
    z-index: 4;
  }

  :global(.upper) {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 3;
  }

  @media (max-width: 768px) {
    .slideshow {
      height: 360px;
    }
    .slideshow::before{
      display: none;
    }

    .content-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .content {
      top: auto;
      left: auto;
      width: 90%;
      padding: 0 16px;
      align-items: center;
      justify-content: center;
      gap: 8px;
      text-align: center;
    }

    .title {
      font-size: 35px;
      font-weight: 700;
    }

    .description {
      font-size: 16px;
      line-height: 27.2px;
      max-width: 100%;
      margin-left: 0;
    }

    .button {
      font-size: 16px;
      padding: 16px;
    }

    :global(.upper) {
      position: relative;
    }
  }
</style>