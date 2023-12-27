<script>
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

            <button>Apply Filters</button>
        </div>

        <div id="Properties-And-Search">
            <SearchBar />

            <MobileFilter />

            <div id="Properties">
                <PropertyPreview />
                <PropertyPreview />
                <PropertyPreview />
                <PropertyPreview />
                <PropertyPreview />
                <PropertyPreview />
                <PropertyPreview />
            </div>
        </div>
       
    </div>
</main>

<style>
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

    button:not(#Filter-Arrow-Container) {
        cursor: pointer;
        margin-top: 15px;

        background-color: var(--dark_brown);
        color: white;
        
        font-weight: bold;
        font-size: 20px;

        padding-top: 10px;
        padding-bottom: 10px;
        padding-right: 15px;
        padding-left: 15px;

        border: none;
        border-radius: 6px;
        width: fit-content;
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
        #Filters {
            display: none;
        }

        #Properties {
            flex-wrap: wrap;
            justify-content: center;

        }
    }
</style>