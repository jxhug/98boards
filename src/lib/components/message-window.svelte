<script>
    import Message from '$lib/components/message.svelte';

    export let oldUI;
    export let messages;
    export let currentBoard;
    export let showDate;
    export let showImages;
    export let username;
    export let isReplying;
    export let replyTo;
    export let isEditing;
    export let isMobile;


    let latestMessage = null;

    $: {
        const filteredMessages = messages.filter(message => message.board === currentBoard);
        if (filteredMessages.length > 0) {
            latestMessage = filteredMessages.reduce((latest, message) =>
                message.timestamp > latest.timestamp ? message : latest
            );
        } else {
            latestMessage = null;
        }
    }
</script>

<div class:window={oldUI}>
    <div>
        <h1 class="text-xl font-semibold py-2">messages: {isMobile ? currentBoard : ""}</h1>
        <div class=" h-[75vh] overflow-y-auto flex flex-col-reverse align-bottom">
            {#each messages as message (message.id)}
                {#if message.board === currentBoard}
                    <Message 
                        bind:isReplying={isReplying}
                        bind:replyTo={replyTo}
                        bind:isEditing={isEditing}
                        username={username}
                        message={message}
                        messages={messages}
                        showDate={showDate}
                        showImages={showImages}
                        {isMobile}
                    />
                {/if}
            {/each}
        </div>
    </div>
</div>
