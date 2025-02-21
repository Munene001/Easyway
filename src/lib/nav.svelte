<script>
</script>

<div class="pageroute">
  <div class="routeitem"><a href="/" aria-label="Go to home"> HOME </a></div>
  <div class="routeitem">
    <a href="/shop" aria-label="Go to shop"> SHOP </a>
  </div>
  <div class="routeitem"><a href="/men" aria-label="Go to MEN"> WOMEN </a></div>
  <div class="routeitem">
    <a href="/women" aria-label="Go to WOMEN"> WOMEN </a>
  </div>
  <div class="routeitem">
    <a href="/checkout" aria-label="Go to checkout"> CHECKOUT </a>
  </div>
  <div class="routeitem">
    <a href="/about" aria-label="Go to about"> ABOUT </a>
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
  @media (max-width:768px){
    .pageroute{
      display: none;
    }
  }
</style>
