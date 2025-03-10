<script>
  import { onMount } from "svelte";

  import Careerpost from "$lib/careerpost.svelte";
  import Destroy from "$lib/destroy.svelte";
  import Newspost from "$lib/newspost.svelte";

  /**
   * @type {string | any[]}
   */
  let accounts = [];
  let error = "";

  async function fetchAccounts() {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/accounts", {
        method: "GET",
        headers: { Accept: "application/json" },
      });
      if (!response.ok) {
        throw new Error("failed to fetch accounts");
      }
      accounts = await response.json();
    } catch (error) {
      console.log("network issue");
    }
  }
  onMount(fetchAccounts);
</script>

<div class="dashboard">
  <Careerpost />
  <Destroy/>
  <Newspost/>

  <div class="feedback">FEEDBACK</div>
  <div>
    <button class="download"
      ><a
        href="http://127.0.0.1:8000/api/accounts/download-csv"
        download="feedback.csv">Download as CSV</a
      ></button
    >
    {#if error}
      <p style="color: red;">{error}</p>
    {:else if accounts.length === 0}
      <p>No accounts found</p>
    {:else}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Phone number</th>
            <th>Email</th>
            <th>Loan Type</th>
            <th>Loan Amount</th>
            <th>Message</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {#each accounts as account}
            <tr>
              <td>{account.id}</td>
              <td>{account.fullname}</td>
              <td>{account.phone_number}</td>
              <td>{account.email}</td>
              <td>{account.loan_type}</td>
              <td>{account.loan_amount}</td>
              <td>{account.message}</td>
              <td>{account.date}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    {/if}
  </div>
</div>

<style>
  .dashboard {
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    box-sizing: border-box;
  }
  .feedback {
    display: flex;
    align-self: center;
    font-size: 18px;
    line-height: 32px;
    font-weight: 700;
    margin-top: 10px;
  }
  table {
    width: 80%;
    padding: 20px 30px;
    border-collapse: collapse;
    box-sizing: border-box;
  }
  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  .download {
    background-color: rgb(55, 64, 176);
    color: white;
    border: none;
    width: 180px;
    font-size: 16px;
    font-weight: 500;

    line-height: 30px;
    margin-bottom: 5px;
  }
  .download a {
    text-decoration: none;
    color: white;
  }
</style>
