<script>
    import CallToAction from "$lib/components/CallToAction.svelte";
    import Navbar from "$lib/components/Navbar.svelte"
    import HeroSection from "./HeroSection.svelte"
    import HomeBody from "./HomeBody.svelte";
</script>

<header>
    <div style="margin-top: 0;">
        <Navbar page="Home" />
    </div>
</header>
    
<main>
    <HeroSection />

    <h1 class="Header Looking-For-Header">Whether You're Looking For:</h1>
    <HomeBody />
    <h1 class="Header Something-For-You-Header">We have something for you.</h1>

    <div id="Call-To-Action-Div">
        <CallToAction />
    </div>
</main>

<style>

    .Header {
        text-align: center;
        font-size: 45px;
        font-weight: normal;
    }

    .Looking-For-Header {
        margin-top: 12vh;
        margin-bottom: 4vh;
    }

    .Something-For-You-Header {
        margin-top: 4vh;
        margin-bottom: 4vh;
    }

    #Call-To-Action-Div {
        display: flex;
        justify-content: center;
        align-items: center;

        margin-bottom: 20px;
    }

    @media only screen and (max-width: 600px) {
        .Header {
            font-size: 44px;
            margin-bottom: 5%;
        }

        .Looking-For-Header {
            margin-top: 4%;
        }
    }
</style>