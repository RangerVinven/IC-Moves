<div id="More-Info">
    <div>
        <h3>Property Type - House</h3>
        <h3>Rent - £295 PCM</h3>
        <h3>Council Tax - £50</h3>
        <h3>Furnished - Yes</h3>
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