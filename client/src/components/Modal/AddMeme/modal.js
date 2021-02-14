import React from 'react';
import classes from './modal.module.css';

const modalMeme = () => {

    //Validation of the entered Meme URL to whether it is referring 
    //to an image format or not
    const validateAddMemeForm = () => {

        let urlVal = document.forms["addMemeForm"]["url"].value;
        
        const res = urlVal.match(/\.(jpeg|jpg|gif|png)$/) != null;

        if(!res){

            alert("Please enter valid URL to the Meme");
            
        }

        return res;

    }

    return (
        
        <div className={'modal fade' + ' ' + classes.modalFont} id="addMemeModal" tabindex="-1" aria-labelledby="addMemeModalLabel" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="addMemeModalLabel">Add New Meme</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                
                {/* Add the action bit here, and figure out the post request */}
                    <form id = "addMemeForm" name = "addMemeForm" action = ""   onsumbit = "return validateAddMemeForm()" method = "POST">
                        <div className="mb-3">
                          <label for="nameOwner" class="form-label">Meme Owner</label>
                          <input type="text" name = "name" placeholder = "Enter your full name" className="form-control" id="nameOwner" required/>
                        </div>
                        <div className="mb-3">
                          <label for="captionMeme" className="form-label">Caption</label>
                          <input type="text" name = "caption" placeholder = "Be Creative with the Caption" className="form-control" id="captionMeme" required/>
                        </div>
                        <div className="mb-3">
                            <label for="urlMeme" className="form-label">URL</label>
                            <input type="text" name = "url"  placeholder = "Enter the Meme URL here " className="form-control" id="urlMeme" required/>
                        </div>
                    </form>

                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" form = "addMemeForm" class="btn btn-primary">Save changes</button>
                </div>
            </div>
            </div>
        </div>


    );

}

export default modalMeme;