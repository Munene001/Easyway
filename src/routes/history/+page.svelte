<script>
  import Headerlite from "$lib/headerlite.svelte";
  import Frame from "$lib/frame.svelte";
  import Services from "$lib/services.svelte";
  import Footer from "$lib/footer.svelte";
  
</script>

<Headerlite />
<Frame title="History" description="Learn our Origin" />

<div class="History">
  <p>
    Easyways credit was incorporated in Kenya 4th December 2023 as a credit only
    company. The initial capital investment of 2,000,000Kes and with three Board
    of Directors and three members of staff. Initially the company used to
    operate as CARLGE ENTERPRISE which was registered on the 24 May 2013 which
    was for general supply businesses. Later on, it became CARLGE ENTERPRISE LTD
    before which was incorporated on 21st of July 2023.
  </p>

 <p> Our lending journey began on 10th February 2021 in small scale till and when
  we converted CARLGE ENTERPRISE into CARLGE ENTERPRISE LTD and eventually
  acquired Easyways credit certificate 2023. ECL is a Credit-only-Microfinance
  that is based in Nairobi. ECL was an idea whose genesis was when the founders
  started advancing small loan facilities payable within a month to his friends
  in small businesses at an affordable interest rate. Their friends referred
  them to other business owners and the customer base continued to increase
  until they decided to start Easyways Credit Limited company to support
  existing customers and upscale to impact on more customers.</p>
  <p> ECL envisions
  itself as an enabler and a lender that supports Kenyans in small enterprises
  to find capital for business and a platform that markets them and their
  products locally and internationally. ECL is not getting into this space for
  unjust enrichment but in ensuring that it creates a lasting solution that can
  be emulated by other lenders.</p>
</div>
<div class="prodtitle" id="service-section">Our Products</div>
<div class="products" >
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
<Footer/>




<style>
  .History {
    padding: 30px 200px;
    font-family: "Open Sans", sans-serif;
    font-size: 17px;
    line-height: 30px;
    gap: 20px;
  }
  .products {
    width: 100%;
    padding: 40px 15px;
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
    
  }
</style>
