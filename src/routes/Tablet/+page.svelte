<script>
    import Navbar from "$lib/components/Navbar.svelte"
    import HeroSection from "./HeroSection.svelte"
</script>

<header>
    <div style="margin-top: 0;">
        <Navbar page="Home" />
    </div>
</header>
    
<main>
    <HeroSection />

    <h1 id="Looking-For-Header">Whether You're Looking For:</h1>
</main>

<style>
    #Looking-For-Header {
        text-align: center;
        font-size: 45px;
        font-weight: normal;

        margin: 10px, 0px;
    }
</style>