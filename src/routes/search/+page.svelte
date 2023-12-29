<script>
import Navbar from "$lib/components/Navbar.svelte";
import SearchBar from './components/SearchBar.svelte';
import PropertyPreview from "$lib/components/PropertyPreview.svelte";

import DesktopFilter from "./components/filter/DesktopFilter.svelte";
import MobileFilter from './components/filter/MobileFilter.svelte';
</script>

<Navbar page="Search" />

<main>
    <div id="Properties-And-Filters">
        <DesktopFilter />

        <div id="Properties-And-Search">
            <SearchBar />

            <div id="Mobile-Filter">
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
    #Mobile-Filter {
        display: none;
    }

    #Properties-And-Filters {
        margin-top: 15px;
        margin-left: 10px;

        display: flex;

        align-items: flex-start;
        justify-content: center;
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
        #Mobile-Filter {
            display: block;
            margin-bottom: 30px;
        }

        #Properties {
            flex-wrap: wrap;
            justify-content: center;

        }
    }
</style>