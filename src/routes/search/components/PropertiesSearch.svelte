<script>
import PropertyPreview from "$lib/components/PropertyPreview.svelte";
    import MobileFilter from "./filter/MobileFilter.svelte";
import SearchBar from "./SearchBar.svelte";

</script>

<div id="Container">
    <SearchBar />

    <div id="Mobile-Filter">
        <MobileFilter />
    </div>
    
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

        margin-top: 10px;
    }

    #Mobile-Filter {
        display: none;
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

        #Mobile-Filter {
            display: block;
        }
    }
</style>
