class Song {
    constructor(name, band) {
        this.name = name;
        this.band = band;
    }
}

class GState {
    constructor() {
        this.playlist = [];
        this.init();
    }
    add(song) {
        if (song && song.name)
            this.playlist.push(song);
        else
            throw "Trying to add song without name";
    };
    remove(index) {
        if (index > -1)
            this.playlist.splice(index, 1);
    };
    init() {
        this.add(new Song("My favorite", "This band"));
        this.add(new Song("Second favorite", "Other band"));
    };
    updateBand(name,newBand){
        let song = this.playlist.find(song=> song.name = name)
        if (song) {
            song.band = newBand;
        }
    }
}

const gState = new GState();

let app = new Vue({
    el: "#app",
    data: gState
})

