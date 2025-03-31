<script>
import {
    onMount
} from "svelte";

import Careerpost from "$lib/careerpost.svelte";
import Destroycareer from "$lib/destroycareer.svelte";
import Newspost from "$lib/newspost.svelte";
import Destroynews from "$lib/destroynews.svelte";
import {goto} from '$app/navigation';

/**
 * @type {string | any[]}
 */
let accounts = [];
let error = "";
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

async function fetchAccounts() {
    try {
        const response = await fetch(`https://easywayscredit.co.ke/api/api/accounts`, {
            method: "GET",
            headers: {
                Accept: "application/json"
            },
        });
        if (!response.ok) {
            throw new Error("failed to fetch accounts");
        }
        accounts = await response.json();
    } catch (error) {
        console.log("network issue");
    }
}
fetchAccounts();
/*onMount(async () => {
        const response = await fetch('https://easywayscredit.co.ke/api/api/check-auth', {
            credentials: 'include'
        });
        if (!response.ok) {
            goto('/login')
        }
    });
    onMount(fetchAccounts)

async function handleLogout() {
    await fetch('https://easywayscredit.co.ke/api/api/logout', {
        method: 'GET',
        credentials: 'include'
    });
    goto('/login');
}*/
</script>

<div class="dashboard">
  <div class = toper>
    <button class = "hello"><a href = "#enquiries" aria-label = "enquiries">ENQUIRIES</a></button>
    <button class = "hello"><a href = "#news">NEWS</a></button>
    <button class = "hello"><a href = "#career">CAREERS</a></button>
    <button class = "hello"><a href = "/">BACK TO HOME</a></button>

   
  </div>
    
    <Careerpost/>
    <Destroycareer/>
        <Newspost />
            <Destroynews/>

                <div class="feedback" id = "enquiries">ENQUIRIES</div>
                <div>
                    <button class="download"
                        ><a
                            href="https://easywayscredit.co.ke/api/api/accounts/download-csv"
                            download="feedback.csv">Download as CSV</a
                            ></button
                            >
                            {#if error}
                            <p style="color: red;">{error}</p>
                            {:else if accounts.length === 0}
                            <p>No accounts found</p>
                            {:else}
                            <table >
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
  .toper{
    background-color: rgb(18, 34, 68);
    height:50px;
    margin-top: 20px;
    display: flex;
    align-items:center;
    gap: 25px;
  }
  .hello{
    background-color:transparent;
    margin-left:13px;
  }
  .hello a{
    text-decoration:none;
    color: white;
    font-weight: 500;
    font-size:18px;
    
    
  }
.dashboard {
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    box-sizing: border-box;
    gap:30px;
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
    width: 90%;
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
