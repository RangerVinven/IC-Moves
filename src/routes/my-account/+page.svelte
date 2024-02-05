<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import YourEmailOption from "./YourEmailOption.svelte";
    import YourPasswordOption from "./YourPasswordOption.svelte";

    import Properties from "./Properties.svelte";

    import { onMount } from "svelte";
    import { browser } from '$app/environment';

    let email = "";

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
    
        <YourEmailOption {email} />
        <YourPasswordOption />
    </div>

    <div id="Saved-Properties">
        <h1>Saved Properties</h1>

        <Properties />
    </div>

</div>

<style>

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

    

    @media only screen and (max-width: 600px) {
        #Your-Account {
            width: 70%;
        }

    }
</style>