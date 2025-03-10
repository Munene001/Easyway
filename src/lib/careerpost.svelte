<script>
  import { submitCareer } from "./api.js";
  let job_title = "";
  let job_location = "";
  let employment_type = "";
  let experience_level = "";
  let about_job = "";
  let responsibilities = "";
  let requirements = "";
  let email = "";
  let deadline = "";

  let successMessage = "";
  let generalError = "";

  /**
   * @param {{ preventDefault: () => void; target: any; }} event
   */
  async function handleSubmit(event) {
    event.preventDefault();

    successMessage = "";
    generalError = "";

    const form = event.target;
    if (!form.checkValidity()) {
      alert("Required fields havenot been filled");
      return;
    }

    const careerData = {
      job_title,
      job_location,
      employment_type: employment_type || null,
      experience_level: experience_level || null,
      about_job,
      responsibilities,
      requirements,
      email,
      deadline,
    };
    const result = await submitCareer(careerData);
    if (result.success) {
      successMessage = "Career submitted successfully";
      job_title = "";
      job_location = "";
      employment_type = "";
      experience_level = "";
      about_job = "";
      responsibilities = "";
      requirements = "";
      email = "";
      deadline = "";
    } else {
      generalError = result.error || "error submitting feedback";
      alert(generalError);
    }
  }
</script>

<div class="careerpost">
  <div class="title">POST JOB</div>
  <form onsubmit={handleSubmit}>
    <div>
      <label for="job_title">Job Title:</label>
      <input type="text" placeholder="" bind:value={job_title} required />
    </div>
    <div>
      <label>
        <input
          type="radio"
          name="job_location"
          value="onsite"
          bind:group={job_location}
          required
        />Onsite
      </label>
      <label>
        <input
          type="radio"
          name="job_location"
          value="online"
          bind:group={job_location}
          required
        />Online
      </label>
    </div>
    <div>
      <label>
        <input
          type="radio"
          name="employment_type"
          value="fulltime"
          bind:group={employment_type}
          required
        />Fulltime
      </label>
      <label>
        <input
          type="radio"
          name="employment_type"
          value="parttime"
          bind:group={employment_type}
          required
        />Parttime
      </label>
      <label>
        <input
          type="radio"
          name="employment_type"
          value="internship"
          bind:group={employment_type}
          required
        />Internship
      </label>
    </div>
    <div>
      <label>
        <input
          type="radio"
          name="experience_level"
          value="entry_level"
          bind:group={experience_level}
          required
        />Entry Level
      </label>
      <label>
        <input
          type="radio"
          name="experience_level"
          value="mid_level"
          bind:group={experience_level}
          required
        />Mid Level
      </label>
      <label>
        <input
          type="radio"
          name="experience_level"
          value="senior"
          bind:group={experience_level}
          required
        />Senior
      </label>
    </div>
    <div class="detailsblock">
      <div class="details">
        <label for="about_job">About Role</label>
        <textarea
          placeholder=""
          rows="8"
          cols="8"
          bind:value={about_job}
          required
        ></textarea>
      </div>
      <div class=" details">
        <label for="responsibilities">Responsibilities:</label>
        <textarea
          placeholder="Ensure one responisbility per line"
          rows="8"
          cols="8"
          bind:value={responsibilities}
          required
        ></textarea>
      </div>
      <div class="details">
        <label for="requirements">Requirements:</label>
        <textarea
          placeholder="Ensure one requirement per line"
          rows="8"
          cols="8"
          bind:value={requirements}
          required
        ></textarea>
      </div>
    </div>
    <div>
      <label for="Email">Email where they submit CV and cover letter:</label>
      <input type="text" placeholder="" bind:value={email} required />
    </div>
    <div>
      <label for="deadline">Apply before:</label>
      <input type="date" placeholder="" bind:value={deadline} required />
    </div>
    <button type="submit">Make Post</button>
    {#if successMessage}
      <p class="success">{successMessage}</p>
    {/if}
    {#if generalError}
      <p class="error">{generalError}</p>
    {/if}
  </form>
</div>

<style>
  .careerpost {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .title {
    display: flex;
    align-self: center;
    font-size: 18px;
    line-height: 32px;
    font-weight: 700;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 8px;

    font-family: "Open Sans", sans-serif;
  }
  label {
    font-size: 17px;
    line-height: 25px;
    font-weight: 500;
    color: rgb(1, 1, 19);
  }
  input {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }
  input[type="text"] {
    height: 37px;
    width: 290px;
  }

  .detailsblock {
    display: flex;
    flex-direction: row;
    padding: 20px 20px;
    gap: 20px;
  }
  .details {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .details textarea {
    width: 350px;
    height: 250px;
    padding: 15px 15px;
    font-size: 15px;
    font-weight: 400;
  }
  .error {
    color: red;
    font-size: 16px;
    margin-top: 0px;
    align-self: center;
  }
  .success {
    color: green;
    font-size: 18px;
    margin-top: 0px;
    align-self: center;
  }
  button {
    background-color: rgb(55, 64, 176);
    color: white;
    border: none;
    width: 100px;
    font-size: 16px;
    font-weight: 500;

    line-height: 30px;

  }
  @media (max-width:768px){
    .detailsblock{
      display: flex;
      flex-direction: column;
    }
    .details textarea{
      width: 300px;
    }
    .detailsblock{
      padding: 0px 0px;
    }
    form{
      gap: 20px;
    }
  }
</style>
