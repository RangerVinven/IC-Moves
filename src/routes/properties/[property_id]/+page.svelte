<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import PropertyTitle from './PropertyTitle.svelte';
    import PropertyImages from "./PropertyImages.svelte";

    export let data;
</script>

<Navbar />

<!-- Container Div -->
<div style="display: flex;justify-content:center;">
    <PropertyTitle />

    <PropertyImages />

</div>

<style>

</style>