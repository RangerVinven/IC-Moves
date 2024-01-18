<script>
    import FaBed from 'svelte-icons/fa/FaBed.svelte'
    import FaShower from 'svelte-icons/fa/FaShower.svelte'
    import FaBell from 'svelte-icons/fa/FaBell.svelte'
</script>

<div id="Facilities">
    <div class="Facility">
        <div class="Icon">
            <FaBed />
        </div>
        <h6>3</h6>
    </div>

    <div class="Facility">
        <div class="Icon">
            <FaShower />
        </div>
        <h6>2</h6>
    </div>

    <div class="Facility">
        <div class="Icon">
            <FaBell />
        </div>
        <h6>3/10</h6>
    </div>
</div>

<style>

    #Facilities {
        display: flex;
        gap:60px;
    }

    .Facility {
        margin-top: 5px;
        display: flex;
        align-items: center;

        gap: 10px;
    }

    .Icon {
        height: 40px;
        width: 40px;

        color: var(--light_brown);
    }

    h6 {
        font-size: 30px;
        font-family: Arial;
        font-weight: normal;

        margin: 0;
    }

    @media screen and (max-width: 1200px) {
        #Facilities {
            margin-left: 10px;
        }
    }
</style>