<script>
    import FaChevronDown from 'svelte-icons/fa/FaChevronDown.svelte'

    let otherImages; // The Other-Images div
    let isScrollButtonHidden = false;

    // Checks if the #Other-Images has been scrolled all the way
    function hasImagesScrolledToBottom() {
        if(otherImages.scrollTop === (otherImages.scrollHeight - otherImages.offsetHeight)) return true;
        return false;
    }

    function hideScrollButton() {
        isScrollButtonHidden = !isScrollButtonHidden;
    }

</script>

<div id="PropertyImages">
    <img id="Main-Image" src="../assets/Property_Page/1.png" alt="A stone house">
    <div bind:this={otherImages} on:scroll={() => {
        let isScrolledToBottom = hasImagesScrolledToBottom();
        if(isScrolledToBottom) hideScrollButton();
    }} id="Other-Images">
        <img src="../assets/Property_Page/2.png" alt="A stone house" />
        <img src="../assets/Property_Page/3.png" alt="A decorated living-room" />
        <img src="../assets/Property_Page/4.png" alt="A nice kitchen" />
        <img src="../assets/Property_Page/5.png" alt="An empty attic room" />
        
        {#if !isScrollButtonHidden}
            <button id="Scroll-Button">
                <FaChevronDown />
            </button>
        {/if}
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

        position: relative;
    }

    #Other-Images > img {
        width: 100%;
        height: auto;
    }

    #Scroll-Button {
        position: sticky;

        width: 100%;
        height: 50px;

        background-color: rgba(255, 255, 255, 0.75);
        border: none;

        bottom: 0;
        cursor: pointer;
    }
</style>