<script>
    import Icon from "@iconify/svelte";
    import { goto } from "$app/navigation";
  
    let popOpen = false;
  
    const links = [
      { label: "HOME", url: "/" },
      { label: "ABOUT", url: "/#about-section" },
      { label: "CAREERS", url: "/careers" },
      { label: "SERVICES", url: "/#service-section" },
      { label: "NEWS", url: "/about" },
      { label: "CONTACT", url: "/contact" },
    ];
  
    /**
   * @param {string | URL} url
   */
    function Navigate(url) {
      goto(url);
      popOpen = false;
    }
  
    function togglePopOpen() {
      popOpen = !popOpen;
    }
  </script>
  
  <div class="upper">
    <div class="upperleft">
      <img src="/logo.png" alt="Company Logo" class="logo" />
      <div>Easyway Credit Limited</div>
    </div>
    <div class="upperright">
      <div class="item">
        <div class="itemfirst">Number #1</div>
        <div class="itemlast">in kenya</div>
      </div>
      <div class="item">
        <div class="itemfirst">Trio Complex Thika Road</div>
        <div class="itemlast">Behind Garden City Mall</div>
      </div>
      <div class="item">
        <div class="itemfirst">Trusted by 137+ </div>
        <div class="itemlast">Customers</div>
      </div>
      <div class="item">
        <button class="quote"><a href="/contact">GET A QUOTE</a></button>
      </div>
    </div>
    <div class="navpage">
      <button on:click={togglePopOpen} class="buttonuno">
        <Icon icon="material-symbols:menu-rounded" color= "white" font-size = 35px />
      </button>
    </div>
    {#if popOpen}
      <div class="pops">
        <div class="pops1">
          {#each links as link}
            <button class="button2" on:click={() => Navigate(link.url)}>
              {link.label}
            </button>
          {/each}
        </div>
        <button class="button3" on:click={togglePopOpen}>
          <Icon icon="zondicons:close" />
        </button>
      </div>
    {/if}
  </div>
  
  <style>
    .upper {
      height: 155px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 40px;
      box-sizing: border-box;
      align-items: center;
      background-color: transparent;
      font-family: "Open Sans", sans-serif;
    }
  
    .upperright {
      display: flex;
      flex-direction: row;
    }
  
    .item {
      display: flex;
      flex-direction: column;
      margin-left: 30px;
      color: white;
    }
  
    .itemfirst {
      font-size: 18px;
      font-weight: 700;
      line-height: 18px;
      color: white;
    }
  
    .itemlast {
      font-size: 16px;
      font-weight: 400;
      color: white;
      line-height: 16px;
    }
  
    .quote {
      
      background-color: rgb(48, 57, 172);
      color: white;
      font-weight: 600;
      border: 1px solid rgb(48, 57, 172);
      padding: 11px;
      border-radius: 4px;
    }
    .quote a{
      font-size: 14px;
      color: white;
      text-decoration: none;

    }
  
    .upperleft {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  
    .upperleft img {
      height: 80px;
      width: 80px;
    }
  
    .upperleft div {
      font-size: 20px;
      font-weight: 700;
      color: white;
      margin-left: 20px;
    }
  
    .navpage {
      display: none;
    }
  
    .pops {
      display: none; /* Hidden by default */
    }
  
    @media (max-width: 768px) {
      .item {
        display: none;
      }
  
      .upper {
        height: 75px;
        background-color: rgb(17, 35, 73);
        padding: 0 10px;
        box-sizing: border-box;
      }
  
      .upperleft img {
        height: 30px;
        width: 30px;
      }
  
      .upperleft div {
        font-size: 12px;
        font-weight: 600;
        color: white;
        margin-left: 10px;
      }
  
      .navpage {
        display: block;
        background-color: transparent;
      }
      .buttonuno{
        background-color: transparent;
        border: none;
      }
      
  
      .pops {
        display: flex; /* Ensure this is set to flex or block */
        flex-direction: column;
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100vh;
        background-color: rgb(31,31,31);
        padding: 30px;
        box-sizing: border-box;
        z-index: 1000;
      }
    }
  
    .pops1 {
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 0px 35px;
      box-sizing: border-box;
    }
  
    .button2 {
      color: white;
      background: none;
      border: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);;
      font-size: 20px;
      text-align: left;
      cursor: pointer;
      padding-bottom: 20px;
    }
    .button2:hover{
       border: 1px solid blue;
    }
  
    .button3 {
      position: absolute;
      top: 20px;
      right: 15px;
      background: none;
      border: none;
      color: white;
      font-size: 24px;
      cursor: pointer;
    }
  </style>