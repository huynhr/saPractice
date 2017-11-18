import React from 'react';
import {render} from 'react-dom';
import List from './components/list.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit() {
    var obj = {message: this.state.value}
    $.ajax({
      type: "POST",
      url: '/api/post',
      data: obj,
      success: (data) => {
        console.log(data);
      },
      error: (data) => {
        console.log('unable to save properly');
      }
    });
    this.setState({value: ''})
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: 'api/get',
      contentType: 'applicaion/json',
      success: (data) => {
        console.log(data);
      },
      error: (data) => {
        console.log(`didn't get shit!`)
      }
    })
  }



  render() {

    return (
      <div>
        <h1>Is rendering app!</h1>
        <input type="text" value={this.state.value}
               onChange={this.handleChange.bind(this)} />
        <input type="submit" onClick={this.handleSubmit.bind(this)}/>
        <List/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))