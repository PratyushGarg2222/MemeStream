import React, {Component} from 'react';
import axios from 'axios';

import Navbar from '../NavBar/navbar';
import AddMemeModal from '../Modal/AddMeme/modal';
import MemeComponent from '../MemeComponent/memeComponent';

class mainpage extends Component{

    constructor(props){

        super(props);
        this.state = {
            memes: null,
        }

    }

    componentDidMount(){
        const url = "http://localhost:5000/memes";
        console.log(url);
        axios.get(url)
        .then((resp) => {
            console.log(resp);
            const respArray = resp.data;

            let memesParams = [];
            for(let i=0; i<respArray.length; i++){

                memesParams.push(

                    {
                        id: respArray[i]['id'],
                        name: respArray[i]['name'],
                        caption: respArray[i]['caption'],
                        url: respArray[i]['url'],
                    }

                );

            }

            this.setState({

                memes: memesParams,

            });

        });
    }

    render() {

        const newMemeHandler = (idVal, nameVal, captionVal, urlVal) => {

            let currMemesList = this.state.memes;
            let newMeme = {

                id: idVal,
                name: nameVal,
                caption: captionVal,
                url: urlVal

            }

            currMemesList.unshift(newMeme);

            this.setState({
                memes: currMemesList,

            });

        }

        return (
            <div>
                <Navbar addMemebtnreq/>
                <AddMemeModal newMemeHandler = {newMemeHandler}/>
                {/* <MemeComponent name = "Hello" caption = "This is caption" url = "https://photographylife.com/wp-content/uploads/2017/01/What-is-landscape-photography.jpg"></MemeComponent> */}

                <div className = "container">

                    {this.state.memes ? this.state.memes.map((memeData, idx) => (

                        <MemeComponent 
                            key = {memeData['id']}
                            name = {memeData['name']}
                            caption = {memeData['caption']}
                            url = {memeData['url']}
                            />
                    )) : null}

                </div>
            
            </div>
        )

    }
   
}

export default mainpage;
    