<script>
    export let showAlert;

    let password;
    let verifyPassword
    
    async function savePassword() {

        const res = await fetch("http://127.0.0.1:8000/users", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "session_token": localStorage.getItem("session_token")
            },
            body: JSON.stringify({
                "password": password,
                "verify_password": verifyPassword
            })
        })

        if(res.status === 200) {
            showAlert("Password Changed!", "Success");
            return true; // Means it worked
        } else {
            showAlert("Something Went Wrong. Try again later.", "Error");
        }

    }

</script>

<h3>Your Password:</h3>

<div id="Input-Fields">
    <div id="Password-Inputs">
        <input type="password" bind:value={password} placeholder="New password">
        <input type="password" bind:value={verifyPassword} placeholder="Verify password">
    </div>
    <button on:click={savePassword}>Save</button>
</div>

<style>
    #Input-Fields {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        gap: 20px;
        width: 100%;

    }

    #Password-Inputs > input {
        display: block;

        width: 100%;
        margin-bottom: 10px;
    }

    input {
        font-size: 25px;
        width: 35%
    }

    button {
        font-size: 20px;

        padding: 10px 30px;

        max-height: 100%;
        border: none;
        border-radius: 5px;
        
        cursor: pointer;

        background-color: var(--dark_brown);
        color: white;
        font-weight: bold;
    }

    button:hover {
        background-color: var(--light_brown);
    }

    h3 {
        font-size: 30px;
        font-weight: normal;

        margin-bottom: 10px;
    }
</style>
