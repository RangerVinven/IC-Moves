<script>
    import CallToAction from "$lib/components/CallToAction.svelte";
</script>

<div id="Hero-Section">
    <div id="Hero-Text">
        <h1>Find Your <i style="color: var(--light_brown)">Perfect</i> Home!</h1>  
        <h3><i>Helping people find their perfect home since 1999</i></h3>

        <CallToAction />
    </div>

    <div id="Hero-Image-Container">
        <img id="Hero-Image" src="assets/Home_Page/Hero_Image_Rounded.png" alt="Two parents hugging their child">
    </div>
    
    <img id="Hero-Curve" src="assets/Home_Page/Hero_Curve.png">

</div>

<style>
    #Hero-Section {
        height: 80vh;

        display: flex;
        justify-content: space-evenly;
        align-items: center;

        
    }

    #Hero-Text {
        margin-left: 2%;
    }

    #Hero-Text h1 {
        font-weight: normal;
        font-size: 50px;

        margin-bottom: 0;
    }

    #Hero-Text h3 {
        font-weight: normal;
        font-size: 30px;

        margin-top: 3px;
        
    }

    #Hero-Image-Container {
        width: 500px;
        height: auto;

        margin-right: 50px;

        box-shadow: 10px, 10px, 5px;
    }

    #Hero-Image {
        object-fit: fit;
        width: 100%;
        height: 100%;
    }

    #Hero-Curve {
        width: 100%;
        
        position: absolute;
        bottom: 0;

        z-index: -1;
    }

    @media only screen and (max-width: 600px) {
        #Hero-Section {
            height: 100vh;
            width: 100%;
        }

        #Hero-Curve {
            display: none;
        }

        #Hero-Image-Container {
            height: 100vh;
            width: 100vh;

            position: absolute;
            overflow: hidden;

            z-index: -1;
        }
        #Hero-Image {
            opacity: 25%;
        }

        #Hero-Text {
            text-align: center;
        }
}
</style>