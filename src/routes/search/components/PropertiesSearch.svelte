<script>
    import PropertyPreview from "$lib/components/PropertyPreview.svelte";
import SearchBar from "./SearchBar.svelte";

</script>

<div style="margin-left: 25px;">
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
</style>
