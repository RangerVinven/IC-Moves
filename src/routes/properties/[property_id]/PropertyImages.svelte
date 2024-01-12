<script>
    import OtherImages from './OtherImages/OtherImages.svelte';
</script>

<div id="PropertyImages">
    <img id="Main-Image" src="../assets/Property_Page/1.png" alt="A stone house">
    <OtherImages />
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

</style>