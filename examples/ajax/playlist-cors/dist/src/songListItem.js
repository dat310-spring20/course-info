/*
* Component song list item
* emits: delete
*/
Vue.component("song-list-item",{
    props: ['song'],
    template: `<li>
        <img 
            src="images/saving.gif" 
            alt="saving" 
            class="saving"
            v-if="song.saving"
        >
        <img 
            src="images/delete.png" 
            alt="delete" 
            class="delete"
            v-else
            v-on:click="$emit('delete')">
        <div>{{ song.name }}</div>
        <div>{{ song.band }}</div>
    </li>`
});