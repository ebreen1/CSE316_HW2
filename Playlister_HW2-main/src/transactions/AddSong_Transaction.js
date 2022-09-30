import jsTPS_Transaction from "../common/jsTPS.js"

export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initSong, initList) {
        super();
        this.app = initApp;
        this.song = initSong;
        this.songIndex = initList.songs.length;
        this.list = initList;
    }

    doTransaction() {
        this.app.addSong(this.song, this.list, this.songIndex);
    }
    
    undoTransaction() {
        this.app.deleteSong(this.list, this.songIndex);
    }
}