<script>
import Navbar from "$lib/components/Navbar.svelte";

import DesktopFilter from "./components/filter/DesktopFilter.svelte";
import PropertiesSearch from './components/PropertiesSearch.svelte';

import FiltersStore from "$lib/stores/SearchFilters";
import properties from "$lib/stores/PropertiesStore";
import properties_empty from "$lib/stores/PropertiesEmptyStore";

async function filterSearch() {
    let parameters = "";

    // Loops through the filters and adds them to the parameters (i.e, /search?name=x&min_showers=x)
    for(const filter in $FiltersStore) {
        if($FiltersStore[filter] !== "") {

            // Doesn't add & to the start if it's the first parameter
            if(parameters.length === 0) {
                parameters = parameters + filter + "=" + $FiltersStore[filter];
            } else {
                parameters = parameters + "&" + filter + "=" + $FiltersStore[filter];
            }
        }
    }
    
    const res = await fetch("http://127.0.0.1:8000/properties/search?" + parameters);
    properties.set(await res.json());

    if($properties.length === 0) {
        properties_empty.set(true);
    } else {
        properties_empty.set(false);
    }
}

</script>

<Navbar page="Search" />

<main>
    <div id="Container">
        <div id="Desktop-Filter">
            <DesktopFilter {filterSearch} />
        </div>

        <div id="Properties-Search">

            <PropertiesSearch {filterSearch} />
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
        margin-left: 20px;
        width: 80%;
    }

    @media only screen and (max-width: 1250px) {
        #Desktop-Filter {
            display: none;
        }

        #Properties-Search {
            width: 100%;
        }
    }

</style>