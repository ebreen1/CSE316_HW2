import jsTPS_Transaction from "../common/jsTPS.js"

export default class DeleteSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initList, initSongIndex) {
        super();
        this.app = initApp;
        this.songIndex = initSongIndex;
        this.list = initList;
        this.song = this.list.songs[this.songIndex];
    }

    doTransaction() {
        this.app.deleteSong(this.list, this.songIndex);
    }
    
    undoTransaction() {
        this.app.addSong(this.song, this.list, this.songIndex);
    }
}