<script lang="ts">
    import SessionTokenStore from "../stores/SessionTokenStore";
    export let page: string;

    let session_token = "";

    SessionTokenStore.subscribe(data => {
        session_token = data;
    });
    
</script>

<li><a id={page === "Home" ? "active" : ""} href="/">Home</a></li>
<li><a id={page === "Search" ? "active" : ""} href="/search">Search Properties</a></li>
{#if session_token === ""}
    <li><a id={page === "Login" ? "active" : ""} href="/login">Login</a></li>
    <li><a id={page === "Sign-Up" ? "active" : ""} href="/sign-up">Sign-Up</a></li>
{:else}
    <li><a id={page === "My Account" ? "active" : ""} href="/myaccount">My Account</a></li>
    <li><a id={page === "Sign-Out" ? "active" : ""} href="/signout">Sign-Out</a></li>
{/if}

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

