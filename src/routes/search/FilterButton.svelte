<button><h3><slot /></h3></button>

<style>
    button {
        cursor: pointer;

        width: 100%;
        
        padding-right: 15px;
        padding-left: 15px;

        background-color: var(--light_brown);
        border: none;
        border-radius: 5px;
    }

    h3 {
        color: white;
        font-size: 20px;

        margin: 5%;
        white-space: nowrap;
    }

    button:hover {
        background-color: var(--dark_brown);
    }
</style>
