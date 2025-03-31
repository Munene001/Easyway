<script>
  import Serviceframe from "$lib/serviceframe.svelte";
  import Headerlite from "$lib/headerlite.svelte";
  import Video from "$lib/video.svelte";
  import Footer from "$lib/footer.svelte";
  import { onMount } from "svelte";

  import Plyr from "plyr";

  /**
   * @type {Plyr}
   */
  let player;

  onMount(() => {
    player = new Plyr("#player", {
      controls: [
        "play-large",
        "play",
        "progress",
        "current-time",
        "mute",
        "volume",
        "fullscreen",
      ],
      autoplay: false, // Change to true if you want it to auto-start
    });
    return () => player.destroy();
  });
</script>

<Headerlite />
<Serviceframe />

<video id="player" playsinline controls>
  <source src="/easyways-compressed.mp4" type="video/mp4" />
</video>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />
</svelte:head>
<Footer />

<style>
  #player {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px 0px;
  }
</style>
