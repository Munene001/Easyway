<script>
  import { onMount } from "svelte";

  /**
   * @type {string | any[]}
   */
  let careers = [];
  let error = "";
  let loading = true;
  let successMessage = ""

  async function fetchCareers() {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/careers", {
        method: "GET",
        headers: { Accept: "application/json" },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch careers");
      }
      careers = await response.json();
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
  async function deleteCareer(id) {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/careers/${id}`, {
        method: "DELETE",
        headers: { Accept: "application/json" },
      });
      if (!response.ok) {
        throw new Error("Failed to delete career");
      }
      console.log(`Career ${id} deleted from database. Refresh to see changes`);
      successMessage = `Career ${id} deleted successfully.Refresh to see changes`;
    } catch (err) {
      error = "Error deleting career";
      console.error("Delete error:", err);
      alert(error);
    }
  }

  onMount(async () => {
    await fetchCareers();
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

<div class="career">
  {#if loading}
    <div class="Loading">Loading careers...</div>
  {:else if error}
    <div>Error: {error}</div>
  {:else if careers.length === 0}
    <div class="loading">Jobs will be posted here, keep looking!</div>
  {:else}
    <div class="minititle">JOBS POSTED</div>
    {#each careers as career}
      <div class="news-card">
        <div><strong>Posted:</strong> {formatDate(career.date)}</div>
        <div><strong>Job Title:</strong> {career.job_title}</div>
        <div><strong>Apply By:</strong> {formatDate(career.deadline)}</div>
        <button class="delete" onclick={() => deleteCareer(career.id)}
          >Delete</button
        >
      </div>
      {#if successMessage}
      <div class="success-message">{successMessage}</div> <!-- Display success message -->
    {/if}
    {/each}
  {/if}
</div>

<style>
  .career {
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
  .news-card {
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
  .news-card div {
    margin-bottom: 5px;
  }
  .news-card strong {
    color: #333;
  }
  .success-message {
    color: green;
    font-size: 18px;
    margin-top: 0px;
    align-self: center;
  }
</style>
