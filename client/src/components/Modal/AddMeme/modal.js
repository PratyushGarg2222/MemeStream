import React from 'react';
import classes from './modal.module.css';

const modalMeme = () => {

    return (
        
        <div className={'modal fade' + ' ' + classes.modalFont} id="addMemeModal" tabindex="-1" aria-labelledby="addMemeModalLabel" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="addMemeModalLabel">Add New Meme</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                
                    <form>
                        <div className="mb-3">
                          <label for="nameOwner" class="form-label">Meme Owner</label>
                          <input type="text" placeholder = "Enter your full name" className="form-control" id="nameOwner" />
                        </div>
                        <div className="mb-3">
                          <label for="captionMeme" className="form-label">Caption</label>
                          <input type="text" placeholder = "Be Creative with the Caption" className="form-control" id="captionMeme" />
                        </div>
                        <div className="mb-3">
                            <label for="urlMeme" className="form-label">URL</label>
                            <input type="text" placeholder = "Enter the Meme URL here " className="form-control" id="urlMeme" />
                        </div>
                    </form>

                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
            </div>
        </div>


    );

}

export default modalMeme;