<script>
    // @ts-ignore - Otherwise I get a "FaBed is implicitly any type"
    import FaBed from "svelte-icons/fa/FaBed.svelte"
    // @ts-ignore - Otherwise I get a "FaBed is implicitly any type"
    import FaShower from 'svelte-icons/fa/FaShower.svelte'
    // @ts-ignore - Otherwise I get a "FaBed is implicitly any type"
    import FaBell from 'svelte-icons/fa/FaBell.svelte'
</script>

<div id="Property-Preview">
    <img id="Preview-Image" src="assets/Search_Page/House_Preview.png" alt="A stone house">
    <h3>19 Greenview Cottage</h3>

    <div id="Statistics">
        <div class="Icon Bed">
            <FaBed />
        </div>
        <h6>3</h6>

        <div class="Icon Shower">
            <FaShower />
        </div>
        <h6>4</h6>

        <div class="Icon Bell">
            <FaBell />
        </div>
        <h6>3/10</h6>
    </div>

    <div>
        <h3 id="Price">£256 PCM</h3>
        <button>Check It Out!</button>
    </div>
</div>

<style>

    button {
        cursor: pointer;
    }

    #Property-Preview {
        position: relative;

        max-width: 450px;
        height: 400px;
        background-color: var(--light_brown);

        margin: 10px;
    }

    #Preview-Image {
        width: 450px;
        max-height: 300px;
    }

    h3, #Price {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 30px;
        color: white;
        font-weight: normal;

        font-family: Arial;
    }

    h6 {
        margin: 0;
        margin-left: 5px;

        display: inline-block;

        color: white;
        
        font-family: Arial;
        font-weight: normal;
        font-size: 30px;

    }

    #Statistics {
        margin-top: 5px;
    }

    .Icon {
        width: 40px;
        height: 40px;

        color: white;
        margin: 0;
        margin-left: 5px;

        display: inline-block;
    }

    .Shower, .Bell {
        margin-left: 30px;
    }

    .Bell {
        height: 30px;
        width: 30px;
    }

    .Shower {
        height: 33px;
        width: 33px;
    }

    #Price {
        position: absolute;
        bottom: 0;

        font-size: 25px;
        margin-left: 2px;
        margin-bottom: 1px;
    }

    button {
        position: absolute;
        bottom: 0;
        right: 0;

        margin-right: 4px;
        margin-bottom: 5px;

        background-color: var(--dark_brown);
        border: none;
        border-radius: 5px;

        font-size: 20px;
        color: white;

        padding: 5px 10px 5px 10px;
    }

    @media only screen and (max-width: 900px) {
        #Property-Preview {
            position: relative;

            width: 350px;
            height: 400px;
            background-color: var(--light_brown);
        }

        #Preview-Image {
            width: 350px;
            max-height: 300px;
        }
    }

</style>