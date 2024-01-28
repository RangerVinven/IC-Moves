<script>
    import OtherImages from './OtherImages/OtherImages.svelte';

    function changeMainImage(imageToChangeTo) {
        mainImage = imageToChangeTo;
    }

	export let data;

    let mainImage = "1";

</script>

<div id="PropertyImages">
    <img id="Main-Image" src="../assets/Properties/{data["folder"]}/{mainImage}.jpg" alt="A stone house">
    <OtherImages {changeMainImage} {data} /> 
</div>

<style>
    #PropertyImages {
        display: flex;
        justify-content: center;
        align-items: flex-start; 
    }

    #Main-Image {
        width: 90%;
        height: auto;

        max-height: 580px;
    }

    @media screen and (max-width: 1200px) {
        #Main-Image {
            width: 100%;
        }

        #PropertyImages {
            flex-direction: column;
            align-items: center;
        }
    }

</style>