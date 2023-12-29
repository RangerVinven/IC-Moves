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
        height: 50dvh;

        display: flex;
        flex-direction: column;

        width: fit-content;
    }
</style>