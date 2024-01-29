<script>
    import { onMount } from "svelte";
    import SessionTokenStore from "../../lib/stores/SessionTokenStore";

    onMount(() => {

        // Gets the session token from the store
        let session_token = "";
        SessionTokenStore.subscribe(data => {
            session_token = data;
        });

        // Saves the session token to the cookies
        document.cookie = "session_token=" + session_token

        // Signs out
        fetch("http://localhost:3000/signout").then(res => {
            if (res.status === 200) {
                SessionTokenStore.set("")
                document.cookie = "session_token=;"
            } else {
                console.log("Something went wrong");
            }
        })
    })
</script>