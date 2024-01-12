<script>
    import FaChevronLeft from 'svelte-icons/fa/FaChevronLeft.svelte'
</script>

<div style="display: flex;align-items:center;gap: 15px;">
        <button on:click={() => history.back()} id="Left-Arrow">
            <FaChevronLeft />
        </button>
        <h1>19 Greenview Cottage - £295 PCM</h1>
    </div>

<style>
    h1 {
        font-weight: normal;
        font-size: 50px;
    }

    #Left-Arrow {
        height: 45px;
        width: 40px;

        color: var(--light_brown);

        background-color: transparent;
        border: none;

        cursor: pointer;
    }
</style>

