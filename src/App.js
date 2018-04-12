import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header'

class App extends Component {
  render() {
    const {auth} = this.props

    return (
      <div className="App">
        <Header auth={auth}/>
        {this.props.children}
      </div>
    )
  }
}

export default App
