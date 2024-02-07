<script>
    import FiltersStore from "$lib/stores/SearchFilters"
</script>

<div id="Filters-Container">
    <select bind:value={$FiltersStore.sort_by} name="Sort-By">
        <option value="" disabled selected>Sort By</option>
        <option value="rent asc">Price (low-high)</option>
        <option value="rent desc">Price (high-low)</option>
        <option value="bedrooms asc">Bedrooms (low-high)</option>
        <option value="bedrooms desc">Bedrooms (high-low)</option>
        <option value="showers asc">Showers (low-high)</option>
        <option value="showers desc">Showers (high-low)</option>
        <option value="noise_level asc">Noise (low-high)</option>
        <option value="noise_level desc">Noise (high-low)</option>
    </select>
    
    <select bind:value={$FiltersStore["property_type"]} name="Type">
        <option value="" disabled selected>Property Type</option>
        <option value="House">House</option>
        <option value="Flat">Flat</option>
    </select>

    <select bind:value={$FiltersStore["min_bedrooms"]} name="Bedrooms">
        <option value="" disabled selected>Bedrooms</option>
        <option value=1>1+</option>
        <option value=2>2+</option>
        <option value=3>3+</option>
        <option value=4>4+</option>
    </select>

    <select bind:value={$FiltersStore["min_showers"]} name="Showers">
        <option value="" disabled selected>Showers</option>
        <option value=1>1+</option>
        <option value=2>2+</option>
        <option value=3>3+</option>
        <option value=4>4+</option>
    </select>
    
    <select bind:value={$FiltersStore["noise_level"]} name="Noise-Level">
        <option value="" disabled selected>Noise Level</option>
        <option value="1">Quiet (1-3)</option>
        <option value="4">Moderate (3-6)</option>
        <option value="6">Loud (6-10)</option>
    </select>
</div>

<style>
    #Filters-Container {
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;

        gap: 10px;
    }

    select {
        color: white;
        background-color: var(--light_brown);

        border: none;
        cursor: pointer;

        font-size: 25px;

        padding: 10px;
        border-radius: 5px;

        width: 100%;
    }

    @media only screen and (max-width: 1250px) {
        #Filters-Container {
            flex-direction: row;
            flex-wrap: wrap;

            justify-content: center;
            align-items: center;

            gap: 10px;
        }

        select {
            width: fit-content
        }
    }
</style>