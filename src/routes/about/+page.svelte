<script>
  import Frame from "$lib/frame.svelte";
  import Headerlite from "$lib/headerlite.svelte";
  import Blackandblue from "$lib/blackand blue.svelte";
  import Icon from "@iconify/svelte";
  import Team from "$lib/team.svelte";
  import Footer from "$lib/footer.svelte";
</script>

<Headerlite />
<Frame title="About Us" image="/crew3.webp"  description = "Learn more about our company's team, goals and impact on society"/>
<div class="first">
  <div class="actitle">
    <div>Know what we are about and what we represent</div>
    <span><Icon icon="ic:baseline-roundabout-right" /></span>
  </div>
  <div class="actext">
    <p>
      Easyway is a dynamic and innovative credit-only institution dedicated
      to providing tailored financial solutions to Micro, Small and Medium-sized
      Enterprises (MSMEs) and individuals.
    </p>
    <p>
      With a commitment to fostering financial inclusion and supporting economic
      growth, Easyways Credit Limited offers a diverse range of products and
      services designed to meet the unique needs of its clients.
    </p>
  </div>
</div>

<Blackandblue />
<Team/>
<Footer/>

<style>
  .first {
    background-color:white;
    display: flex;
    flex-direction: row;
    font-family: "Open Sans", sans-serif;
    padding: 30px 20px;
    box-sizing: border-box;
    align-items: center;
  }
  .actitle {
    flex: 0 0 50%;
    font-size: 33px;
    font-weight: 400;
    line-height: 39.6px;
    color: rgb(56, 56, 56);
    box-sizing: border-box; 
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    text-align: center;
  }
  .actitle span {
    display: flex;
    margin-left: 30px;
    font-size: 100px;
    color: blue;
  }
  .actext {
    flex: 0 0 50%;
    font-size: 19px;
    font-weight: 400;
    line-height: 32.3px;
    color: rgb(24, 23, 23);
    box-sizing: border-box;
  }
  @media(max-width:768px){
    .actext{
        flex: 0 0 100%;
    }
    .actitle{
        display: none;
    }
  }
</style>
