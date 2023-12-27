<script>
  import MobileFilter from './MobileFilter.svelte';

    import Navbar from "$lib/components/Navbar.svelte";
    import PropertyPreview from "$lib/components/PropertyPreview.svelte";
    
    import FilterOptions from "./FilterOptions.svelte";
</script>

<Navbar page="Search" />

<main>
    <div id="Properties-And-Filters">
        <div id="Filters">
            <FilterOptions />

            <button>Apply Filters</button>
        </div>

        <div id="Properties-And-Search">
            <h1>Search</h1>
            <div id="Search-And-Button">
                <input id="Search" placeholder="Enter a specific property" type="text">
                <button>Search</button>
            </div>

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
    #Mobile-Filters {
        display: none;
    }
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

    #Filter-Arrow-Container {
        background-color: transparent;
        border: none;
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

    #Search-And-Button {
        margin-bottom: 10px;
    }

    #Search-And-Button > input {
        border-radius: 4px;
        border-color: #D9D9D9;
        border-style: solid;

        padding: 10px;
        padding-right: 11%;

        font-size: 17px;
    }

    #Search-And-Button > button {
        margin-left: 15px;
    }

    h1 {
        visibility: hidden;
    }

    @media only screen and (max-width: 900px) {
        #Filters {
            display: none;
        }

        #Properties {
            flex-wrap: wrap;
        }

        h1 {
            visibility: visible;
            text-align: center;
            font-size: 45px;

            color: var(--light_brown);

            margin: 0;
        }

        #Search-And-Button {
            display: flex;
            flex-direction: column;

            align-items: center;
            justify-content: center;

            margin-top: 20px;
        }

        #Search {
            width: 80%;
        }

        #Properties {
            justify-content: center;
        }

        #Mobile-Filters {
            display: block;
            margin-bottom: 30px;
        }

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

        #Filters-And-Arrow-Container > button {
            cursor: pointer;
        }

        #Filters-And-Arrow-Container > h3 {
            font-size: 35px;
            font-family: Arial;

            cursor: pointer;
        }
    }
</style>