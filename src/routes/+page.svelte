<script>
  import Headerlite from "$lib/headerlite.svelte";
  import Header from "$lib/header.svelte";
  import Services from "$lib/services.svelte";
  import About from "$lib/about.svelte";
  import Stats from "$lib/stats.svelte";
  import Values from "$lib/values.svelte";
  import Footer from "$lib/footer.svelte";
  import Video from "$lib/video.svelte";
</script>

<Headerlite />

<Header />
<Video/>
<div class="prodtitle" id="service-section">Our Products</div>
<div class="products">
  <Services Turnaround=" Under 6 hours" />
  <Services
    src="/optimized/car-loan.webp"
    title="Logbook Loans"
    description="Logbook loan also known as logbook lending, are secured loans using your vehicle’s logbook."
    Turnaround=" Within 24 hours"
    page = "/logbookloan"
  />
  <Services
    src="optimized/salary.webp"
    title="Salary Loans"
    description="A Salary Advance is a short-term loan advanced to a salaried customer depending on the bank’s profile of them, to help them meet their emergency need.
    "
    Turnaround=" Under 6 Hours"
    page = "/salaryloan"
  />
  <Services
  src = "/optimized/asset-management.webp"
    title="Asset Finance Loans"
    description="Tailored financing for the acquisition of
productive assets, enabling businesses and individuals to enhance productivity."
page = "/assetfinanceloan"
  />
  
  <Services
    src="/optimized/stock-investment.webp"
    title="Other Services"
    description="We have working capital and asset finance that support all types of businesses."
    
  />
 
</div>

<About />
<Stats />
<div class="holdertitle">Our Core Values</div>
<div class="holder">
  <Values />
  <Values
    icon="fluent:arrow-growth-20-regular"
    title="Improvement"
    description="We are focused on measuring the output of our business then modifying the process to increase the output."
  />
  <Values
    icon="tabler:report-search"
    title="Accountability"
    description="We are a team that accepts responsibility for honest and ethical conduct towards our clients."
  />
  <Values
    icon="ri:honour-fill"
    title="Integrity"
    description="We are focused on conducting business practices by following a moral and ethical framework. It involves honesty, consistency, respect and accountability."
  />
  <Values
    icon="fluent-mdl2:party-leader"
    title="Leadership"
    description="We have a team of motivated staff that are working towards reaching the vision and mission of the company."
  />
  <Values
    icon="ic:round-diversity-3"
    title="Diversity"
    description="We attend to clients from different religions, languages, abilities, professional, socioeconomic and educational backgrounds."
  />
  <Values
    icon="mdi:customer-service"
    title="Customer Service"
    description="We are here to provide support, assistance and advice to our customers before and after accessing our services."
  />
  <Values
    icon="icon-park-outline:book-open"
    title="Transparency"
    description="We have active communication channels used to share information amongst our clients and stake holders on important matters both internally and externally."
  />
</div>
<Footer />

<style>
  .products {
    width: 100%;
    padding: 40px 15px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3vw;
    box-sizing: border-box;
    background-color: rgb(247, 247, 247);
  }
  .prodtitle {
    font-size: 44px;
    font-weight: 600;
    line-height: 53px;
    font-family: "Open Sans", sans-serif;
    display: flex;
    justify-content: center;
    padding-top: 20px;
    color: black;
    background-color: rgb(247, 247, 247);
  }
  .holdertitle {
    width: 100%;
    text-align: center;
    background-color: rgb(231, 224, 224);
    padding-top: 49px;
    font-size: 35px;
    font-weight: 600;
    line-height: 45.8px;
    color: rgb(69, 82, 226);
    font-family: "Open Sans", sans-serif;
  }
  .holder {
    width: 100%;
    background-color: rgb(231, 224, 224);
    padding: 30px 20px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2vw;
  }

  @media (max-width: 768px) {
    .products {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      padding: 0px 23px;

      padding-bottom: 40px;
      gap: 49px;
    }
    .prodtitle {
      color: black;
      margin-top: 3px;
      font-size: 25px;
    }
    .holdertitle {
      font-size: 25px;
      line-height: 35px;
      color: rgb(17, 20, 54);
      padding-top: 50px;
    }
    .holder {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
    }
  }
</style>
