import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LineChart from './LineChart';

class App extends Component {
  constructor(){
    super();
    this.state={
      width: 500,
      height : 350, 
      margin : 20,
      data : [
        {
          "x": "2019-05-23T17:16:29.524Z",
          "y": 75
        },
        {
          "x": "2019-05-22T17:16:29.559Z",
          "y": 84
        },
        {
          "x": "2019-05-21T17:16:29.560Z",
          "y": 86
        },
        {
          "x": "2019-05-20T17:16:29.560Z",
          "y": 58
        },
        {
          "x": "2019-05-19T17:16:29.561Z",
          "y": 18
        },
        {
          "x": "2019-05-18T17:16:29.562Z",
          "y": 78
        },
        {
          "x": "2019-05-17T17:16:29.565Z",
          "y": 9
        },
        {
          "x": "2019-05-16T17:16:29.566Z",
          "y": 27
        },
        {
          "x": "2019-05-15T17:16:29.568Z",
          "y": 67
        },
        {
          "x": "2019-05-14T17:16:29.573Z",
          "y": 7
        },
        {
          "x": "2019-05-13T17:16:29.574Z",
          "y": 87
        },
        {
          "x": "2019-05-12T17:16:29.575Z",
          "y": 96
        },
        {
          "x": "2019-05-11T17:16:29.576Z",
          "y": 2
        },
        {
          "x": "2019-05-10T17:16:29.576Z",
          "y": 12
        },
        {
          "x": "2019-05-09T17:16:29.577Z",
          "y": 77
        },
        {
          "x": "2019-05-08T17:16:29.578Z",
          "y": 45
        },
        {
          "x": "2019-05-07T17:16:29.582Z",
          "y": 55
        },
        {
          "x": "2019-05-06T17:16:29.586Z",
          "y": 48
        },
        {
          "x": "2019-05-05T17:16:29.586Z",
          "y": 79
        },
        {
          "x": "2019-05-04T17:16:29.586Z",
          "y": 21
        },
        {
          "x": "2019-05-03T17:16:29.586Z",
          "y": 48
        },
        {
          "x": "2019-05-02T17:16:29.586Z",
          "y": 58
        },
        {
          "x": "2019-05-01T17:16:29.586Z",
          "y": 75
        },
        {
          "x": "2019-04-30T17:16:29.587Z",
          "y": 5
        },
        {
          "x": "2019-04-29T17:16:29.587Z",
          "y": 66
        },
        {
          "x": "2019-04-28T17:16:29.587Z",
          "y": 68
        },
        {
          "x": "2019-04-27T17:16:29.587Z",
          "y": 62
        },
        {
          "x": "2019-04-26T17:16:29.587Z",
          "y": 26
        },
        {
          "x": "2019-04-25T17:16:29.587Z",
          "y": 11
        },
        {
          "x": "2019-04-24T17:16:29.587Z",
          "y": 82
        },
        {
          "x": "2019-04-23T17:16:29.587Z",
          "y": 17
        }
      ],
      dataPoint: '',
      count:3

    }
  }
  handleOnChange =(event) =>{
    this.setState({
      dataPoint: event.target.value
    });
  }
  addDataPoint=()=>{
    let {dataPoint,data,count}=this.state;
    let newArr=JSON.parse(JSON.stringify(data));
    var result = new Date();
    this.setState({count:3+count},()=>{
      result.setDate(result.getDate() + this.state.count);
      newArr.push({x:new Date(result).toISOString().slice(0,10),y:Number(dataPoint)});  
    })
   console.log(newArr);
    this.setState({data:newArr});
  }
  filterLastWeek=()=>{
    let newArr=JSON.parse(JSON.stringify(this.state.data));

    this.setState({data:newArr});
  }
  filterWeek=()=>{
    let newArr=JSON.parse(JSON.stringify(this.state.data));
    var date = new Date();
    date.setDate(date.getDate() - 7);

    var finalDate = date.getDate()+'/'+ (date.getMonth()+1) +'/'+date.getFullYear();
    console.log(finalDate);

    this.setState({data:newArr});
  }
  render() {
    return (
      <div className="App">
        <input type="text" name="dataPoint" onChange={this.handleOnChange.bind(this)}/>
        <button onClick={this.addDataPoint.bind(this)}>Add Point</button>
        <button onClick={this.filterWeek.bind(this)}>Last Week</button>
        <button onClick={this.filterLastWeek.bind(this)}>Last Two Week</button>
       <LineChart 
          data={this.state.data} 
          elementWidth={this.state.width} 
          elementHeight={this.state.height}   
        />
      </div>
    );
  }
}

export default App;
