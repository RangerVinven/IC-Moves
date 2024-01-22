<script>
    export let data; // The property data
</script>

<div id="Map">
    <iframe src={data.mapLink} title="Map showing the location of the property" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>


<style>
    #Map {
        display: flex;
        justify-content: center;
    }

    iframe {
        width: 85%;
        height: 450px;
    }
</style>