<script lang="ts">
    export let page: string;
</script>

<li><a id={page === "Home" ? "active" : ""} href="/">Home</a></li>
<li><a id={page === "Search" ? "active" : ""} href="/search">Search Properties</a></li>
<li><a id={page === "Login" ? "active" : ""} href="/login">Login</a></li>
<li><a id={page === "Sign-Up" ? "active" : ""} href="/#">Sign-Up</a></li>

<style>
    li {
        padding-right: 35px;
        
        font-size: 20px;
        font-family: "Arial";
    }

    a {
        text-decoration: none;
        color: black;   
    }

    a:hover {
        color: var(--dark_brown);
    }

    #active {
        font-weight: bold;
        color: var(--dark_brown);
    }

    @media only screen and (max-width: 600px) {
        a {
            font-size: 40px;
        }
    }

</style>

