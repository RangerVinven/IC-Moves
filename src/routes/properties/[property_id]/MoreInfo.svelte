<script>
    export let data; // The property info
</script>

<div id="More-Info">
    <div>
        <h3>Property Type - {data["property-type"]}</h3>
        <h3>Rent - {data.rent} PCM</h3>
        <h3>Council Tax - {data["council-tax"]}</h3>
        <h3>Furnished - {data.furnished}</h3>
    </div>
</div>

<style>

    #More-Info {
        display: flex;
        justify-content: center;
    }

    #More-Info div {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        column-gap: 40px;
        row-gap: 15px;
    }

    h3 {
        font-family: Arial;
        font-weight: normal;
        font-size: 30px;
    }

    @media screen and (max-width: 1200px) {
        #More-Info div {
            row-gap: 0px;
        }

        h3 {
            margin: 20px;
        }
    }
</style>