import jsTPS_Transaction from "../common/jsTPS.js"

export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initSong, initList, initIndex) {
        super();
        this.app = initApp;
        this.newSong = initSong;
        this.list = initList;
        this.songIndex = initIndex;
        this.oldSong = initList.songs[initIndex];
    }

    doTransaction() {
        this.app.setSong(this.newSong, this.list, this.songIndex);
    }
    
    undoTransaction() {
        this.app.setSong(this.oldSong, this.list, this.songIndex);
    }
}