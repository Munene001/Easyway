<script>
  import "iconify-icon";
</script>

<div class="Team">
  <div class="icon">
    <div class="title">Management Team Profile</div>

    <iconify-icon icon="logos:microsoft-teams" width="94" height="94"
    ></iconify-icon>
  </div>

  <div class="ceo">
    George Namu – C.E.O With over 15 years of experience in microfinance
    management, commercial banking and finance gained from three leading
    Microfinance Banks in Kenya, George brings a wealth of expertise to the
    board of Easyways Credit. His strategic vision and leadership skills have
    guided the organization to the current success. George’s profound
    understanding of market dynamics, risk management, and regulatory compliance
    ensures that Easyways Credit operates with integrity, transparency, and
    sound governance practices
  </div>

  <div class="management">
    Easyways is led by a dedicated management team of experienced professionals
    committed to excellence, innovation, and continuous improvement. Their
    strategic vision and focus on empowering staff drive organizational success,
    ensuring agility and responsiveness to evolving client and market needs. By
    prioritizing rigorous training and capacity-building initiatives, Easyways
    invests in its team's growth, enhancing expertise in financial products,
    market trends, risk management, and customer service. This commitment to
    professional development positions Easyways for sustained growth,
    profitability, and industry leadership.
  </div>
</div>

<style>
  .Team {
    display: flex;
    flex-direction: row;
    padding: 30px 15px;
    box-sizing: border-box;
    background-image: url("/crew.webp"); /* Path to your image */
    background-size: cover; /* Ensures the image covers the entire element */
    background-position: center; /* Centers the image */
    position: relative; /* Needed for the overlay */
  }

  /* Add an overlay with opacity */
  .Team::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.85); /* Black with 50% opacity */
    z-index: 1; /* Ensures the overlay is above the background image */
  }

  
  .Team > * {
    position: relative;
    z-index: 2; 
  }
  .icon {
    display: flex;
    flex-direction: column;
    flex: 0 0 30%;
    justify-content: center;
  }
  .title {
    font-family: "Open Sans", sans-serif;
    font-size: 35px;
    font-weight: 400;
    line-height: 45.3px;
    text-align: center;
    padding: 0 20px;
    color: #29036b;
  }
  .ceo {
    display: flex;
    flex: 0 0 35%;
    padding: 0 10px;
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
    font-size: 19px;
    font-weight: 500;
    line-height: 32.3px;
  }
  .management {
    display: flex;
    flex: 0 0 35%;
    padding: 0 10px;
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
    font-size: 19px;
    font-weight: 500;
    line-height: 32.3px;
  }
  @media (max-width: 768px) {
    .Team {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
    .icon{
        order: -1;
    }
    .management{
        order: -1;
        padding: 0px 20px;
        display: flex;
        text-indent: 20;
        box-sizing: border-box;

        
    }
    .ceo{
        padding: 0px 20px;
        display: block;
        text-indent: 20;
        box-sizing: border-box;
        

    }
  }
</style>
