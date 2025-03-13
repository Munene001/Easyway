<script>
</script>

<div class="pageroute">
  <div class="routeitem"><a href="/" aria-label="Go to home"> HOME </a></div>
  <div class="routeitem">
    <a href="/about" aria-label="Go to shop"> ABOUT </a>
  </div>
  <div class="routeitem">
    <a href="/history" aria-label="Go to history"> HISTORY </a>
  </div>
  <div class="routeitem">
    <a href="/careers" aria-label="Go to career"> CAREERS </a>
  </div>
  <div class="routeitem">
    <a href="/#service-section" aria-label="Go to services"> SERVICES </a>
  </div>
  <div class="routeitem">
    <a href="/news" aria-label="Go to news"> NEWS </a>
  </div>
  <div class="routeitem">
    <a href="/contact" aria-label="Go to contact"> CONTACT </a>
  </div>
</div>

<style>
  .pageroute {
    display: flex;
    flex-direction: row;
    height: 65px;
    align-items: center;
    background-color: rgb(18, 34, 68);
    width: 95%;
    font-family: "Open Sans", sans-serif;
  }
  .routeitem {
    margin-left: 50px;
    text-decoration: none;
  }
  .routeitem a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.8);
    transition: color 0.3s ease;
  }
  .routeitem a:hover {
    color: rgb(255, 255, 255); /* Fully opaque white on hover */
  }
  @media (max-width: 768px) {
    .pageroute {
      display: none;
    }
  }
</style>
