<script>
  import Frame from "$lib/frame.svelte";
  import Footer from "$lib/footer.svelte";
  import Headerlite from "$lib/headerlite.svelte";
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";
  import { goto } from "$app/navigation";
  import Services from "$lib/services.svelte";
  import Right from "$lib/right.svelte";

  import Contactform from "$lib/contactform.svelte";

  /**
   * @type {string | any[]}
   */
  let news = [];
  let error = "";
  let loading = true;

  /**
   * @param {any} id
   */
  function openBlogpage(id) {
    if (!id) {
      console.error("news id is missing");
      return;
    }
    goto(`/blog/${id}`); // Use backticks for interpolation
    console.log("passed the id", id);
  }

  async function fetchNews() {
    try {
      const response = await fetch(`https://easywayscredit.co.ke/api/api/news`, {
        method: "GET",
        headers: { Accept: "application/json" },
      });
      if (!response.ok) {
        throw new Error("failed to fecth News");
      }
      news = await response.json();
    } catch (error) {
      error = "Network issue";
      console.error(error);
    } finally {
      loading = false;
    }
  }
  onMount(async () => {
    await fetchNews();
  });
  /**
   * @param {string | number | Date} timestamp
   */
  function formatDate(timestamp) {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
</script>

<Headerlite />
<Frame
  title="News"
  description="Stay informed and empowered with our latest insights on loan options and smart borrowing strategies."
  image="/optimized/news1.webp"
/>
<div class=" News">
  <div class="left">
    {#if loading}
      <div class="Loading">Loading News...</div>
    {:else if error}
      <div>Error: {error}</div>
    {:else if news.length === 0}
      <div class="loading">No Blog Posts Available!</div>
    {:else}
    
      {#each news as news}
        <div class=" newscard">
          <div class="newstitle">{news.title}</div>
          <div class="sub">
            <div class="zero">
              <span><Icon icon="fluent-mdl2:date-time" /></span>{formatDate(
                news.date
              )}
            </div>
            <div class="zero">
              <span><Icon icon="arcticons:dekd-writer" /></span>{news.author}
            </div>
          </div>
          <div class="paragraph"><p>{news.snippet}</p></div>
          <button class="Read" onclick={() => openBlogpage(news.id)}
            >Read More</button
          >
        </div>
      {/each}
    {/if}
  </div>
  <div class="right">
    <div class="righttitle">Tips on securing a loan</div>
   

    <Right />
    <Right
      icon="lineicons:amazon-pay"
      title="Borrow what You can repay"
      point1="Assess Your Income – Ensure you can handle monthly repayments without financial strain."
      point2="Avoid Overborrowing – Borrow only what’s necessary to prevent excessive debt."
      point3="Have a Repayment Plan – Set up a strategy to pay on time and avoid late fees."
    />
    <Right
      icon="simple-icons:trustpilot"
      title="Work with a trusted Lender"
      point1="Check Credibility – Research the lender’s reputation, reviews, and legitimacy"
      point2=" Avoid Hidden Fees – Ensure transparency in loan agreements with no surprise charges."
      point3="Seek Customer Support – Choose a lender that offers guidance and answers your questions."
    />
  </div>
</div>
<Footer />

<style>
  .News {
    background-color: rgb(247, 247, 247);
    display: flex;
    flex-direction: row;
    font-family: "Open Sans", sans-serif;
  }
  .left {
    flex: 0 0 65%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 45px 30px;
    box-sizing: border-box;
  }
  .right {
    flex: 0 0 35%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 30px 20px;
    box-sizing: border-box;
  }
  .righttitle {
    align-self: center;
    font-size: 29px;
    line-height: 30px;
    color:rgb(75, 80, 145);
  }
  .newscard {
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 25px 20px;
  }
  .newstitle {
    font-size: 38px;
    font-weight: 600;
    line-height: 45.6px;
    color: rgb(52, 52, 52);
    display: flex;
    align-self: center;
  }
  .sub {
    display: flex;
    flex-direction: row;
    gap: 10px;
    font-size: 13px;
    font-weight: 700;
    line-height: 18.7px;
    color: rgb(149, 149, 149);
    margin-left: 20px;
    margin-top: 10px;
  }
  .zero {
    display: flex;
    gap: 3px;
  }
  .paragraph {
    font-size: 16px;
    font-weight: 400;
    line-height: 27.2px;
    color: rgb(75, 80, 145);
  }
  .Read {
    background-color: rgb(55, 64, 176);
    font-size: 16px;
    width: 130px;
    color: white;
    padding: 17px;
    border: none;
    font-weight: 700;
  }
  @media (max-width: 768px) {
    .right {
      display: none;
    }
    .left {
      flex: 0 0 100%;
      display: flex;
      justify-content: center;
      padding: 30px 0px;
    
    }
    .newscard {
      display: flex;
      justify-self: center;
      
      
    }
  }
</style>
