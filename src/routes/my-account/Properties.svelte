<script>
    import { Circle } from "svelte-loading-spinners";
    import { onMount } from "svelte";
    import { browser } from "$app/environment";
    import PropertyPreview from "$lib/components/PropertyPreview.svelte";

    let properties;

    onMount(async () => {
        if(browser) {
            const response = await fetch("http://localhost:8000/saved/", {
                headers: {
                    "session_token": localStorage.getItem("session_token")
                }
            });
            const data = await response.json();

            properties = data;
        }
    })

    async function clearSavedProperties() {
        const res = await fetch("http://127.0.0.1:8000/saved/all", {
            method: "DELETE",
            headers: {
                "session_token": localStorage.getItem("session_token")
            }
        });

        if(res.status === 200) {
            console.log("Properties deleted");
            properties = [];
        }
    }
</script>

{#if !properties}

    <div id="Loading-Circle">
        <Circle color="var(--dark_brown)" size=80 />
    </div>

{:else if properties.length === 0}

    <h3>You don't have any properties saved.</h3>
    
{:else}

    <div id="Container">
        {#each properties as property}
            <PropertyPreview {property} />
        {/each}

        <div id="Clear-Saved-Div">
            <button on:click={clearSavedProperties}>Clear Saved</button>
        </div>
    </div>

{/if}

<style>
    #Loading-Circle {
        margin-top:15px;
    }

    #Container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        width: 100%;
    }

    #Clear-Saved-Div {
        display: flex;
        justify-content: right;
        margin-right: 15px;
        

        width: 100%;
    }

    button {
        border: none;
        border-radius: 5px;

        font-size: 20px;
        padding: 10px 20px;
        margin-bottom: 15px;

        background-color: var(--dark_brown);
        color: white;

        cursor: pointer;
    }

    button:hover {
        background-color: var(--light_brown);
    }

    h3 {
        font-size: 25px;
        font-weight: normal;
    }

    @media only screen and (max-width: 600px) {
        #Clear-Saved-Div {
            margin-top: 20px;
            justify-content: center;
        }
    }
</style>