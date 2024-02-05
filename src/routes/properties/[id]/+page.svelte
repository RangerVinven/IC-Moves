<script>
import Navbar from "$lib/components/Navbar.svelte";

import PropertyTitle from './PropertyTitle.svelte';
import PropertyImages from "./PropertyImages.svelte";

import Facilities from "./Facilities.svelte";
import MoreInfo from "./MoreInfo.svelte";

import Map from './Map.svelte';

import HeartIcon from "./HeartIcon.svelte";
import CallToAction from "./CallToAction.svelte";

export let data;
let isPropertySaved;

async function saveProperty(method) {
    const res = fetch("http://127.0.0.1:8000/saved/" + data["id"], {
        method: method,
        headers: {
            "session_token": localStorage.getItem("session_token")
        }
    });
}

async function isSavedFunction() {
    const res = await fetch("http://127.0.0.1:8000/properties/" + data["id"] + "/is_saved", {
        headers: {
            "session_token": localStorage.getItem("session_token")
        }
    });
    const resData = await res.text();

    if (resData === "true") {
        isPropertySaved = true;
    } else {
        isPropertySaved = false;
    }
}

</script>

<Navbar page="Search"/>

<!-- Container Div -->
<div id="Container">

    <div>
        <div id="Property-Title">
            <PropertyTitle title={data.name} rent={data.rent} />
        </div>
        <PropertyImages {data} />

        <div id="Name-And-Heart">
            <h3>{data.address}</h3>

            <button on:click={() => {
                    isPropertySaved = !isPropertySaved;

                    // GET for saving a property, DELETE for deleting one
                    if(isPropertySaved) {
                        saveProperty("GET");
                    } else {
                        saveProperty("DELETE");
                    }
                }} id="Heart-Icon-Button">

                <div id="Heart-Icon">
                    <HeartIcon isFilled={isPropertySaved} {isSavedFunction} />
                </div>

            </button>

        </div>

        <Facilities {data} />
        <div style="margin-top: 12px;" />
        <MoreInfo {data} />

        <Map {data} />

        <CallToAction {data} />
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

    @media screen and (max-width: 1200px) {
        #Name-And-Heart {
            margin-left: 10px;
        }
    }
</style>