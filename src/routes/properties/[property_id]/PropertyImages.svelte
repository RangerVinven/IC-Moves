<div id="Container">
    <div class="Relative-Div">
        <div id="Main-Image-Container">
            <img id="Main-Image" src="../assets/Property_Page/1.png" alt="A stone house">
        </div>
    </div>

    <div class="Relative-Div">
        <div id="Other-Images">
            <div><img src="../assets/Property_Page/2.png" alt="A stone house"></div>
            <div><img src="../assets/Property_Page/3.png" alt="A decorated living-room"></div>
            <div><img src="../assets/Property_Page/4.png" alt="A nice kitchen"></div>
            <div><img src="../assets/Property_Page/5.png" alt="A nice kitchen"></div>
        </div>
    </div>
    
</div>

<style>
    #Container {
        display: flex;
        justify-content: center;

        gap: 10px;
        width: 100%;
        max-height: 50%;

        position: relative
    }

    #Main-Image-Container {
        height: 100%;
        width: 100%;
    }

    .Relative-Div {
        position: relative;
    }

    #Main-Image {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    #Other-Images {
        width: 300px;
        max-height: 100%;

        position: absolute;
        overflow: scroll;
    }

    #Other-Images > div {
        width: 100%;

        object-fit: contain;
    }

    #Other-Images > div > img {
        width: 100%;
    }
</style>