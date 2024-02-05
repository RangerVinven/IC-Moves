<script>
    import OtherImages from './OtherImages/OtherImages.svelte';

    function changeMainImage(imageToChangeTo) {
        mainImage = imageToChangeTo;
        mainImageAltDescription = getDescriptionForImage(Number(mainImage));
    }

    // Gets the alt description for the image
    function getDescriptionForImage(image_number) {
        for(let i = 0;i < images.length; i++) {
            // Returns the alt description of the image with the same image_number
            if (images[i].image_number === image_number) return images[i].alt_description
        }
    }

	export let data;
    let images = data["images"];

    let mainImage = "1";
    let mainImageAltDescription = getDescriptionForImage(Number(mainImage));
</script>

<div id="PropertyImages">
    <img id="Main-Image" src="../assets/Properties/{data["folder"]}/{mainImage}.jpg" alt={mainImageAltDescription}>
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