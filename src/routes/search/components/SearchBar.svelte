<script>
    export let searchProperties;
    let searchText;
</script>

<div id="Search-And-Button">
    <input bind:value={searchText} id="Search" placeholder="Enter a specific property" type="text">
    <button class="Search-Btn" on:click={() => searchProperties(searchText)}>Search</button>
    <button class="Clear-Btn" on:click={() => {
        searchText = "";
        searchProperties("");
    }}>Clear Search</button>
</div>

<style>
    #Search-And-Button {
        height: fit-content;
        display: flex;
        
        align-items: center;
    }

    input {
        font-size: 25px;
        padding-right: 17px;

        border-radius: 5px;

        border-color: silver;
    }

    button {
        font-size: 20px;
        font-weight: bold;

        padding: 7px 15px 7px 15px;
        margin-left: 10px;

        

        cursor: pointer;
        
        border: none;
        border-radius: 5px;
    }

    .Search-Btn {
        color: white;
        background-color: var(--dark_brown);
    }

    .Clear-Btn {
        border: solid var(--dark_brown);
        border-width: 2px;

        font-weight: normal;
        background-color: transparent;
        font-size: 19px;

        color: var(--dark_brown);
    }

    @media only screen and (max-width: 450px) {
        #Search-And-Button {
            flex-direction: column;            
            align-items: center;

            gap: 10px;
        }
    }

</style>