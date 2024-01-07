<script lang="js">
    import { IconHeart } from '@tabler/icons-svelte';
    import { IconHeartFilled } from '@tabler/icons-svelte';

    export let isFilled;
    let iconSize = 32;
</script>

{#if isFilled} 
    <div style="color: var(--light_brown);">
        <IconHeartFilled size={iconSize} />
    </div>
{:else}
    <IconHeart size={iconSize} />
{/if}