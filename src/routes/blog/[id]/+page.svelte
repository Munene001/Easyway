<script>
  import { goto } from "$app/navigation";
  import Frame from "$lib/frame.svelte";
  import Newspost from "$lib/newspost.svelte";
  import Footer from "$lib/footer.svelte";
  import Blogframe from "$lib/blogframe.svelte";
  import Headerlite from "$lib/headerlite.svelte";

  export let data;

  let newsItem = data.newsItem;
  let error = data.error || "";

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

  // Navigation back to the news list page
  function goBackToNews() {
    goto("/news"); // Adjust the route if your news list page is at a different path
  }
</script>
<Headerlite/>

<Blogframe title="Blog" description={newsItem.title} image="/news3.jpg" date = {newsItem.date} author = {newsItem.author}/>
<div class="blog-page">
  {#if error}
    <div class="error">{error}</div>
  {:else if newsItem}
    <h1>{newsItem.title}</h1>
    <div class="meta">
      <span>{formatDate(newsItem.date)}</span> | <span>{newsItem.author}</span>
    </div>
    <div class="content">
      <p>{newsItem.content}</p>
      <!-- Assuming "content" field exists -->
    </div>
    <button class="back-button" on:click={goBackToNews}>Back to News</button>
  {:else}
    <div class="not-found">News not found</div>
  {/if}
</div>
<Footer/>

<style>
  .blog-page{
    padding: 30px 200px;
    font-family: "Open Sans", sans-serif;
    font-size: 17px;
    line-height: 30px;
    
  }
  .blog-page h1{
    color:rgb(55, 64, 176);
   
  }
  .meta{
    color: rgb(75, 80, 145);
    
  }
  .content p {
    white-space: pre-wrap;
     /* Preserves newlines and spaces */
  }
  @media(max-width:768px){
    .blog-page{
      padding:10px 32px;
      display: block;
    }

  }
</style>
