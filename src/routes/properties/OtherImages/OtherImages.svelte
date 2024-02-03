<script lang="js">
    export let data;

    import FaChevronDown from 'svelte-icons/fa/FaChevronDown.svelte'

    let otherImagesDiv; // The Other-Images div
    let scrollButtonClass = "Scroll-Button-Absolute";

    let isScrollButtonHidden = false;

    export let changeMainImage; // Function to change the main image being displayed

    // Changes Scroll-Button to position absolute when Other-Images is scrolled to the top, position sticky otherwise
    function changeClassIfScrolledToTop() {
        if(otherImagesDiv.scrollTop === 0) {
            scrollButtonClass = "Scroll-Button-Absolute"
        } else {
            scrollButtonClass = "Scroll-Button-Sticky"
        }
    }

    // Checks if the #Other-Images has been scrolled all the way
    function hasImagesScrolledToBottom() {
        if(otherImagesDiv.scrollTop === (otherImagesDiv.scrollHeight - otherImagesDiv.offsetHeight)) return true;
        return false;
    }

    // Hides the scroll to bottom arrow icon
    function hideScrollButton() {
        isScrollButtonHidden = true;
    }

    // Shows the scroll to bottom arrow icon
    function showScrollButton() {
        isScrollButtonHidden = false;
    }

    // Scrolls to the bottom of the images when the down arrow is pressed
    function scrollDown() {
        otherImagesDiv.scrollBy(0, otherImagesDiv.clientHeight);
    }

</script>

<div bind:this={otherImagesDiv} on:scroll={() => {
    let isScrolledToBottom = hasImagesScrolledToBottom();

    if(isScrolledToBottom) {
        hideScrollButton();
    } else {
        changeClassIfScrolledToTop();
        showScrollButton();
    }
}} id="Other-Images">

    <!-- {#each Object.entries(data.images) as [image, altDescription]}
        <button on:click={() => { changeMainImage(image) }} class="Other-Image-Button"><img src="../assets/Properties/{data["folder"]}/{image}.jpg" alt={altDescription} /></button>
    {/each} -->

    <button on:click={() => { changeMainImage(1) }} class="Other-Image-Button"><img src="../assets/Properties/{data["folder"]}/{1}.jpg" /></button>
    <button on:click={() => { changeMainImage(2) }} class="Other-Image-Button"><img src="../assets/Properties/{data["folder"]}/{2}.jpg" /></button>
    <button on:click={() => { changeMainImage(3) }} class="Other-Image-Button"><img src="../assets/Properties/{data["folder"]}/{3}.jpg" /></button>
    <button on:click={() => { changeMainImage(4) }} class="Other-Image-Button"><img src="../assets/Properties/{data["folder"]}/{4}.jpg" /></button>
    <button on:click={() => { changeMainImage(5) }} class="Other-Image-Button"><img src="../assets/Properties/{data["folder"]}/{5}.jpg" /></button>

    
    {#if !isScrollButtonHidden}
    <button on:click={scrollDown} id="Scroll-Button" class={scrollButtonClass}>
        <FaChevronDown />
    </button>
{/if}
</div>

<style>

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

    #Other-Images > button > img {
        width: 100%;
        height: auto;
    }

    .Other-Image-Button {
        border: none;
        background-color: transparent;
        cursor: pointer;

        padding: none;
    }

    #Scroll-Button {
        width: 100%;
        height: 50px;

        background-color: rgba(255, 255, 255, 0.75);
        border: none;

        bottom: 0;
        cursor: pointer;
    }

    .Scroll-Button-Absolute {
        position: absolute;
    }

    .Scroll-Button-Sticky {
        position: sticky;
    }

    @media screen and (max-width: 1200px) {
        #Other-Images {
            flex-direction: row;
        }

        #Scroll-Button {
            display: none;
        }

        #Other-Images {
            margin-left: 0px;

            width: 100vw;
            height: 150px;
        }

        #Other-Images > button, #Other-Images > button > img {
            width: auto;
            height: 100%;
        }

        #Other-Images > button {
            width: auto;
            height: 100%;
        }
    }

</style>

