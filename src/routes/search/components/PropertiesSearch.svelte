<script>
import PropertyPreview from "$lib/components/PropertyPreview.svelte";
import SearchBar from "./SearchBar.svelte";

</script>

<div id="Container">
    <SearchBar />
    
    <div id="Properties">
        {#each Array(10) as _}
            <PropertyPreview />
        {/each}
    </div>
</div>

<style>
    #Properties {
        display: flex;
        flex-wrap: wrap;

        margin-top: 15px;
    }

    @media only screen and (max-width: 900px) {
        #Properties {
            justify-content: center;
        }

        #Container {
            display: flex;
        
            flex-direction: column;
            align-items: center;
        }
    }
</style>
