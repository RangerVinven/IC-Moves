<script>
    // @ts-ignore
    import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte';
    // @ts-ignore
    import FaArrowDown from 'svelte-icons/fa/FaArrowDown.svelte';
    import FilterOptions from './FilterOptions.svelte';
    import FilterButtons from './FilterButtons.svelte';

    $: isFilterDisplayed = false;
</script>

<div>
    <button on:click={() => { isFilterDisplayed = !isFilterDisplayed }} id="Filters-Header">
        <h3>Filters</h3>

        <div id="Icon">
            <!-- Changes the arrow's direction when the user presses "Filters >" -->
            {#if isFilterDisplayed}
                <FaArrowDown />
            {:else}
                <FaArrowRight />
            {/if}
        </div>
    </button>

    <div>
        {#if isFilterDisplayed}
            <FilterOptions />

            <div style="display:flex;justify-content:center;">
                <FilterButtons />
            </div>
        {/if}
    </div>
    
</div>

<style>
    h3 {
        font-family: Arial;
        font-size: 35px;

        margin: 10px;
    }

    #Filters-Header {
        display: flex;

        justify-content: center;
        align-items: center;

        cursor: pointer;

        background-color: transparent;
        border: none;
    }

    #Icon {
        height: 30px;
        width: 30px;

        margin-left: 10px;
    }
</style>