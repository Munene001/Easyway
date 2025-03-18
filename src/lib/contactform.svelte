<script>
  import { submitOrder } from "./api.js";

  let fullname = "";
  let phone_number = "";
  let email = "";
  let loan_amount = "";
  let loan_type = "";
  let message = "";

  let successMessage = "";
  let generalError = "";

  /**
   * @param {{ preventDefault: () => void; target: any; }} event
   */
  async function handleSubmit(event) {
    event.preventDefault();

    // Clear previous feedback
    successMessage = "";
    generalError = "";

    // Check if required fields are filled
    const form = event.target;
    if (!form.checkValidity()) {
      alert("Some required fields have not been filled.");
      return;
    }

    const formData = {
      fullname,
      phone_number,
      email,
      loan_amount,
      loan_type,
      message: message || null,
    };

    const result = await submitOrder(formData);
    if (result.success) {
      successMessage = "Feedback submitted successfully";
      fullname = "";
      phone_number = "";
      email = "";
      loan_amount = "";
      loan_type = "";
      message = "";
    } else {
      generalError =
        result.error.message || result.error || "Error submitting feedback";
      alert(generalError);
    }
  }
</script>

<form on:submit={handleSubmit}>
  <div class="namer">
    <input
      type="text"
      placeholder="Full Name"
      class="firstname"
      bind:value={fullname}
      required
    />
    <input
      type="tel"
      placeholder="Phone Number"
      class="lastname"
      bind:value={phone_number}
      required
    />
  </div>
  <input type="email" placeholder="Email" bind:value={email} required />
  <input
    type="number"
    placeholder="Loan Amount"
    bind:value={loan_amount}
    required
  />
  <div class="radio">
    <label>
      <input
        type="radio"
        name="loan_type"
        value="business loan"
        bind:group={loan_type}
        required
      />Business Loan
    </label>
    <label>
      <input
        type="radio"
        name="loan_type"
        value="salary loan"
        bind:group={loan_type}
      />Salary Loan
    </label>
    <label>
      <input
        type="radio"
        name="loan_type"
        value="logbook loan"
        bind:group={loan_type}
      />Logbook Loan
    </label>
    <label>
      <input
        type="radio"
        name="loan_type"
        value="asset finance loan"
        bind:group={loan_type}
      />Asset Finance Loan
    </label>
    <label>
      <input
        type="radio"
        name="loan_type"
        value="other services"
        bind:group={loan_type}
      />Other Services
    </label>
  </div>
  <textarea placeholder="Message" rows="6" cols="6" bind:value={message}
  ></textarea>
  <button type="submit">Submit Now</button>
  {#if successMessage}
    <p class="success">{successMessage}</p>
  {/if}
  {#if generalError}
    <p class="error">{generalError}</p>
  {/if}
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 770px;
  }
  input[type="text"]:-webkit-autofill,
  input[type="tel"]:-webkit-autofill,
  input[type="email"]:-webkit-autofill,
  input[type="number"]:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px rgb(231, 224, 224) inset;
    box-shadow: 0 0 0 1000px rgb(250, 246, 246) inset;
    -webkit-text-fill-color: #000; /* Ensure text color stays black */
  }

  input {
    height: 52px;
    padding: 5px 10px;
    font-size: 17px;
    background-color: rgb(250, 246, 246);
    border: none;
  }
  .radio {
    display: flex;
    justify-content: space-evenly;
    padding: 11px 0px;
    box-sizing: border-box;
  }
  .radio label {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .radio input[type="radio"] {
    width: 18px;
    height: 18px;
    vertical-align: top;
    margin: 0;
  }
  textarea {
    font-size: 17px;
    padding: 15px 10px;
    background-color: rgb(250, 246, 246);
    border: none;
  }
  .namer {
    display: flex;
    flex-direction: row;
    gap: 8px;
    width: 100%;
  }
  .namer input {
    width: 100%;
  }
  button {
    background-color: rgb(55, 64, 176);
    height: 62px;
    color: white;
    border: none;
    font-size: 18px;
    font-weight: 600;
    line-height: 30px;
  }
  ::placeholder {
    font-size: 17px;
    color: rgb(35, 35, 235);
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
  @media (max-width: 768px) {
    form {
      width: 100%;
      gap: 39px;
      padding: 0px 20px;
      box-sizing: border-box;
    }
    input{
        background-color:rgb(231, 224, 224); 
        

    }
    textarea{
        background-color:rgb(231, 224, 224); 

    }
    .radio {
      display: flex;
      flex-direction: column;
      gap: 18px;
      padding: 0px 0px;
    }
    .radio label {
      gap: 15px;
    }
    .radio input[type="radio"] {
      width: 24px;
      height: 24px;
      vertical-align: middle;
      margin: 0;
    }
  }
</style>
