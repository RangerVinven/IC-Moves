<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import PropertyTitle from './PropertyTitle.svelte';
    import PropertyImages from "./PropertyImages.svelte";
    import Facilities from "./Facilities.svelte";
    import MoreInfo from "./MoreInfo.svelte";

    import HeartIcon from "./HeartIcon.svelte";

    $: isPropertySaved = false;
</script>

<Navbar page="Search"/>

<!-- Container Div -->
<div id="Container">

    <div>
        <div id="Property-Title">
            <PropertyTitle />
        </div>
        <PropertyImages />

        <div id="Name-And-Heart">
            <h3>Rubislaw Den North, West End, AB15 8TS</h3>

            <button on:click={() => { isPropertySaved = !isPropertySaved }} id="Heart-Icon-Button">
                <div id="Heart-Icon">
                    <HeartIcon isFilled={isPropertySaved} />
                </div>

            </button>

        </div>

        <Facilities />
        <div style="margin-top: 12px;" />
        <MoreInfo />
    </div>
    

</div>

<style>
    #Container {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;

        
    }

    #Property-Title {
        display: flex;
        justify-content:center;
    }

    #Name-And-Heart {
        display: flex;
        align-items: center;

        gap: 10px;
    }

    #Heart-Icon {
        height: 30px;
        width: 30px;
    }

    #Heart-Icon-Button {
        background-color: transparent;
        border: none;

        cursor: pointer;
    }

    h3 {
        text-align: left;

        font-weight: normal;
        font-family: Arial;
        font-size: 30px;

        margin: 0px;
    }
</style>