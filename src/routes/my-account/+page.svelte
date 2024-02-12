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
    let alertMessage = "";

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
    {#if alertStatus === "Success"}
        <!-- Taken from https://www.svgrepo.com/svg/43432/tick -->
        <svg fill="white" height="24px" width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve" style="--darkreader-inline-fill: #000000;" data-darkreader-inline-fill=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 "></polygon> </g></svg>
    {:else}
        <!-- Taken from https://www.svgrepo.com/svg/80301/cross -->
        <svg fill="white" height="24px" width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve" style="--darkreader-inline-fill: #000000;" data-darkreader-inline-fill=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "></polygon> </g></svg>
    {/if}
    { alertMessage }
</div>

<style>

    #Alert {
        display: flex;
        align-items: center;
        gap: 10px;

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
        visibility: hidden;
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