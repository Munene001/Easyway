<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import Footer from "$lib/footer.svelte";
  import Blogframe from "$lib/blogframe.svelte";
  import Headerlite from "$lib/headerlite.svelte";

  // Add this export to disable SSR for this page
  

  let newsItem = null;
  let error = null;
  let isLoading = true;

  async function loadNewsItem(id) {
    try {
      isLoading = true;
      const API_URL = `https://easywayscredit.co.ke/api/api/news/${id}`;
      const response = await fetch(API_URL, {
        method: "GET",
        headers: { Accept: "application/json" },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to fetch news: ${response.status}`);
      }
      
      const data = await response.json();
      if (!data || !data.title) {
        throw new Error('Invalid data format from API');
      }
      
      newsItem = data;
      error = null;
    } catch (err) {
      console.error("Error loading news:", err);
      error = err.message || "Failed to load news item";
      newsItem = null;
    } finally {
      isLoading = false;
    }
  }

  $: {
    if ($page.params.id) {
      loadNewsItem($page.params.id);
    }
  }

  function formatDate(timestamp) {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  function goBackToNews() {
    goto("/news");
  }
</script>

<Headerlite />

{#if isLoading}
  <div class="blog-page">
    <div class="not-found">Loading...</div>
  </div>
{:else if error}
  <div class="blog-page">
    <div class="error">{error}</div>
    <button class="back-button" on:click={goBackToNews}>Back to News</button>
  </div>
{:else if newsItem}
  <Blogframe
    title="Blog"
    description={newsItem.title}
    image="/optimized/news3.webp"
    date={formatDate(newsItem.date)}
    author={newsItem.author}
  />

  <div class="blog-page">
    <h1>{newsItem.title}</h1>
    <div class="meta">
      <span>{formatDate(newsItem.date)}</span> | <span>{newsItem.author}</span>
    </div>
    <div class="content">
      <p>{newsItem.content}</p>
    </div>
    <button class="back-button" on:click={goBackToNews}>Back to News</button>
  </div>
{/if}

<Footer />

<style>
  .blog-page {
    padding: 30px 200px;
    font-family: "Open Sans", sans-serif;
    font-size: 17px;
    line-height: 30px;
  }
  .blog-page h1 {
    color: rgb(55, 64, 176);
  }
  .meta {
    color: rgb(75, 80, 145);
  }
  .content p {
    white-space: pre-wrap;
  }
  @media (max-width: 768px) {
    .blog-page {
      padding: 10px 32px;
      display: block;
    }
  }
</style>