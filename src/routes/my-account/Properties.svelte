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
            console.log(properties);
        }
    })
</script>

{#if !properties}
    <div id="Loading-Circle">
        <Circle color="var(--dark_brown)" size=80 />
    </div>
{:else}
    <div id="Container">
        {#each properties as property}
            <PropertyPreview {property} />
        {/each}
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
</style>