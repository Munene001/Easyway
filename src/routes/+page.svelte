<script>
  import Headerlite from "$lib/headerlite.svelte";
  import Header from "$lib/header.svelte";
  import Services from "$lib/services.svelte";
  import About from "$lib/about.svelte";
  import Stats from "$lib/stats.svelte";
  import Values from "$lib/values.svelte";
  import Footer from "$lib/footer.svelte";
</script>

<Headerlite />

<Header />
<div class="prodtitle">Our Products</div>
<div class="products">
  <Services Turnaround=" Under 6 hours" />
  <Services
    src="/car-loan.png"
    title="Logbook Loans"
    description="Logbook loan also known as logbook lending, are secured loans using your vehicle’s logbook."
    Turnaround=" Within 24 hours"
  />
  <Services
    src="/salary.png"
    title="Salary Loans"
    description="A Salary Advance is a short-term loan advanced to a salaried customer depending on the bank’s profile of them, to help them meet their emergency need.
    "
    Turnaround=" Under 6 Hours"
  />
  <Services
    src="/stock-investment.png"
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
<Footer/>

<style>
  .products {
    width: 100%;
    padding: 70px 15px;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
  }
  .prodtitle {
    font-size: 44px;
    font-weight: 600;
    line-height: 53px;
    font-family: "Open Sans", sans-serif;
    display: flex;
    justify-content: center;
    padding-top: 30px;
    color: rgb(122, 122, 122);
    
  }.holdertitle{
    width: 100%;
    text-align: center;
    background-color: rgb(231, 224, 224);
    padding-top: 49px;
    font-size: 35px;
    font-weight: 600;
    line-height: 45.8px;
    color:  rgb(69, 82, 226);
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
    gap: 4vw;
  }

  @media (max-width: 768px) {
    .products {
      display: flx;
      flex-direction: column;
      padding: 15px 23px;
      gap: 60px;
    }
    .prodtitle {
      color: rgb(122, 122, 122);
      margin-top: 3px;
      font-size: 22px;
    }
    .holdertitle{
        font-size: 25px;
        line-height: 35px;
        color:  rgb(17, 20, 54);
        padding-top: 50px;

    }
    .holder{
        display: grid;
        grid-template-columns: repeat(1, 1fr);

    }
  }
</style>
