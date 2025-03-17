<script>
  import "iconify-icon";

  export let page = "Business Working Capital Loans";
  export let title = "Business Working Capital Loans";
  export let p1 =
    "Flexible financing solutions to help SMEs manage cash flow, purchase inventory and seize growth opportunities";
  export let p2 =
    "Our working capital loans provide businesses with the liquidity needed to cover dayto-day operational expenses, manage inventory, fulfil orders and seize growth opportunities. By ensuring smooth cash flow management, these loans enable businesses to operate efficiently, meet customer demand, and pursue expansion initiatives. ";

  export let p3 =
    "This added liquidity contributes to economic stability and growth by fuelling business activities, job creation and overall productivity";
</script>

<div class="pager">
  <div class="smallnav">
    <div class="small"><a href="/" aria-label="home"> .Easyway</a></div>
    <div class="small"><a href="/#service-section" aria-label="home"> .Services</a></div>
    <div class="small"> .{page}</div>
  </div>
  <div class="bodymass">
    <div class="left">
      <div class="nav">
        <div class="head">OUR SERVICES</div>
        <div class="routeitem">
          <a href="/businessloan" aria-label="Go to businessloan">
            Business Loans
          </a>
        </div>
        <div class="routeitem">
          <a href="/salaryloan" aria-label="Go to salary loan">
            Salary Loans
          </a>
        </div>
        <div class="routeitem">
          <a href="/logbookloan" aria-label="Go to history"> Logbook Loans </a>
        </div>
        <div class="routeitem">
          <a href="/assetfinanceloan" aria-label="Go to career">
            Asset Finance Loan
          </a>
        </div>
      </div>
      <div class="container">
        <div class="cont1">Need Help ?</div>
        <div class="cont2">
          Please feel free to contact us. We will get back to you as soon as
          possible
        </div>
        <div>
          <Iconify-icon class="iconify" icon="ic:baseline-phone">
            width="27" height="27"
          </Iconify-icon>

          <p>
            <span>+254734641449</span><br />
            <span>+254 786189755</span><br />
            <span>+254100974188</span>
          </p>
        </div>
        <div class="email">info@easywayscredit.co.ke</div>
      </div>
    </div>
    <div class="right">
      <div class="top">
        {title}
      </div>
      <div class="bottom">
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
      </div>
      <div class="button">
        <button class="apply"
          ><a href="/contact" aria-label="contact"> Apply now </a></button
        >
      </div>
    </div>
  </div>
</div>

<style>
  .pager {
    background-color: white;
    font-family: "Open Sans", sans-serif;
    padding-bottom: 20px;
  }
  .small {
    color: rgb(94, 94, 94);
    font-family: "Open Sans", sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 25.5px;
  }
  .small a {
    text-decoration: none;
    color: black;
    font-family: "Open Sans", sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 25.5px;
    color: #366cd6;
  }
  .smallnav {
    height: 73.5px;
    display: flex;
    align-items: center;
    gap: 18px;
    padding: 0px 40px;
    box-sizing: border-box;
    background-color: rgb(245, 245, 245);
  }
  .bodymass {
    display: flex;
    flex-direction: row;
  }
  .left {
    display: flex;
    flex-direction: column;
    flex: 0 0 25%;
    padding-left: 40px;
    box-sizing: border-box;
    gap: 40px;
  }
  .nav {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 15px;
    padding: 20px 0px;
  }
  .head {
    font-size: 24px;
    font-weight: 700;
    line-height: 28.8px;
    color: rgb(56, 56, 56);
  }
  .container {
    border: 2px solid rgb(3, 3, 80);

    box-sizing: border-box;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .cont1 {
    font-size: 19px;
    font-weight: 600;
    line-height: 22.8px;
    color: rgb(62, 68, 148);
  }
  .cont2 {
    font-size: 13px;
    font-weight: 400;
    line-height: 22.1px;
    color: rgb(59, 59, 59);
  }
  .email {
    font-size: 16px;
    font-weight: 400;
    line-height: 27.2px;
  }

  .routeitem a {
    text-decoration: none;
    color: black;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: rgb(17, 25, 185);
  }
  .iconify {
    color: chocolate;
  }
  .right {
    flex: 0 0 75%;
    display: flex;
    flex-direction: column;
    padding: 20px 40px;
    box-sizing: border-box;
  }
  .top {
    height: 180px;
    font-size: 50px;
    font-weight: 600;
    line-height: 62px;
    color: rgb(62, 68, 148);
    display: flex;
    align-items: center;
    background-color: rgb(233, 228, 228);
    padding-left: 20px;
    box-sizing: border-box;
  }
  .bottom {
    font-size: 16px;
    font-weight: 400;
    line-height: 27.2px;
    padding: 0 15px;
    box-sizing: border-box;
  }
  .apply {
    font-size: 15px;
    padding: 10px;
    background-color: blue;
    border: none;
    border-radius: 5px;
    color: white;
  }
  .apply:hover {
    background-color: gray;
  }
  .apply a {
    color: white;
    text-decoration: none;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    .bodymass {
      display: flex;
      flex-direction: column;
    }
    .smallnav{
      height: 90px;
      display: flex;
      justify-content: space-evenly;
    }
    .left {
      flex: 0 0 100%;
      padding: 10px 15px ;
      gap: 20px;
    }
    .right {
      flex: 0 0 100%;
      order: -1;
      padding: 0px 0px;
      padding-bottom: 20px;
    }
    .top {
      height: 250px;
      font-size: 50px;
      font-weight: 600;
      line-height: 62px;
      color: rgb(62, 68, 148);
      display: flex;
      align-items: center;
      background-color: rgb(233, 228, 228);
      padding-left: 20px;
      box-sizing: border-box;
    }
    .button{
      padding: 0px 15px;
    }
  }
</style>
