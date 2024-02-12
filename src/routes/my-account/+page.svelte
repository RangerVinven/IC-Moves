<script>
    import Navbar from "$lib/components/Navbar.svelte";
    
    import YourEmailOption from "./YourEmailOption.svelte";
    import YourPasswordOption from "./YourPasswordOption.svelte";
    import DeleteAccount from "./DeleteAccount.svelte";

    import Properties from "./Properties.svelte";

    import { onMount } from "svelte";
    import { browser } from '$app/environment';

    let email = "";

    let alertStatus = "Hidden";
    let alertMessage = "Email changed successfully";

    function showAlert(message, status) {
        alertMessage = message;
        alertStatus = status;

        setTimeout(() => {
            alertStatus = "Hidden"
        }, 4000);
    }

    onMount(async () => {
        if(browser) {
            const res = await fetch("http://127.0.0.1:8000/users", {
                headers: {
                    "session_token": localStorage.getItem("session_token")
                }
            });
            const data = await res.json();

            email = data.email;
        }
        
    });
</script>

<Navbar page="My Account" />

<div id="Container">
    <div id="Your-Account">
        <h1>Your Account</h1>
    
        <YourEmailOption {email} {showAlert} />
        <YourPasswordOption {showAlert} />

        <div id="Delete-Account-Container">
            <DeleteAccount />
        </div>
    </div>

    <div id="Saved-Properties">
        <h1>Saved Properties</h1>

        <Properties />
    </div>

</div>

<div id="Alert" class={alertStatus}>
    { alertMessage }
</div>

<style>

    #Alert {
        position: absolute;
        padding: 10px;

        font-weight: bold;
        font-size: 20px;

        text-align: center;
        color: white;

        left: 30px;
        bottom: 30px;

    }

    .Success {
        background-color: #4BB543;
    }

    .Error {
        background-color: rgba(255, 0, 0, 0.9);
    }

    .Hidden {
        display: none;
    }

    #Container {
        height: 100dvh;
        width: 100dvw;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #Your-Account {
        width: 50%;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        color: var(--light_brown);
        text-align: center;

        font-size: 50px;
        margin-bottom: 10px;
    }

    #Saved-Properties {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;
    }

    #Delete-Account-Container {
        margin-top: 20px;
    }

    @media only screen and (max-width: 600px) {
        #Your-Account {
            width: 70%;
        }

        #Alert {
            left: 50%;
            bottom: 30px;

            transform: translate(-50%);
        }

    }
</style>