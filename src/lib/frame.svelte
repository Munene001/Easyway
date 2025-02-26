
  
  <script>
    
    import Nav from "$lib/nav.svelte";
    import Uppernav from "$lib/uppernav.svelte";
    
  
    // Props to make it reusable
    export let image = "/optimized/coins.webp";
    export let title = "Contact Us";
    export let description = "Get in touch";
   
    </script>
    
  
      
  
  
  
  
  
  
  <div class="slideshow">
    <Uppernav />
    <Nav />
    <div class="slide" style="background-image: url({image});"></div>
    <div class="content-wrapper">
      <div class="content">
        <div class="title">{title}</div>
        <div class="description">{description}</div>
        
      </div>
    </div>
  </div>
  
  
  <style>
    .slideshow {
      position: relative;
      width: 100%;
      height: 600px;
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
      top: 48%;
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
      font-size: 24px;
      font-weight: 400;
      line-height: 36px;
      color: rgb(255, 255, 255);
      max-width: 500px;
      margin-left: 10px;
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
  
    :global(.pageroute) {
      position: absolute;
      top: 25%;
      left: 3%;
      width: 100%;
      z-index: 3;
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
      .slideshow::before {
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
        font-size: 40px;
        font-weight: 700;
      }
  
      .description {
        font-size: 16px;
        line-height: 27.2px;
        max-width: 100%;
        margin-left: 0;
      }
  
     
  
      :global(.upper) {
        position: relative;
      }
    }
  </style>
  