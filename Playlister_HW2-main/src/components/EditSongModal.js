import React, { Component } from 'react';

export default class EditSongModal extends Component {
    render() {
        const { list, songIndex, editSongCallback, hideEditSongModalCallback } = this.props;
        let song = {title: "", artist: "", youTubeId: ""};
        if(list){
            song = list.songs[songIndex];
        }
        return (
            <div 
                class="modal" 
                id="edit-song-modal" 
                data-animation="slideInOutLeft">
                    <div class="modal-root" id='verify-edit-song-root'>
                        <div class="modal-north">
                            Edit Song
                        </div>
                        <div class="modal-center">
                            <div class="modal-center edit-song-modal-center">
                                <div>Title:</div>
                                <input 
                                    type="text"
                                    id="edit-song-title-field"
                                    value={song.title} />
                                <div>Artist:</div>
                                <input
                                    type="text"
                                    id="edit-song-artist-field"
                                    value={song.artist} />
                                <div>You Tube Id:</div>
                                <input
                                    type="text"
                                    id="edit-song-youtubeid-field"
                                    value={song.youTubeId} />
                            </div>
                        </div>
                        <div class="modal-south">
                            <input type="button" 
                                id="edit-song-confirm-button" 
                                class="modal-button" 
                                onClick={editSongCallback}
                                value='Confirm' />
                            <input type="button" 
                                id="edit-song-cancel-button" 
                                class="modal-button" 
                                onClick={hideEditSongModalCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}