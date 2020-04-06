import React, { Component } from 'react';
import './App.css'
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Home from './Components/LandingPage/Home';
import Signup from './Components/Dictators/Signup';
import LogIn from './Components/Dictators/Login';
import { firebaseDB, storage } from './Server';

class App extends Component {

  constructor(){
    super()
    this.state = {
      route: '...',
      users: [
    ],
      user: {},
      fixHeader: false,
      nav: 'settings',
      fileType: '',
      fileName: '',
      fileSize: '',
      date: '',
      alert: {
        trigger: false,
        type: 'positive',
        message: '',
      }
    }
  }
  
  componentDidMount(){
    firebaseDB.ref('users').once('value').then(snapshot=>{
      snapshot.forEach(e=>{
        this.state.users.push({
          key: e.key,
          val: e.val()
        })
      })
      console.log(this.state.users)
    })

    window.addEventListener('scroll',this.handleScroll)
    
    this.getDate()
    setTimeout(() => {
      console.log(this.state.date)
    }, 2000);
  }

  handleScroll = () => {
    if(window.scrollY > 40){
      this.setState({fixHeader: true})
    } else {
      this.setState({fixHeader: false})
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
    console.log(file.name)

    if (fileType !== 'other' && fileType !== 'document' && !file.type.includes(fileType)) {
      this.alert('negative', 'Wrong file type')
    } else {
      storage.ref(fileType).child(file.name).put(file).then(e=>{
        storage.ref(fileType).child(file.name).getDownloadURL().then(url=>{
          console.log(url)
          firebaseDB.ref(`users/${this.state.user.key}`).child(fileType).push().set({
            name: file.name,
            url
          })
        })
      })
      
      this.alert('positive', 'Upload Completed')
    }
    setTimeout(() => {
      this.setState({alert: {
        trigger: 'refresh'
      }})
    }, 4000);

  }
  alert = (type, message) => {
    this.setState({alert: {
      trigger: true,
      type,
      message
    }})
  }

 

  login = () => {
    this.setState({route: 'login'})
  }
  register = (user) => {
    this.state.users.push(user)
    console.log(this.state.users)
    firebaseDB.ref('users').push().set(user).then(e=>{
      this.setState({route: 'cabinet'})

    })
  }

  ////////////// checking for authorixation on login//////////////////
  authenticate = (user) => {
    this.state.users.forEach(e=>{
      const val = e.val
      if (user.username === val.username && user.password === val.password) {
        console.log(e)
        this.setState({
          route: 'cabinet',
          user: e
        })
      } else {
        console.log('authentication failed')
        console.log(user,e)
      }
    })
  }

  render() {
    
    return (
      <div>
        {
          this.state.route === 'home'?
          <Home login={this.login} signUp={()=>this.setState({route: 'signup'})}/>:
          this.state.route === 'signup'?
          <Signup register={this.register} login={this.login}/>:
          this.state.route === 'login'?
          <LogIn login={this.authenticate} signUp={()=>this.setState({route: 'signup'})}/>:
          <div className="App">
              
              {
                this.state.alert.trigger === true && this.state.alert.type === 'positive'  ?
                <div className="alert show_alert positive">{this.state.alert.message}</div>:
                this.state.alert.trigger === true && this.state.alert.type === 'negative'  ?
                <div className="alert show_alert negative">{this.state.alert.message}</div>:
                this.state.alert.trigger === 'refresh' ?
                <div className="alert"></div>:null
              }
            
            <Header logOut={()=>this.setState({route: 'home'})} fixHeader={this.state.fixHeader}/>
            <Body user={this.state.user} upload={this.upload} route={this.state.nav} navigate={this.navigate} 
            openFolder={this.openFolder} fileType={this.state.fileType}/>
            <footer>
              <span>All rights reserved by <a blank='true' href="https://ashrof.herokuapp.com/">ashrofDev</a></span>
            </footer>
          </div>
        }
      </div>
    );
  }
}

export default App;