<script>
  import Footer from "$lib/footer.svelte";
  import Frame from "$lib/frame.svelte";
  import Headerlite from "$lib/headerlite.svelte";
  import { onMount } from "svelte";

  let careers = [];
  let error = "";
  let loading = true;

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
      error = err.message || "Network issue";
      console.error(error);
    } finally {
      loading = false;
    }
  }

  onMount(async () => {
    await fetchCareers();
  });

  // Optional: Format timestamp to readable date
  function formatDate(timestamp) {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
   
  }
  function splitIntoList(text) {
    if (!text) return [];
    return text.split("\n").filter(item => item.trim().length > 0);
  }
</script>

<Headerlite />
<Frame title="Careers" />
<div class="career">
{#if loading}
  <div class="Loading">Loading careers...</div>
{:else if error}
  <div>Error: {error}</div>
{:else if careers.length === 0}
  <div class="loading">Jobs will be posted here, keep looking!</div>
{:else}
<div class="minititle">APPLY FOR JOB</div>
  {#each careers as career}
 
    <div class="career-card">
      <div><strong>Posted:</strong> {formatDate(career.date)}</div>
      <div><strong>Job Title:</strong> {career.job_title}</div>
      <div><strong>Job Location:</strong> {career.job_location}</div>
      <div><strong>Employment Type:</strong> {career.employment_type}</div>
      <div><strong>Experience Level:</strong> {career.experience_level}</div>
      <div><strong>About Role:</strong> {career.about_job}</div>
      <div><strong>Responsibilities:</strong></div>
      <ul>
        {#each splitIntoList(career.responsibilities) as responsibility}
          <li>{responsibility}</li>
        {/each}
      </ul>
      <div><strong>Requirements:</strong></div>
      <ul>
        {#each splitIntoList(career.requirements) as requirement}
          <li>{requirement}</li>
        {/each}
      </ul>
      <div><strong>Send cover letter and CV to:</strong> {career.email}</div>
      <div><strong>Apply By:</strong> {formatDate(career.deadline)}</div>
    </div>
  {/each}
{/if}
</div>

<Footer />

<style>
  .career{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .minititle{
    display: flex;
    align-self: center;
    padding-top: 30px;
    font-size: 19px;
    font-weight: 600;
    line-height: 27px;

  }
  .loading{
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
    flex-direction:column;
    gap: 6px;
    box-sizing: border-box;
  }
  .career-card div {
    margin-bottom: 5px;
  }
  .career-card strong {
    color: #333;
  }
</style>