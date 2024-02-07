<script>
    import FiltersStore from "$lib/stores/SearchFilters"
    
    export let filterSearch;

    function clearFilters() {
        const name = $FiltersStore["name"];

        FiltersStore.set({        
            "sort_by": "",
            "property_type": "",
            "min_bedrooms": "",
            "min_showers": "",
            "noise_level": "",
            "name": name
        });

        filterSearch();
    }
</script>

<div>
    <button on:click={filterSearch}>Apply Filters</button>
    <button id="Clear" on:click={() => {
        clearFilters();
        filterSearch();
    }}>Clear Filters</button>
</div>

<style>
    button {
        cursor: pointer;
        width: fit-content;

        margin-top: 15px;

        background-color: var(--dark_brown);
        color: white;
        
        font-weight: bold;
        font-size: 20px;

        padding: 10px 15px 10px 15px;

        border: none;
        border-radius: 6px;
    }

    #Clear {
        background-color: transparent;
        color: var(--dark_brown);

        border: 1px solid;
        border-color: var(--dark_brown);
    }

</style>

