<script>
    import {goto} from '$app/navigation';

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
<div class="blog-page">
    {#if error}
      <div class="error">{error}</div>
    {:else if newsItem}
      <h1>{newsItem.title}</h1>
      <div class="meta">
        <span>{formatDate(newsItem.date)}</span> | <span>{newsItem.author}</span>
      </div>
      <div class="content">
        <p>{newsItem.content}</p> <!-- Assuming "content" field exists -->
      </div>
      <button class="back-button" on:click={goBackToNews}>Back to News</button>
    {:else}
      <div class="not-found">News not found</div>
    {/if}
  </div>
