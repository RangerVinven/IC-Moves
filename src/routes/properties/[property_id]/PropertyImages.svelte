<script>
    import FaChevronDown from 'svelte-icons/fa/FaChevronDown.svelte'
</script>

<table>
    <tr>
        <th>
            <div class="Relative-Div">
                <div id="Main-Image-Container">
                    <img id="Main-Image" src="../assets/Property_Page/1.png" alt="A stone house">
                </div>
            </div>
        </th>
        <th>
            <div class="Relative-Div">
                <div id="Other-Images">
                    <div><img src="../assets/Property_Page/2.png" alt="A stone house"></div>
                    <div><img src="../assets/Property_Page/3.png" alt="A decorated living-room"></div>
                    <div><img src="../assets/Property_Page/4.png" alt="A nice kitchen"></div>
                    <div><img id="Final-Image" src="../assets/Property_Page/5.png" alt="A nice kitchen"></div>

                    <a href="#Final-Image" id="Scroll-Down-Icon">
                        <div id="Down-Arrow">
                            <FaChevronDown />
                        </div>
                    </a>
                </div>
            </div>
        </th>
    </tr>
</table>

<style>

    #Down-Arrow {
        height: 50px;
        width: 50px;

        color: rgba(0, 0, 0, 0.8);
    }

    #Scroll-Down-Icon {
        width: 100%;
        height: 50px;

        background-color: rgba(221, 221, 221, 0.75);
        border: none;

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        bottom: 0;

        cursor: pointer;
    }

    th {
        vertical-align: top;
    }

    #Main-Image-Container {
        height: 100%;
        width: 100%;
    }

    .Relative-Div {
        position: relative;
        height: 600px;
    }

    #Main-Image {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    #Other-Images {
        width: 300px;
        max-height: 100%;

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