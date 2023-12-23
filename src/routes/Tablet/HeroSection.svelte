<script>
    import CallToAction from "$lib/components/CallToAction.svelte";
</script>

<div id="Hero-Body">

    <img id="Hero-Image" src="assets/Home_Page/Hero_Image.jpg" alt="Parents hugging their child">

    <div>
        <h1>Find Your <i style="color: var(--light_brown)">Perfect</i> Home!</h1>  
        <h3><i>Helping people find their perfect home since 1999</i></h3>
    </div>

    <CallToAction />
</div>

<style>
    #Hero-Image {
        width: 100%;

        opacity: 0.25;

        position: absolute;
        z-index: -1;
    }

    #Hero-Body {
        position: relative;
        height: 100vh;
        overflow: hidden;

        display: flex;
        flex-direction: column;
        
        justify-content: center;
        align-items: center;
    }

    #Hero-Body h1 {
        font-weight: normal;
        font-size: 75px;

        margin-bottom: 0;
    }

    #Hero-Body h3 {
        font-weight: normal;
        font-size: 33px;

        margin-top: 3px;
        text-align: center;
    }
</style>