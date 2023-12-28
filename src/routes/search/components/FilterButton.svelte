<script lang="ts">
    export let text: string;
</script>

<button>{text}</button>

<style>
    button {
        cursor: pointer;

        width: 100%;

        background-color: var(--light_brown);
        border: none;
        border-radius: 5px;

        color: white;
        font-size: 20px;

        white-space: nowrap;
    }

    button:hover {
        background-color: var(--dark_brown);
    }

    @media only screen and (max-width: 900px) {
        button {
            padding: 30px;
        }

    }
</style>
