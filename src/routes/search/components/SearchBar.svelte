<!-- <h1>Search</h1> -->
<div id="Search-And-Button">
    <input id="Search" placeholder="Enter a specific property" type="text">
    <button>Search</button>
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
    }

    button {
        font-size: 20px;
        font-weight: bold;

        padding: 7px 15px 7px 15px;
        margin-left: 10px;

        color: white;
        background-color: var(--dark_brown);

        cursor: pointer;
        
        border: none;
        border-radius: 5px;
    }
</style>