let app = new Vue({
    el: "#app",
    data: {
        playlist: [
            { name: "My favorite", band: "This band"},
            { name: "Second favorite", band: "Other band"}
        ]
    },
    methods: {
        addSong: function(song) {
            this.playlist.push(song);
        },
        remove: function(index){
            if (index > -1) {
                this.playlist.splice(index, 1);
              }
        }
        
    }
})

