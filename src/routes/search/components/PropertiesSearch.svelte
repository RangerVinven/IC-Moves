<script>
import PropertyPreview from "$lib/components/PropertyPreview.svelte";
import { onMount } from "svelte";
import MobileFilter from "./filter/MobileFilter.svelte";
import SearchBar from "./SearchBar.svelte";

let properties = [];
onMount(async () => {
    fetch("http://localhost:3000/properties")
    .then(res => res.json())
    .then(data => {
        console.log(data);
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
        {#each properties as property}
            <PropertyPreview id={property.id} name={property.name} numOfBeds={property.bedrooms} numOfShowers={property.showers} noiseLevel={property["noise_level"]} rent={property.rent} folderPropertyImagesAreIn={property.folder} />
            <!-- <PropertyPreview name={property.name} numOfBeds={property.bedrooms} numOfShowers={property.showers} noiseLevel={property["noise_level"]} rent={property.rent} folderPropertyImagesAreIn={property.folder} />
            <PropertyPreview name={property.name} numOfBeds={property.bedrooms} numOfShowers={property.showers} noiseLevel={property["noise_level"]} rent={property.rent} folderPropertyImagesAreIn={property.folder} />
            <PropertyPreview name={property.name} numOfBeds={property.bedrooms} numOfShowers={property.showers} noiseLevel={property["noise_level"]} rent={property.rent} folderPropertyImagesAreIn={property.folder} /> -->
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
