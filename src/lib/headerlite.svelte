<script>
    import Icon from "@iconify/svelte";
  </script>
  
  <div class="headerlite">
    <div class="uno">
      <div class="time">
        <Icon
          icon="svg-spinners:clock"
          width="19"
          height="19"
          color="rgb(55, 64, 176)"
        />
        <p>Mon - Sat 9:00 - 18:00</p>
      </div>
      <div class="unonext">
        <Icon
          icon="ic:baseline-phone"
          width="17"
          height="17"
          color="rgb(55, 64, 176)"
        />
        <p>
          <span>+254734641449</span>
          <span>+254 786189755</span>
          <span>+254100974188</span>
        </p>
      </div>
    </div>
    <div class="mailandlinks">
      <div class="mail">
        <Icon
          icon="icon-park-outline:mail-download"
          width="19"
          height="19"
          color="rgb(55, 64, 176)"
        />
        <p>info@easywayscredit.co.ke</p>
      </div>
      <div class="social-links">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <Icon icon="logos:facebook" width="18" height="18" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <Icon icon="prime:twitter" width="19" height="19" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <Icon icon="lineicons:instagram" width="20" height="21" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <Icon icon="devicon:linkedin" width="21" height="21" />
        </a>
      </div>
    </div>
  </div>
  
  <style>
    :global(body) {
      margin: 0;
      padding: 0;
    }
  
    .headerlite {
      background-color: white;
      height: 57px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-left: 20px;
      padding-right: 20px;
      box-sizing: border-box;
      font-weight: 500;
      line-height: 22.5px;
      font-family: "Open Sans", sans-serif;
      border-bottom: 1px solid blue;
    }
  
    .uno {
      display: flex;
      flex-direction: row;
    }
  
    .uno div {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  
    .time p {
      color: rgb(55, 64, 176);
      margin-left: 10px;
    }
  
    .unonext {
      margin-left: 20px;
      color: rgb(55, 64, 176);
    }
  
    .unonext p {
      margin-left: 5px;
      display: flex;
      gap: 12px;
    }
  
    .mailandlinks {
      display: flex;
      flex-direction: row;
    }
  
    .mailandlinks div {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: rgb(55, 64, 176);
    }
  
    .mail {
      border-right: 2px solid blue;
    }
  
    .mail p {
      margin-left: 10px;
      margin-right: 25px;
    }
  
    .social-links {
      display: flex;
      gap: 13px;
      margin-left: 25px;
    }
    @media (max-width:768px){
      .headerlite{
        display: none;
      }

    
    }
  
    
  </style>