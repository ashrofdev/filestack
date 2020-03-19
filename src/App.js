import React, { Component } from 'react';
import './App.css'
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';

class App extends Component {

  constructor(){
    super()
    this.state = {
      nav: 'cabinet',
      fileType: '',
      fileName: '',
      fileSize: '',
      date: ''
    }
  }
  
  componentDidMount(){
    
    this.getDate()
    setTimeout(() => {
      console.log(this.state.date)
    }, 2000);
  }

  getDate = () => {
    const getDate = new Date()
    const day = getDate.getDate()
    const month = getDate.getMonth()+1
    const year = getDate.getFullYear()

    const date = `${day}-${month}-${year}`
    this.setState({date})
    
  }
  navigate = (route) => {
    this.setState({nav: route})
  }

  openFolder = (fileType) => {
    this.setState({fileType})
    this.navigate('open')
  }

  render() {
    
    return (
      <div className="App">
        <Header/>
        <Body route={this.state.nav} navigate={this.navigate} openFolder={this.openFolder} fileType={this.state.fileType}/>
      </div>
    );
  }
}

export default App;