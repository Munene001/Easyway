<script>
  import { onMount } from "svelte";

  /**
   * @type {string | any[]}
   */
  let news = [];
  let error = "";
  let loading = true;
  let successmessage = "";

  async function fetchNews() {
    try {
      const response = await fetch(`https://easywayscredit.co.ke/api/api/news`, {
        method: "GET",
        headers: { Accept: "application/json" },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch news");
      }
      news = await response.json();
    } catch (err) {
      error = "Network issue - check if server is running";
      console.error(err);
    } finally {
      loading = false;
    }
  }

  /**
   * @param {any} id
   */
  async function deleteNews(id) {
    try {
      const response = await fetch(`https://easywayscredit.co.ke/api/api/news/${id}`, {
        method: "DELETE",
        headers: { Accept: "application/json" },
      });
      if (!response.ok) {
        throw new Error("Failed to delete news");
      }
      console.log(`News ${id} deleted from database. Refresh to see changes`);
      successmessage = `News ${id} deleted successfully.Refresh to see changes`;
    } catch (err) {
      error = "Error deleting News";
      console.error("Delete error:", err);
      alert(error);
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

<div class="news">
  {#if loading}
    <div class="Loading">Loading News...</div>
  {:else if error}
    <div>Error: {error}</div>
  {:else if news.length === 0}
    <div class="loading">No News</div>
  {:else}
    <div class="minititle">NEWS POSTED</div>
    {#each news as news}
      <div class="career-card">
        <div><strong>Posted:</strong> {formatDate(news.date)}</div>
        <div><strong>Job Title:</strong> {news.title}</div>
        <div><strong>Apply By:</strong> {news.author}</div>
        <button class="delete" onclick={() => deleteNews(news.id)}
          >Delete</button
        >
      </div>
      {#if successmessage}
        <div class="success-message">{successmessage}</div>
        <!-- Display success message -->
      {/if}
    {/each}
  {/if}
</div>

<style>
  .news {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-bottom : 40px solid rgb(18, 34, 68);
  }
  .minititle {
    display: flex;
    align-self: center;
    padding-top: 30px;
    font-size: 19px;
    font-weight: 600;
    line-height: 27px;
  }
  .delete {
    background-color: rgb(55, 64, 176);
    color: white;
    border: none;
    width: 100px;
    font-size: 16px;
    font-weight: 500;

    line-height: 30px;
  }
  .loading {
    padding: 30px 20px;
    box-sizing: border-box;
    display: flex;
    align-self: center;
    font-size: 19px;
    font-weight: 600;
    line-height: 27px;
  }
  .career-card {
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    font-family: "Open Sans", sans-serif;
    display: flex;
    flex-direction: column;
    gap: 6px;
    box-sizing: border-box;
  }
  .career-card div {
    margin-bottom: 5px;
  }
  .career-card strong {
    color: #333;
  }
  .success-message {
    color: green;
    font-size: 18px;
    margin-top: 0px;
    align-self: center;
  }
</style>
