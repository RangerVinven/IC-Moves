<script lang="ts">
    import Logo from "./Logo.svelte";
    
    export let page: string;
</script>

<nav>
    <Logo />
    <ul>
        <li><a id={page === "Home" ? "active" : ""} href="/#">Home</a></li>
        <li><a id={page === "Search" ? "active" : ""} href="/#">Search Properties</a></li>
        <li><a id={page === "Login" ? "active" : ""} href="/#">Login</a></li>
        <li><a id={page === "Sign-Up" ? "active" : ""} href="/#">Sign-Up</a></li>
    </ul>

    <div id="Hamburger-Icon">
        <div class="Bar Bar-1" />
        <div class="Bar Bar-2" />
        <div class="Bar Bar-3" />
    </div>
</nav>

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

    li {
        padding-right: 35px;
        
        font-size: 20px;
        font-family: "Arial";
    }

    a {
        text-decoration: none;
        color: black
    }

    a:hover {
        color: var(--dark_brown);
    }

    #active {
        font-weight: bold;
        color: var(--dark_brown);
    }

    @media only screen and (max-width: 600px) {
        nav {
            position: absolute;
            align-items: center;
        }

        ul {
            display: none;
        }

        #Hamburger-Icon {
            margin-right: 7%;
            cursor: pointer;
        }

        .Bar {
            width: 30px;
            height: 5px;
            background-color: black;

            margin-bottom: 5px;
        }

    }
</style>