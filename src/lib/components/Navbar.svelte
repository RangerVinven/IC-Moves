<script lang="ts">
    import HamburgerIcon from './HamburgerIcon.svelte';
    import NavbarLinks from './NavbarLinks.svelte';
    import Logo from "./Logo.svelte";
    
    export let page: string;
</script>

<nav>
    <div id="Logo-Container">
        <Logo />
    </div>
    <ul id="Desktop-Tablet-Navbar">
        <NavbarLinks {page} />
    </ul>

    <HamburgerIcon {page} />
</nav>

<style>
    nav { 
        z-index: 1;

        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    ul {
        width: 80%;

        display: flex;
        align-items: center;
        justify-content: right;
        
        list-style: none;
    }

    #Desktop-Tablet-Navbar {
        text-align: center;
    }

    @media only screen and (max-width: 600px) {
        #Logo-Container {
            z-index: 2;
        }
        nav {
            align-items: center;
        }

        #Desktop-Tablet-Navbar {
            display: none;
        }
    }
</style>