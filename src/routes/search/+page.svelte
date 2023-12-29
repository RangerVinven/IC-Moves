<script>
import Navbar from "$lib/components/Navbar.svelte";

import DesktopFilter from "./components/filter/DesktopFilter.svelte";
import PropertiesSearch from './components/PropertiesSearch.svelte';
</script>

<Navbar page="Search" />

<main>
    <div id="Container">
        <div id="Desktop-Filter">
            <DesktopFilter />
        </div>

        <div id="Properties-Search">

            <PropertiesSearch />
        </div>
    </div>

</main>

<style>
    #Container {
        display: flex;

        justify-content: center;

        margin-top: 20px;
        
    }

    #Desktop-Filter {
        width: fit-content;
    }

    #Properties-Search {
        width: 80%;
    }

    @media only screen and (max-width: 900px) {
        #Desktop-Filter {
            display: none;
        }

        #Properties-Search {
            width: 100%;
        }
    }

</style>