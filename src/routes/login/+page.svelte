<script>
    import Navbar from "$lib/components/Navbar.svelte";

    let email = "";
    let password = "";

    let incorrectCreds = false;

    // Gets the session token if the credentials are correct
    async function login(email, password) {
        const res = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        })

        // If the login details were correct
        if(res.status === 200) {
            const data = await res.json();

            document.cookie = data["token"];
            incorrectCreds = false;

        // If the login details were wrong
        } else if (res.status === 401) {
            incorrectCreds = true;

        // Something went wrong 
        } else {
            // Add something went wrong
        }
    }

</script>

<Navbar page="Login" />

<div id="Mobile-Background">
    <div id="Login-Form-Container">
        <div id="Form">
            <h1>Login</h1>

            <div id="Inputs">
                <div>
                    <h3>Email</h3>
                    <input type="text" bind:value={email} />
                </div>

                <div>
                    <h3>Password</h3>
                    <input type="password" bind:value={password} />
                </div>
            </div>

            <div id="Button">
                <button on:click={() => login(email, password)}>Login</button>
            </div>

            {#if incorrectCreds}
                <div id="Error-Message">
                    <h6><i>Incorrect email or password</i></h6>
                </div>
            {/if}

            <h6>Don't have an account? <b><a href="/sign-up">Sign-up</a></b></h6>
        </div>
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

    @media only screen and (max-width: 600px) {
        #Login-Form-Container {
            height: 100dvh;
            width: 100dvw;

            overflow: hidden;
        }

        #Form {
            height: 95dvh;
        }

        #Inputs {
            margin-top: 15%;
        }

        #Mobile-Background {
            background-color: var(--light_brown);
        }
    }

</style>