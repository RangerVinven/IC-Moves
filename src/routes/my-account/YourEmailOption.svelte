<script>
    let isDisabled = true;
    let buttonText = "Change"
    export let email;
    export let showAlert;

    // Changes the button text and saves the email
    function buttonPressed() {
        isDisabled = !isDisabled;

        if(isDisabled) {
            if(saveEmail()) {
                buttonText = "Change";
            }
        } else {
            buttonText = "Save";
        }
    }
    
    // Saves the email
    async function saveEmail() {

        const res = await fetch("http://127.0.0.1:8000/users", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "session_token": localStorage.getItem("session_token")
            },
            body: JSON.stringify({
                "email": email
            })
        })

        if(res.status === 200) {
            showAlert("Email changed successfully", "Success");
            return true; // Means it worked
        } else if (res.status === 400) {
            showAlert("Email not valid, email not changed", "Error");
        } else if (res.status === 409) {
            showAlert("An account with that email already exists, email not changed", "Error");
        } else {
            showAlert("Something went wrong, email not changed", "Error");
        }

    }

</script>

<h3>Your Email:</h3>

<div id="Input-Fields">
    <input type="text" bind:value={email} placeholder="Your email" disabled={isDisabled}>
    <button on:click={buttonPressed}>{buttonText}</button>
</div>

<style>
    #Input-Fields {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        gap: 20px;

        width: 100%;

        margin-bottom: 15px;
    }

    input {
        font-size: 20px;
        width: 35%;
    }

    button {
        font-size: 20px;

        padding: 10px 30px;
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

    @media only screen and (max-width: 600px) {
        input {
            width: 100%;
        }
    }
</style>
