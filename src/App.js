import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import ImageCardList from './components/ImageCardList';
import DateSelect from './components/DateSelect';

const apiKey = 'OaSQgn5r30pCyS5f8MiwPufbVaoGRCxKlfTzNPmG';
const currentDate = new Date(new Date().getTime() - Math.abs(new Date().getTimezoneOffset()*60000)).toISOString().slice(0, 10);

const initialState = {
  images: [],
  route: 'home',
  datePickerStart: new Date(),
  datePickerEnd: new Date(),
  startDate: currentDate,
  endDate: currentDate
}

class App extends Component {
  constructor(){
    super();
    this.state = initialState;
  }

  handleRetrieveImages = () =>{
    if(this.state.datePickerStart.getTime() > this.state.datePickerEnd.getTime() || this.state.datePickerEnd.getTime() > new Date().getTime()){
      alert("Please enter a valid date range");
      const {datePickerStart, datePickerEnd, startDate, endDate} = initialState;
      this.setState({datePickerStart: datePickerStart, datePickerEnd: datePickerEnd, startDate: startDate, endDate: endDate});
    }
    else{
      this.setState({ route: 'displayImages', images: []});
      fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${this.state.startDate}&end_date=${this.state.endDate}`)
        .then(response=>response.json())
        .then(result=>{
          this.setState({ images: result});
        }).catch(err=> alert('ERROR retrieving images. Please ensure the inputted dates are within range'));
    }
  }

  handleSelectDate = (indicator,event) => {
    let date = (new Date(event.getTime() - Math.abs(event.getTimezoneOffset()*60000))).toISOString().slice(0, 10);
    if(indicator === 'start'){
      this.setState({ datePickerStart: event, startDate: date });
    }
    else{
      this.setState({ datePickerEnd: event, endDate: date });
    }
  }

  render(){
    return (
      <div className='tc'>
        <h1> Spacestagram </h1>
        <div className="flexbox-container">
          <DateSelect 
            datePickerStart={this.state.datePickerStart} 
            datePickerEnd={this.state.datePickerEnd} 
            handleSelectDate={this.handleSelectDate}
            handleRetrieveImages={this.handleRetrieveImages}
          />
        </div>
        {this.state.images.length === 0 && this.state.route === 'displayImages' ? 
          <div>
            <ReactLoading color = {"#197DE7"} type={"spinningBubbles"} height={'10%'} width={'10%'} />
            <h2> LOADING... </h2>
          </div>
          :
          <div className="content">
            <ImageCardList images={this.state.images} />
          </div>
        }
      </div>
    );
  }

}

export default App;
