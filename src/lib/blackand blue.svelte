<script>
  import Icon from "@iconify/svelte";
</script>

<div class="About" id="about-section" style="scroll-behavior: smooth;">
  <div class="abouttop">
    <div class="ableft">
      <div class="head">Value to the economy, business and Individuals</div>
      <div class="Text">
        <div class="check-icon"><Icon icon="game-icons:check-mark" /></div>
        <span>
          Economic Growth - Our diverse range of financial products and services
          stimulate economic growth by facilitating investment, entrepreneurship
          and consumption</span
        >
      </div>
      <div class="Text">
        <div class="check-icon"><Icon icon="game-icons:check-mark" /></div>
        <span
          >Business Success - Our financial solutions empower businesses to
          overcome financial barriers, seize growth opportunities, and thrive in
          competitive markets.
        </span>
      </div>
      <div class="Text">
        <div class="check-icon"><Icon icon="game-icons:check-mark" /></div>
        <span
          >Financial Empowerment - Services that we offer empower individuals to
          manage financial challenges, pursue opportunities, and achieve their
          aspirations.
        </span>
      </div>
    </div>

    <div class="abuno"><img src="./sky2.jpg" alt="sky2" /></div>
  </div>
  <div class="aboutbottom">
    <div class="abdos">
      <img src="/crew.webp" alt="crew" />
    </div>
    <div class="abright">
      <div class="abhead">Why Choose Easyways Credit Limited:</div>
      <ul class="points">
      <li class="pointer">
        Customized Solutions: We understand that every client is unique, which
        is why we tailor our financial products to meet specific needs and
        circumstances.
      </li>
      <li class="pointer">
        Flexible Terms: Our flexible loan terms and repayment schedules ensure
        that clients can access the funds they need without undue financial
        strain.
      </li>
      <li class="pointer">
        Fast and Efficient Service: We prioritize efficiency and responsiveness,
        providing quick approval processes and timely disbursal of funds to
        support our clients' immediate needs.
      </li>
      <li class="pointer">
        Commitment to Financial Inclusion: We are dedicated to promoting
        financial inclusion by serving clients who may be underserved or
        excluded by traditional banking institutions.
      </li>
      <li class="pointer">
        Professional Expertise: Our team of experienced professionals is
        committed to providing expert guidance and support, helping clients make
        informed financial decisions and achieve their goals
      </li>
    </ul>
    </div>
  </div>
</div>

<style>
  .About {
    display: flex;
    flex-direction: column;

    font-family: "Open Sans", sans-serif;
  }
  .abouttop,
  .aboutbottom {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  .abuno {
    width: 50%;
    flex: 0 0 50%;
    position: relative;
    height: fit-content; /* Works for desktop */
  }
  .abuno img {
    width: 100%;
    display: block;
    height: auto;
  }
  .abuno::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 255, 0.2);
  }
  .abdos {
    width: 50%;
    flex: 0 0 50%;
    height: 100%;
   
  }
  .abdos img {
    width: 100%;
    display: block;
  }
  .abright {
    flex: 0 0 50%;
    padding: 0px 15px;
    padding-top: 30px;
    box-sizing: border-box;
    border-top: 1px solid rgb(122, 122, 122, 0.3);
    background-color: rgb(49, 55, 135);
    color: white;
    flex-direction: column;
    gap: 10px;
  }
  .abhead {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    margin-bottom: 30px;
    align-self: center;
    text-align: center;
  }
  .points{
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: start;
  }
  .pointer {
    font-size: 16px;
    line-height: 26px;
    font-weight: 400;
   
  }
  .ableft {
    flex: 0 0 50%;
    display: flex;
    flex-direction: column;
    background-color: black;
    color: white;
    padding: 0px 20px;
    padding-top: 35px;
    box-sizing: border-box;
    padding-bottom: 35px;
  }
  .head {
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    margin-bottom: 30px;
    align-self: center;
    text-align: center;
  }
  .Text {
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
  }
  .check-icon {
    font-size: 20px;
  }
  .Text span {
    margin-left: 20px;
    font-size: 17px;
    line-height: 28px;
    font-weight: 400;
  }
  @media (max-width: 768px) {
    .abouttop,
    .aboutbottom {
      width: 100%;
      display: flex;
      flex-direction: column;
      height: auto;
    }
    .aboutbottom {
      order: 1;
    }
    .ableft {
      padding: 0 20px;
      padding-top: 50px;
      padding-bottom: 50px;
    }
    .Text {
      margin-bottom: 10px;
    }
    .abuno {
      width: 100%;

      /* Match image height on mobile */
    }
    .abright {
      order: -1;
      text-align: center;
      padding-bottom: 30px;
    }
    .vision {
      margin-bottom: 40px;
    }
    .visionup {
      margin-right: 0px;
    }

    .abuno img {
      height: 300px;
      width: 100%; /* Ensure width fills container */
      object-fit: cover;
    }
    .abuno::after {
      height: 300px;
    }
    .abdos {
      display: none;
    }
  }
</style>
