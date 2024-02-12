<script>
import axios from "axios"

import PropertyPreview from "$lib/components/PropertyPreview.svelte";
import MobileFilter from "./filter/MobileFilter.svelte";
import SearchBar from "./SearchBar.svelte";

import { Circle } from "svelte-loading-spinners";
import { onMount } from "svelte";

import properties from "$lib/stores/PropertiesStore";
import properties_empty from "$lib/stores/PropertiesEmptyStore";

let propertiesBackup;
export let filterSearch;

onMount(async () => {

    const response = await axios.get("http://127.0.0.1:8000/properties/");
    const data = response.data;

    properties.set(data);
    propertiesBackup = $properties;
})

</script>

<div id="Container">
    <SearchBar searchProperties={filterSearch} />

    <div id="Mobile-Filter">
        <MobileFilter {filterSearch} />
    </div>
    
    <div id="Properties">

        <!-- Displays a spinner icon while awaiting the API response -->
        {#if $properties.length === 0 && $properties_empty === false}
            <div id="Loading-Icon">
                <Circle color="var(--dark_brown)" size=80 />
            </div>

        {:else if $properties_empty}
            <h3>No properties matches that search</h3>
        {:else}

            {#each $properties as property}
                <PropertyPreview {property} />
            {/each}

        {/if}
    </div>
</div>

<style>
    #Loading-Icon {
        position: absolute;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    #Properties {
        display: flex;
        flex-wrap: wrap;

        margin-top: 10px;
    }

    #Mobile-Filter {
        display: none;
    }

    h3 {
        font-size: 30px;
        font-weight: normal;
    }

    @media only screen and (max-width: 1250px) {
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
            width: 100%;
        }
    }
</style>
