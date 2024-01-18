<script>
    import OtherImages from './OtherImages/OtherImages.svelte';

    function changeMainImage(imageToChangeTo) {
        mainImage = imageToChangeTo;
    }

    let mainImage = "1";
    let otherImages = {'1': 'A stone house', '2': 'A decorated living-room', '3': 'A landing with some rooms to the side', '4': 'A nice kitchen', '5': 'An empty attic'}

</script>

<div id="PropertyImages">
    <img id="Main-Image" src="../assets/Property_Page/{mainImage}.png" alt="A stone house">
    <OtherImages {changeMainImage} {otherImages} />
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