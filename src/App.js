import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import ImageCardList from './components/ImageCardList';

const apiKey = 'OaSQgn5r30pCyS5f8MiwPufbVaoGRCxKlfTzNPmG';
const initialState = {
    images: [],
    startDate: '',
    endDate: '',
    route: 'home'
}

class App extends Component {
    constructor(){
        super();
        this.state = initialState;
    }

    handleRetrieveImages = () =>{
        this.setState({ route: 'displayImages'});
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=2017-07-08&end_date=2018-01-01`)
            .then(response=>response.json())
            .then(result=>{
                this.setState({ images: result});
                console.log(this.state.images);
            });
    }

    handleSelect(ranges){
        console.log(ranges);
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
    }



    render(){
        const selectionRange = {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }

        return (
            <div className="App">
                <h1> Spacestagram </h1>
                { this.state.route === 'displayImages' ? 
                    (
                        this.state.images.length === 0 ? 
                        <ReactLoading color = {"#197DE7"} type={"bubbles"} height={667} width={375}/>
                        :
                        <div>
                            <ImageCardList images={this.state.images} />
                        </div>
                    )
                :
                    <div>
                        < DateRangePicker ranges = {[selectionRange]} onChange = {this.handleSelect} />
                        < button onClick = {this.handleRetrieveImages}> Retrieve Images </button>
                    </div>
                }

            </div>
        );
    }

}

export default App;
