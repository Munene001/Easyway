<script>
  import Footer from "$lib/footer.svelte";
  import Frame from "$lib/frame.svelte";
  import Headerlite from "$lib/headerlite.svelte";
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";

  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

  /**
   * @type {string | any[]}
   */
  let careers = [];
  let error = "";
  let loading = true;

  async function fetchCareers() {
    try {
      const response = await fetch(`https://easywayscredit.co.ke/api/api/careers`, {
        method: "GET",
        headers: { Accept: "application/json" },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch careers");
      }
      careers = await response.json();
    } catch (err) {
      error = "Network issue";
      console.error(error);
    } finally {
      loading = false;
    }
  }

  onMount(async () => {
    await fetchCareers();
  });

  // Optional: Format timestamp to readable date
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
  /**
   * @param {string} text
   */
  function splitIntoList(text) {
    if (!text) return [];
    return text.split("\n").filter((item) => item.trim().length > 0);
  }
</script>

<Headerlite />
<Frame
  title="Careers"
  image="/optimized/careermiss.webp"
  description="Join Easyway and be part of a team driven by innovation, growth, and excellence."
/>
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
        <div style="margin-bottom: 10px;"><strong>Experience Level:</strong> {career.experience_level}</div>
        <div>
          <div class="label">
            <span><Icon icon="ix:about-filled" style="font-size:23px;" /></span
            ><strong>About Role:</strong>
          </div>
          <div class="about">{career.about_job}</div>
        </div>
        <div class="label">
          <span
            ><Icon
              icon="fluent-mdl2:responses-menu"
              style="font-size:21px;"
            /></span
          ><strong>Responsibilities:</strong>
        </div>
        <ul class="iconify-list">
          {#each splitIntoList(career.responsibilities) as responsibility}
            <li>
              <Icon icon="mdi:arrow-right" style= "color:chocolate; font-size:21px"/>{responsibility}
            </li>
          {/each}
        </ul>
        <div class="label">
          <span
            ><Icon icon="pajamas:requirements" style="font-size:21px;" /></span
          ><strong>Requirements:</strong>
        </div>
        <ul class="iconify-list">
          {#each splitIntoList(career.requirements) as requirement}
            <li>
              <Icon icon="mdi:arrow-right" style= "color:chocolate; font-size:21px "/>
              {requirement}
            </li>
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
  .career {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .minititle {
    display: flex;
    align-self: center;
    padding-top: 30px;
    font-size: 19px;
    font-weight: 600;
    line-height: 27px;
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
    background-color: rgb(240, 237, 233);

    padding: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    font-family: "Open Sans", sans-serif;
    display: flex;
    flex-direction: column;
    gap: 8px;
    box-sizing: border-box;
  }
  .career-card div {
    margin-bottom: 5px;
  }
  .career-card strong {
    color: #333;
  }
  .label {
    background-color: rgb(18, 34, 68);
    color: white;
    height: 40px;
    display: flex;
    align-items: center;
    width: 95%;
    padding-left: 3px;
  }
  .label strong {
    color: white;
  }
  .label span {
    margin-right: 8px;
    font-size: 16px;
    align-self: center;
  }
  .about {
    margin-top: 20px;
  }
  .iconify-list {
    list-style: none;

  }
  .iconify-list li {
  display: flex;
  align-items: center; /* Align icon and text vertically */
  margin-bottom: 8px; /* Space between list items */
}

</style>
