import React, {Component} from 'react';
import axios from 'axios';

import Navbar from '../NavBar/navbar';
import MemeComponent from '../MemeComponent/memeComponent';

class singleMeme extends Component{
    
    constructor(props){

        super(props);
        this.state = {
            meme: null,
        }

    }

    componentDidMount(){
        const url = "http://localhost:5000/memes/" + this.props.match.params.id;
        console.log(url);
        axios.get(url)
        .then((resp) => {
            console.log(resp);
            this.setState({
                meme:
                    <MemeComponent name = {resp.data['name']} caption = {resp.data['caption']} url = {resp.data['url']}/>
            })
        });
    }

    render (){

        return(
            <div>
                <Navbar />
                <div className = "container">
                    {this.state.meme}
                </div>
            </div>
    
        );    

    }

    
}

export default singleMeme;