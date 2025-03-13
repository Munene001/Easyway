<script>
  import { goto } from "$app/navigation";
  import Icon from "@iconify/svelte";

  export let icon = "mingcute:choice-line";
  export let title = "Choose the right loan type";
  export let point1 =
    "Compare Options – Personal, business, or salary advance? Pick what suits your needs best.";
  export let point2 =
    "Check Interest Rates – Look for loans with competitive rates to avoid high repayment costs.";
  export let point3 =
    "Understand Terms – Read the fine print on repayment periods, penalties, and conditions.";
</script>

<div class="service" style="scroll-behaviour:smooth">
  <div class="service-left"><Icon icon = {icon} style = "font-size:70px"/></div>
  <div class="service-right">
    <div class="title">{title}</div>

    <div class="right-list">
      <div>
        <Icon icon="mdi:arrow-right" style="color:chocolate; font-size:29px " />
        {point1}
      </div>
      <div>
        <Icon icon="mdi:arrow-right" style="color:chocolate; font-size:29px " />
        {point2}
      </div>
      <div>
        <Icon icon="mdi:arrow-right" style="color:chocolate; font-size:29px " />
        {point3}
      </div>
    </div>
  </div>
</div>

<style>
  .service {
    display: flex;
    flex-direction: column;
    font-family: "Open Sans", sans-serif;
    padding: 10px 15px;
    background-color: white;
    gap: 10px;
  }
  .service-left {
    width: 72px;
    height: 70px;
    margin-right: 15px;
    align-self: center;
    
   
  }

  .service-right {
    display: flex;
    flex-direction: column;
  }
  .title {
    font-size: 16px;
    font-weight: 600;
    line-height: 27.1px;
    color: rgb(24, 39, 248);
    align-self: center;
    margin-bottom: 10px;
    
  }
  .right-list {
    font-size: 14px;
    color: rgb(44, 46, 73);
  }
  .right-list div {
    display: flex;
    align-items: center; /* Align icon and text vertically */
    margin-bottom: 10px; 
    gap: 10px;/* Space between list items */
   
  }

  @media (max-width: 768px) {
    .service {
      display: flex;
      gap: 20px;
    }
   
    .title {
      margin-bottom: 20px;
      font-size: 40px;
    }
  }
</style>
