import { writable } from "svelte/store";
import { browser } from "$app/environment"

const SessionTokenStore = writable("");

// Loads the session_token to the store when app initalises
const session_token = browser && localStorage.getItem("session_token")
if(session_token) {
    SessionTokenStore.set(session_token);
}

// Saves the session_token to the localStorage whenever it changes
SessionTokenStore.subscribe(token => {
    browser && localStorage.setItem("session_token", token)
})

export default SessionTokenStore;