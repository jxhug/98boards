<script>
    import { createEventDispatcher } from "svelte";
  
    const emojis = [
      "😀", "😂", "😍", "🥺", "🤔", "🙄", "😢", "👍", "👎", "🔥", "🎉", "💯", "❓", "❤️", "👏", "🖐️", "😎", "🤷",
      "😇", "😜", "🤪", "😤", "😱", "😡", "🤗", "🤭", "🤫", "🥳", "😷", "🤒", "🤕", "🤑", "🤠", "🥶", "🥵", "😴",
      "😵", "🤯", "😲", "🤩", "🤓", "😈", "👹", "👺", "💀", "👻", "👽", "🤖", "💩", "🎃", "😺", "😸", "😹", "😻",
      "😼", "😽", "🙀", "😿", "😾", "🙈", "🙉", "🙊", "🐵", "🐶", "🐺", "🦊", "🐱", "🦁", "🐯", "🐴", "🦄", "🐮",
      "🐷", "🐽", "🐸", "🐹", "🐰", "🐻", "🐨", "🐼", "🐔", "🐦", "🐧", "🐤", "🐣", "🐥", "🦆", "🦅", "🦉", "🦇",
      "🐺", "🐗", "🐴", "🦄", "🐝", "🐛", "🦋", "🐌", "🐞", "🐜", "🪲", "🪳", "🕷️", "🕸️", "🦂", "🐢", "🐍", "🦎",
      "🦖", "🦕", "🐙", "🦑", "🦐", "🦞", "🦀", "🐡", "🐠", "🐟", "🐬", "🐳", "🐋", "🦈", "🐊", "🐅", "🐆", "🦓",
      "🦍", "🦧", "🐘", "🦛", "🦏", "🐪", "🐫", "🦒", "🦘", "🐃", "🐂", "🐄", "🐎", "🐖", "🐏", "🐑", "🐐", "🦌",
      "🐕", "🐩", "🦮", "🐕‍🦺", "🐈", "🐓", "🦃", "🦚", "🦜", "🦢", "🦩", "🕊️", "🐇", "🐁", "🐀", "🐿️", "🦔"
    ];
  
    const dispatch = createEventDispatcher();
  
    function selectEmoji(emoji) {
      dispatch("emojiSelected", emoji);
    }
  </script>
  
  <div class="fixed top-0 left-0 w-64 h-full bg-white shadow-md p-4 overflow-y-auto">
    <div class="grid grid-cols-4 gap-2">
      {#each emojis as emoji}
        <button on:click={() => selectEmoji(emoji)} class="text-2xl p-2 border-none bg-transparent cursor-pointer rounded-r-lg transition-colors duration-200 hover:bg-gray-100">
          {emoji}
        </button>
      {/each}
    </div>
  </div>
  
  <!-- need to make this work for mobile -->