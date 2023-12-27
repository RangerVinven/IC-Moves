<div id="Filters-Container">
    <button>Sort By</button>
    <button>Type</button>
    <button>Bedrooms</button>
    <button>Showers</button>
    <button>Noise Level</button>
</div>

<style>
    #Filters-Container {
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;

        gap: 10px;
    }

    button {
        background-color: var(--light_brown);
        border: none;

        color: white;
        font-size: 25px;

        padding: 10px;

        cursor: pointer;

        border-radius: 5px;
    }

    @media only screen and (max-width: 900px) {
        #Filters-Container {
            flex-direction: row;
            flex-wrap: wrap;

            justify-content: center;
            align-items: center;

            gap: 10px;
        }
    }
</style>