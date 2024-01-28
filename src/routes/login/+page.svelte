<script>
    import Navbar from "$lib/components/Navbar.svelte";
</script>

<Navbar page="Login" />

<div id="Login-Form-Container">
    <div id="Form">
        <h1>Login</h1>

        <div id="Inputs">
            <div>
                <h3>Email</h3>
                <input type="text" />
            </div>

            <div>
                <h3>Password</h3>
                <input type="password" />
            </div>
        </div>

        <div id="Button">
            <button>Login</button>
        </div>

        <h6>Don't have an account? <b><a href="/sign-up">Sign-up</a></b></h6>
    </div>
</div>

<style>
    #Login-Form-Container {
        height: 80dvh;     
        width: 100dvw;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    #Form {
        padding-top: 15px;
        
        background-color: var(--light_brown);

        min-height: 40%;
        width: 60dvh;

        border-radius: 5px;
    }

    h1 {
        margin-top: 10px;
        margin-bottom: 0;

        text-align: center;
        font-size: 60px;
        font-weight: bold;

        color: white;
    }

    #Inputs {
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;

        width: 100%;
    }

    #Inputs > div {
        width: 50%;
    }

    h3 {
        font-size: 40px;
        font-weight: normal;

        margin-bottom: 0px;
        text-align: left;

        color: white;
    }

    input {
        width: 100%;
        height: 35px;

        border-radius: 5px;

        font-size: 20px;
        padding-left: 5px;
    }

    #Button {
        margin-top: 30px;
        display: flex;
        justify-content: center;
    }

    button {
        background-color: var(--dark_brown);
        color: white;
        padding: 5px;

        cursor: pointer;

        border: none;
        border-radius: 5px;

        width: 40%;
        font-size: 25px;
    }

    h6 {
        text-align: center;
        font-family: Arial;
        font-weight: normal;

        font-size: 15px;

        color: white;
        margin-bottom: 5px;
    }

    a {
        text-decoration: underline;
        color: white;
    }
</style>