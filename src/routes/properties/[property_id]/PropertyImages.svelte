<script>
    import FaChevronDown from 'svelte-icons/fa/FaChevronDown.svelte'
</script>

<div id="PropertyImages">
    <img id="Main-Image" src="../assets/Property_Page/1.png" alt="A stone house">
    <div id="Other-Images">
        <img src="../assets/Property_Page/2.png" alt="A stone house" />
        <img src="../assets/Property_Page/3.png" alt="A decorated living-room" />
        <img src="../assets/Property_Page/4.png" alt="A nice kitchen" />
        <img src="../assets/Property_Page/5.png" alt="An empty attic room" />
    </div>
</div>

<style>
    #PropertyImages {
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

    #Main-Image {
        height: 580px;
        width: 1020px;
    }

    #Other-Images {
        display: flex;
        flex-direction: column;
        
        justify-content: flex-start;
        align-items: flex-start;

        width: 300px;
        margin-left: 15px;

        height: 580px;
        overflow: scroll;
    }

    #Other-Images > img {
        width: 100%;
        height: auto;
    }
</style>