<script>
  import ApplyFiltersButton from './ApplyFiltersButton.svelte';

import Navbar from "$lib/components/Navbar.svelte";

import SearchBar from './SearchBar.svelte';

import MobileFilter from './MobileFilter.svelte';
import FilterOptions from "./FilterOptions.svelte";

import PropertyPreview from "$lib/components/PropertyPreview.svelte";
</script>

<Navbar page="Search" />

<main>
    <div id="Properties-And-Filters">
        <div id="Filters">
            <FilterOptions />

            <ApplyFiltersButton />
        </div>

        <div id="Properties-And-Search">
            <SearchBar />

            <div id="Mobile-Filter-Container">
                <MobileFilter />
            </div>

            <div id="Properties">
                {#each {length: 7} as _, i}
                    <PropertyPreview />
                {/each}
            </div>
        </div>
       
    </div>
</main>

<style>
    #Mobile-Filter-Container {
        display: none;
    }

    #Properties-And-Filters {
        margin-top: 15px;
        margin-left: 10px;

        display: flex;

        align-items: flex-start;
        justify-content: center;
    }

    #Filters {
        width:15%;
        height: 50dvh;

        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;
    }

    #Properties-And-Search {
        width: 80%;
    }

    #Properties {
        height: 100dvh;

        display: flex;
        flex-wrap: wrap;
        gap: 5%;
    }

    @media only screen and (max-width: 900px) {
        #Mobile-Filter-Container {
            display: block;
            margin-bottom: 30px;
        }

        #Filters {
            display: none;
        }

        #Properties {
            flex-wrap: wrap;
            justify-content: center;

        }
    }
</style>