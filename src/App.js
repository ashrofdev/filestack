import React, { Component } from 'react';
import './App.css'
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Home from './Components/LandingPage/Home';
import Signup from './Components/Dictators/Signup';

class App extends Component {

  constructor(){
    super()
    this.state = {
      route: 'signup',
      fixHeader: false,
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

    window.addEventListener('scroll',this.handleScroll)
    
    this.getDate()
    setTimeout(() => {
      console.log(this.state.date)
    }, 2000);
  }

  handleScroll = () => {
    if(window.scrollY > 40){
      this.setState({fixHeader: true})
      console.log('ddddd')
    } else {
      this.setState({fixHeader: false})
      console.log('ggggg')
    }
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
  login = () => {
    this.setState({route: 'login'})
  }

  render() {
    
    return (
      <div>
        {
          this.state.route === 'home'?
          <Home login={this.login} signUp={()=>this.setState({route: 'signup'})}/>:
          this.state.route === 'signup'?
          <Signup register={()=>this.setState({route: 'login'})}/>:
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
            <Header logOut={()=>this.setState({route: 'home'})} fixHeader={this.state.fixHeader}/>
            <Body upload={this.upload} route={this.state.nav} navigate={this.navigate} 
            openFolder={this.openFolder} fileType={this.state.fileType}/>
            <footer>
              <span>All rights reserved by <a blank href="https://ashrof.herokuapp.com/">ashrofDev</a></span>
            </footer>
          </div>
        }
      </div>
    );
  }
}

export default App;