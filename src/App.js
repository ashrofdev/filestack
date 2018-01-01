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
      date: '',
      alert: {
        trigger: false,
        type: 'positive'
      }
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

  upload = (item) => {
    const fileType = this.state.fileType
    const file = item.target.files[0]
    console.log(file.type)

    if (fileType !== 'other' && fileType !== 'document' && !file.type.includes(fileType)) {
      alert(`You can only save a ${fileType} file in this folder`)
      this.setState({alert:{
        trigger: true,
        type: 'negative'
      }})
    } else {
      alert('go ahead')
      this.setState({alert:{
        trigger: true,
        type: 'positive'
      }})
    }
    setTimeout(() => {
      document.querySelector('.alert').classList.remove('')
    }, 5000);

  }
  alert = (type) => {
    this.setState({alert: {
      trigger: true,
      type
    }})
  }

  render() {
    
    return (
      <div className="App">
        {
          this.state.alert.trigger && this.state.alert.type === 'positive'?
          <div className="alert positive">
            🔔 positive
          </div>:
          this.state.alert.trigger && this.state.alert.type === 'negative'?
          <div className="alert negative">
           Negative 🚫
          </div>:null
        }
        <Header/>
        <Body upload={this.upload} route={this.state.nav} navigate={this.navigate} 
        openFolder={this.openFolder} fileType={this.state.fileType}/>
        <footer>
          <span>All rights reserved by <a blank href="https://ashrof.herokuapp.com/">ashrofDev</a></span>
        </footer>
      </div>
    );
  }
}

export default App;