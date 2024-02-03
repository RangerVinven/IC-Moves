<script>
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import SessionTokenStore from "../../lib/stores/SessionTokenStore";

    onMount(() => {        
        // Signs out
        fetch("http://127.0.0.1:8000/logout", {
            headers: {
                "session_token": localStorage.getItem("session_token")
            }
        }).then(res => {
            if (res.status === 200) {
                // Removes the session token
                SessionTokenStore.set("")

                goto("/");
            }
        })
    })
</script>