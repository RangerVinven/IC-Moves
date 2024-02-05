<script>
    export let data; // The property info
</script>

<div id="Call-To-Action">
    <button><a href={"tel:" + data["realtor_number"].replace(" ", "")}>Call The Realtor Now!</a></button>
    <h3>Or call them later at {data["realtor_number"]}</h3>
</div>

<style>

    a {
        text-decoration: none;
        color: white;
    }

    #Call-To-Action {
        display: flex;
        align-items: center;
        flex-direction: column;

        margin-top: 35px;
    }

    button {
        background-color: var(--light_brown);
        border: none;
        border-radius: 5px;

        color: white;
        font-weight: bold;

        font-size: 30px;
        padding: 10px;

        cursor: pointer;
    }

    button:hover {
        background-color: var(--dark_brown);
    }

    h3 {
        font-weight: normal;
        font-style: italic;
        font-size: 25px;
        font-family: Arial;

        margin-top: 10px;
    }
</style>