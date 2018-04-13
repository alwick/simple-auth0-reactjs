import React, { Component } from 'react';
import axios from 'axios'

export default class Private extends Component {
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));

    this.callUpdateApi()
      .then(res => this.setState({ updateResponse: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await axios.get('/api/hello')
    const body = await response.data
    if (response.status !== 200) throw Error(body.message)
    return body
  }

  callUpdateApi = async () => {
    const props = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('id_token')
      }
    }
    const response = await axios.post('/api/submitData', {field1: 'Foo', field2: 'Bar'}, props)
    const body = await response.data
    if (response.status !== 200) throw Error(body.message)
    return body
  }

  render() {
    return (
      <div className="App-Content">
        <p className="App-intro">
          {this.state ? this.state.response :'No Response from get'}
        </p>
        <p className="App-intro">
          {this.state ? this.state.updateResponse :'No Response from update'}
        </p>
      </div>
    )
  }
}
