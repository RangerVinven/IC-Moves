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

        display: flex;
        align-items: center;
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
</style>