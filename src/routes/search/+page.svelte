<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import PropertyPreview from "$lib/components/PropertyPreview.svelte";
    import FilterButton from "./FilterButton.svelte";
</script>

<Navbar page="Search" />

<main>
    <div id="Properties-And-Filters">
        <div id="Filters">
            <div id="Filters-Container">
                <FilterButton>Sort By</FilterButton>
                <FilterButton>Type</FilterButton>
                <FilterButton>Bedrooms</FilterButton>
                <FilterButton>Showers</FilterButton>
                <FilterButton>Noise Level</FilterButton>
            </div>

            <button>Apply Filters</button>
        </div>

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

    button {
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

    #Filters-Container {
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;

        gap: 10px;
    }

    #Properties {
        width: 80%;
        height: 100dvh;

        display: flex;
        flex-wrap: wrap;
        gap: 5%;
    }
</style>