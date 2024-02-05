<script>
    import { goto } from "$app/navigation";
    import SessionTokenStore from "$lib/stores/SessionTokenStore";

    let deleteButtonPressed = false;

    async function deleteAccount() {
        const res = await fetch("http://127.0.0.1:8000/users", {
            method: "DELETE",
            headers: {
                "session_token": localStorage.getItem("session_token")
            }
        });

        // If the account was deleted succesfully
        if(res.status === 200) {
            SessionTokenStore.set("");
            goto("/");
        }
    }
</script>

{#if deleteButtonPressed}
    <h3>Are you sure? Your account will not be recoverable.</h3>

    <div id="Delete-Confirmation-Container">
        <button id="Delete-Confirmation-Btn" class="Delete-Button No-Keep-Btn" on:click={() => deleteButtonPressed = false}>No, keep it</button>
        <button id="Delete-Confirmation-Btn" class="Delete-Button" on:click={deleteAccount}>Yes, delete it</button>
    </div>
{:else}
    <button class="Delete-Button" on:click={() => deleteButtonPressed = !deleteButtonPressed}>Delete Account</button>
{/if}
<style>
    .Delete-Button {
        font-size: 20px;

        margin-top: 20px;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        
        cursor: pointer;

        background-color: rgba(255, 0, 0, 0.9);
        color: white;
        font-weight: bold;
    }

    .No-Keep-Btn {
        background-color: rgba(152,100,51, 0.8);
        margin-right: 40px;
    }

    #Delete-Confirmation-Container {
        display: flex;
    }

    #Delete-Confirmation-Btn {
        font-size: 18px;
    }


    h3 {
        margin-bottom: 0px;
        text-align: center;
        
        font-size: 20px;
        font-weight: normal;
        font-style: italic;

    }
</style>