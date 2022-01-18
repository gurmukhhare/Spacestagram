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
      <div className='bg-near-white br3 pa3 ma2 bw2 shadow-5'>
        <img alt='NASAImage' src={this.props.source} width="100%" height="auto" />
          <h2>{this.props.title}</h2>
          <h5>{this.props.date}</h5>
          <p>{this.props.description}</p>
        <button onClick={this.toggleLike} className={this.state.liked ? "likedBtn" : "unlikedBtn"}> {btnString} </button>
      </div>
     );
  }
}

export default ImageCard;