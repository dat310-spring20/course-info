/*
* Component song list item
* emits: delete
*/
Vue.component("song-list-item",{
    props: ['song', 'index'],
    template: `<li>
        <img 
            src="images/delete.png" 
            alt="delete" 
            class="delete" 
            v-on:click="remove">
        <div>{{ song.name }}</div>
        <div>{{ song.band }}</div>
    </li>`,
    methods: {
        remove: function(){
            gState.remove(this.index);
        }
    }
});