<script>
    // @ts-ignore - Otherwise I get a "FaBed is implicitly any type"
    import FaBed from "svelte-icons/fa/FaBed.svelte"
    // @ts-ignore - Otherwise I get a "FaBed is implicitly any type"
    import FaShower from 'svelte-icons/fa/FaShower.svelte'
    // @ts-ignore - Otherwise I get a "FaBed is implicitly any type"
    import FaBell from 'svelte-icons/fa/FaBell.svelte'
    import CallToAction from "./CallToAction.svelte";
</script>

<div id="Property-Preview">
    <div>
        <div id="Image-Container">
            <img id="Preview-Image" src="assets/Search_Page/House_Preview.png" alt="A stone house">
        </div>
        
        <div id="Info-Container">
            <h3>19 Greenview Cottage</h3>
            <div id="Statistics">
                <div>
                    <div class="Icon Bed">
                        <FaBed />
                    </div>
                    <h6>3</h6>
                </div>
                <div>
                    <div class="Icon Shower">
                        <FaShower />
                    </div>
                    <h6>2</h6>
                </div>
                <div>
                    <div class="Icon Bell">
                        <FaBell />
                    </div>
                    <h6>3/10</h6>
                </div>
            </div>
        </div>
    </div>

    <div id="Price-And-CallToAction">
        <h6 id="Price">£256 pcm</h6>
        <button>Check It Out!</button>
    </div>
</div>

<style>
    #Property-Preview {
        cursor: pointer;
        width: 400px;
        background-color: var(--light_brown);

        border-radius: 2px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    #Image-Container {
        width: 100%;
        height: 65%;
    }

    #Preview-Image {
        width: 100%;
        height: 100%;
        object-fit: fill;
    }

    #Info-Container {
        width: 100%;
        height: 100%;

        margin-left: 7px;
    }

    h3 {
        margin: 0px;
        font-weight: normal;
        font-size: 26px;

        color: white;
    }

    h6 {
        margin: 0;
        font-size: 25px;

        font-family: Arial;
        color: white;
        font-weight: normal;

        margin-left: 7px;
    }

    #Statistics {
        display: flex;
        gap: 30px;
    }

    #Statistics > div {
        display: flex;
        align-items: center;
    }
    #Statistics > div {
        display: flex;
        align-items: center;
    }

    .Icon {
        height: 34px;
        width: 34px;

        color: white;

        margin-top: 2px;
    }

    .Shower, .Bell {
        height: 30px;
        width: 30px;
    }

    #Price-And-CallToAction {
        width: 100%;
        margin-bottom: 5px;
        
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    #Price-And-CallToAction > button {
        margin-right: 7px;
        background-color: var(--dark_brown);

        border: none;
        border-radius: 5px;

        color: white;

        font-size: 20px;
        font-weight: normal;

        padding: 2% 7% 2% 7%;

        cursor: pointer;
    }
    
</style>