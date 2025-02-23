<script>
    import Icon from "@iconify/svelte";
</script>

<div class="About">
  <div class="abouttop">
    <div class="abuno"><img src="./optimized/sky2.webp" alt="sky2"/></div>
    <div class="abright">
        <div class="vision">
            <div class="visionup">The Vision</div>
            <div class="visiondown">Provide financial solutions to MSMEs and individuals at the point of need in a timely manner.</div>
        </div>
        <div class="mission">
            <div class="missionup">The Mission</div>
            <div class="missiondown">Bridge the financial gap in both individual and MSMEs in our multi-cultural diversity economy, i.e. ensure prompt financial need intervention through quality appraisals and financial consultancy to our customers. EasyWaysCredit Limited is your strategic partner, committed to helping you in bridging financial needs. You can count on us to deliver and realize your strategic objectives.</div>
        </div>
    </div>
  </div>
  <div class="aboutbottom">
    <div class="ableft">
      <div class="head">Did You know that</div>
      <div class="Text">
        <div class="check-icon"><Icon icon="game-icons:check-mark" /></div>
        <span>We have loan solutions ranging from logbook loans, salary advance, working capital and asset finance that support all types of business to achieve their current and future goals.</span>
      </div>
      <div class="Text">
        <div class="check-icon"><Icon icon="game-icons:check-mark"/></div>
        <span>Easyways Credit management team and the board continues to mobilize resource/capital to ensure sufficient cash flow for its customers.</span>
      </div>
      <div class="Text">
        <div class="check-icon"><Icon icon="game-icons:check-mark"/></div>
        <span>The relationships built through the businesses we work with, enables us to have full understanding of the community we serve. Easyways credit can be called upon for talks, interns training and industry policy development to ensure empowered communities.</span>
      </div>
    </div>
    <div class="abdos">
      <img src="./optimized/coins.webp" alt="coins" />
    </div>
  </div>
</div>

<style>
    .About {
        display: flex;
        flex-direction: column;
        
        font-family: "Open Sans", sans-serif;
    }
    .abouttop, .aboutbottom {
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
        content: '';
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
    }
    .abdos img {
        width: 100%;
        display: block;
    }
    .abright {
        flex: 0 0 50%;
        padding: 0px 20px;
        padding-top: 30px;
        box-sizing: border-box;
        border-top: 1px solid rgb(122,122,122,0.3);
    }
    .vision {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }
    .visionup {
        font-size: 30px;
        font-weight: 800;
        line-height: 45px;
        color: rgb(49,55,135);
        text-align: center;
        margin-right: 22px;
    }
    .visiondown {
        font-size: 19px;
        line-height: 32px;
        font-weight: 400;
        color: rgb(75, 80, 145);
    }
    .mission {
        display: flex;
        flex-direction: column;
    }
    .missionup {
        font-size: 30px;
        font-weight: 800;
        line-height: 45px;
        color: rgb(49,55,135);
        text-align: center;
    }
    .missiondown {
        font-size: 19px;
        line-height: 32px;
        font-weight: 400;
        color: rgb(75, 80, 145);
    }
    .ableft {
        flex: 0 0 50%;
        display: flex;
        flex-direction: column;
        background-color: rgb(49,55,135);
        color: white;
        padding: 0px 20px;
        padding-top: 65px;
        box-sizing: border-box;
    }
    .head {
        font-size: 38px;
        font-weight: 700;
        line-height: 48px;
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
        font-size: 19px;
        line-height: 32px;
        font-weight: 400;
    }
    @media (max-width: 768px) {
        .About{
        
            margin-top: 70px;
        }
        .abouttop, .aboutbottom {
            width: 100%;
            display: flex;
            flex-direction: column;
            height: auto;
            

            
        }
        .aboutbottom{
            order:-1;
        }
        .ableft{
            padding: 0 20px;
            padding-top: 50px;
            padding-bottom: 50px;
            
            
        }
        .Text{
            margin-bottom: 10px;
        }
        .abuno {
            width: 100%;
            
             /* Match image height on mobile */
        }
        .abright{
            order: -1;
            text-align: center;
            padding-bottom: 30px;
            
        }
        .vision{
            margin-bottom: 40px;
        }
        .visionup{
            margin-right: 0px;
        }
        
        .abuno img {
            height: 300px;
            width: 100%; /* Ensure width fills container */
            object-fit: cover;
        }
        .abuno::after{
            height: 300px;
        }
        .abdos {
            display: none;
        }
    }
</style>