import { writable } from "svelte/store";

let filters = {
    "sort_by": "",
    "property_type": "",
    "min_bedrooms": "",
    "min_showers": "",
    "noise_level": "",
    "name": ""
}

const FiltersStore = writable(filters)

export default FiltersStore;