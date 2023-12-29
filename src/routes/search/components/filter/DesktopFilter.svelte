<script>
import FilterButtons from './FilterButtons.svelte';
import FilterOptions from "./FilterOptions.svelte";
</script>

<div id="Filters">
    <FilterOptions />

    <div style="display: flex;">
        <FilterButtons />
    </div>
</div>

<style>
    #Filters {
        width:15%;
        height: 50dvh;

        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;
    }

    @media only screen and (max-width: 900px) {
        #Filters {
            display: none;
        }
    }
</style>