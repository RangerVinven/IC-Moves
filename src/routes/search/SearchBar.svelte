<h1>Search</h1>
<div id="Search-And-Button">
    <input id="Search" placeholder="Enter a specific property" type="text">
    <button>Search</button>
</div>

<style>
    button:not(#Filter-Arrow-Container) {
        cursor: pointer;
        margin-top: 15px;

        background-color: var(--dark_brown);
        color: white;
        
        font-weight: bold;
        font-size: 20px;

        padding: 10px 15px 10px 15px;

        border: none;
        border-radius: 6px;
        width: fit-content;
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
    }
</style>