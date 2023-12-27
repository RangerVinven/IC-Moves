<script>
    // @ts-ignore
    import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte';
    // @ts-ignore
    import FaArrowDown from 'svelte-icons/fa/FaArrowDown.svelte';

    import FilterOptions from './FilterOptions.svelte';
    import ApplyFiltersButton from './ApplyFiltersButton.svelte';

    $: isFilterDisplayed = false;
</script>

<div id="Mobile-Filters">
    <div id="Filters-Container-Mobile">
        <button on:click={() => {
            isFilterDisplayed = !isFilterDisplayed
            }}  id="Filters-And-Arrow-Container">
            <h3>Filters</h3>
            
            <div id="Filter-Arrow-Container">
                {#if !isFilterDisplayed}
                    <FaArrowRight />
                {:else}
                    <FaArrowDown />
                {/if}
            </div>

        </button>

        {#if isFilterDisplayed}
            <FilterOptions />
        {/if}

        <div id="Apply-Filters-Button-Container">
            <ApplyFiltersButton />
        </div>
    </div>
</div>

<style>
    button {
        background-color: transparent;
        border: none;

        cursor: pointer;
    }

    #Filter-Arrow-Container {
        background-color: transparent;
        border: none;
    }

    #Apply-Filters-Button-Container {
        display: flex;
        width: 100%;
        justify-content: center;
    }

    @media only screen and (max-width: 900px) {

        #Filter-Arrow-Container {
            height: 30px;
            width: 30px;
            height: fit-content;
        }

        #Filters-And-Arrow-Container {
            display: flex;
            align-items: center;
            gap: 10px;

            width: fit-content;
        }
        
        #Filters-And-Arrow-Container > h3 {
            font-size: 35px;
            font-family: Arial;

            cursor: pointer;
        }
    }
</style>