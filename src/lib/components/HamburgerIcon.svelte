<script lang="ts">
    import NavbarLinks from "./NavbarLinks.svelte";    

    let navbarHasBeenPressed = false;
    let navbarPressed = false;

    export let page: string;
</script>

<div id="Mobile-Nav-Background" class:Animate-Mobile-Navbar-Appear={navbarPressed} class:Animate-Mobile-Navbar-Disappear={!navbarPressed}>
    <ul id="Mobile-Navbar">
        <NavbarLinks {page} />
    </ul>
</div>

<button id="Hamburger-Icon" on:click={() => {
    navbarPressed = !navbarPressed;
    navbarHasBeenPressed = true;
    }}>
    <div class="Bar Bar-1" class:Bar-1-Navbar-Active={navbarPressed} class:Bar-Deactivate-Navbar={!navbarPressed && navbarHasBeenPressed} />
    <div class="Bar Bar-2" class:Bar-2-Navbar-Active={navbarPressed} class:Bar-Deactivate-Navbar={!navbarPressed && navbarHasBeenPressed} />
    <div class="Bar Bar-3" class:Bar-3-Navbar-Active={navbarPressed} class:Bar-Deactivate-Navbar={!navbarPressed && navbarHasBeenPressed} />
</button>

<style>
    nav { 
        z-index: 1;

        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    ul {
        list-style: none;

        width: 80%;
        display: flex;
        align-items: center;
        justify-content: right;
    }

    #Mobile-Nav-Background {
        display: none;
    }

    #Hamburger-Icon {
        border: none;
        background-color: transparent;
    }

    #Desktop-Tablet-Navbar {
        text-align: center;
    }

    @media only screen and (max-width: 600px) {

        .Animate-Mobile-Navbar-Appear {
            transform: translateY(100dvh);
            transition-duration: 0.5s;
        }

        .Animate-Mobile-Navbar-Disappear {
            transition-duration: 0.5s;
        }

        #Logo-Container {
            z-index: 2;
        }
        nav {
            align-items: center;
        }

        #Desktop-Tablet-Navbar {
            display: none;
        }

        #Hamburger-Icon {
            margin-right: 7%;
            cursor: pointer;

            z-index: 2;
        }

        #Mobile-Nav-Background {
            position: absolute;
            display: flex;

            top: -100dvh;

            justify-content: center;
            align-items: center;

            height: 100dvh;
            width: 100%;

            z-index: 1;

            background-color: white;
        }

        .Bar {
            width: 50px;
            height: 5px;

            border-radius: 10px;

            background-color: black;
            margin-bottom: 5px;
        }

        .Bar-Deactivate-Navbar {
            transition-duration: 0.5s;
        }

        
        .Bar-2-Navbar-Active {
            visibility: hidden;
            opacity: 0;
            transition: all 0.15s ease-in;
        }

        .Bar-1-Navbar-Active {
            transform: translate(0, 10px) rotate(45deg);
            transform-origin: center;
            transition-duration: 0.5s;
        }

        .Bar-3-Navbar-Active {
            transform: translate(0, -10px) rotate(-45deg);
            transform-origin: center;
            transition-duration: 0.5s;
        }

        #Mobile-Navbar {
            flex-direction: column;
            gap: 50px;

            text-align: center;
        }

    }
</style>