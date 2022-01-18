import React, { Component } from 'react';

class ImageCard extends Component{
  constructor(props){
    super(props);
    this.state = {
      liked: false
    }
  }

  toggleLike = () =>{
    this.setState({liked: !this.state.liked});
  }

  render(){
    let btnString = this.state.liked? "Unlike" : "Like";
    return (
      <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
        <img alt='image' src={this.props.source} width="400" height="300" />
        <div>
          <h2>{this.props.title}</h2>
          <h5>{this.props.date}</h5>
          <p>{this.props.description}</p>
        </div>
        <button onClick={this.toggleLike} style={this.state.liked? {color: 'red'} : {color: 'white'}}> {btnString} </button>
      </div>
     );
  }
}

export default ImageCard;