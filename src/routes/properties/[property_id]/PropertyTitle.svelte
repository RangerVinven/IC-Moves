<script>
    import FaChevronLeft from 'svelte-icons/fa/FaChevronLeft.svelte'

    export let title;
    export let rent;
</script>

<div style="display: flex;align-items:center;gap: 15px;">
        <button on:click={() => history.back()} id="Left-Arrow">
            <FaChevronLeft />
        </button>
        <h1>{title} - {rent} PCM</h1>
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

    @media screen and (max-width: 1200px) {
        h1 {
            text-align: center;
            font-size: 45px;
        }
    }
</style>

