<script>
import { Circle } from "svelte-loading-spinners";

import PropertyPreview from "$lib/components/PropertyPreview.svelte";
import { onMount } from "svelte";
import MobileFilter from "./filter/MobileFilter.svelte";
import SearchBar from "./SearchBar.svelte";

$: properties = [];
onMount(async () => {
    fetch("http://localhost:3000/properties")
    .then(res => res.json())
    .then(data => {
        properties = data;
    });
})

</script>

<div id="Container">
    <SearchBar />

    <div id="Mobile-Filter">
        <MobileFilter />
    </div>
    
    <div id="Properties">

        <!-- Displays a spinner icon while awaiting the API response -->
        {#if properties.length === 0}
            <div id="Loading-Icon">
                <Circle color="var(--dark_brown)" size=80 />
            </div>
        {:else}

            {#each properties as property}
                <PropertyPreview id={property.id} name={property.name} numOfBeds={property.bedrooms} numOfShowers={property.showers} noiseLevel={property["noise_level"]} rent={property.rent} folderPropertyImagesAreIn={property.folder} />
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
