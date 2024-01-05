<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import PropertyTitle from './PropertyTitle.svelte';
    import PropertyImages from "./PropertyImages.svelte";

    // export let data;
</script>

<Navbar />

<!-- Container Div -->
<div id="Container">
    <PropertyTitle />

    <PropertyImages />
</div>

<style>
    #Container {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;
    }
</style>