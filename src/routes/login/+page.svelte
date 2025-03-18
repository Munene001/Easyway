<script>
    import { goto } from '$app/navigation';

    let email = '';
    let password = '';
    let message = '';
    let showPassword = false; // Toggle state for password visibility

    // Toggle password visibility
    function togglePasswordVisibility() {
        showPassword = !showPassword;
    }

    async function handleLogin() {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            message = result.message;

            if (result.success) {
                goto('/dashboard');
            }
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            message = 'Incorrect email or password';
        }
    }
</script>

<div class="login-container">
    <h2>Admin Login</h2>
    <form on:submit|preventDefault={handleLogin}>
        <div class="form-group">
            <label for="email">Email:</label>
            <input
                type="email"
                id="email"
                bind:value={email}
                required
                placeholder="Enter your email"
            />
        </div>

        <div class="form-group password-group">
            <label for="password">Password:</label>
            <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                bind:value={password}
                required
                placeholder="Enter your password"
            />
            <button
                type="button"
                class="toggle-password"
                on:click={togglePasswordVisibility}
            >
                {showPassword ? 'Hide' : 'Show'}
            </button>
        </div>

        <button type="submit" class="submit-btn">Login</button>
    </form>

    {#if message}
        <p class="message {message.includes('successful') ? 'success' : 'error'}">{message}</p>
    {/if}
</div>

<style>
    .login-container {
        max-width: 400px;
        margin: 50px auto;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        background-color: #fff;
    }

    h2 {
        text-align: center;
        color: #333;
        margin-bottom: 20px;
    }

    .form-group {
        margin-bottom: 20px;
    }

    label {
        display: block;
        margin-bottom: 5px;
        color: #555;
        font-weight: bold;
    }

    input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 16px;
        box-sizing: border-box;
    }

    .password-group {
        position: relative;
    }

    .toggle-password {
        position: absolute;
        right: 10px;
        top: 65%;
        transform: translateY(-50%);
        background: none;
        border: none;
        color: #007bff;
        cursor: pointer;
        font-size: 14px;
        padding: 0;
    }

    .toggle-password:hover {
        text-decoration: underline;
    }

    .submit-btn {
        width: 100%;
        padding: 12px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .submit-btn:hover {
        background-color: #0056b3;
    }

    .message {
        text-align: center;
        margin-top: 15px;
        font-size: 14px;
    }

    .success {
        color: #28a745;
    }

    .error {
        color: #dc3545;
    }
</style>