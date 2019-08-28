import React from 'react'
import './App.css'
import hc from './hc'

class App extends React.Component {
  state = {
    data:''
  }
  updateData = e => {
    this.setState({ data: e.target.value })
  }
  bounce = e => {
    hc({
      functionName: 'reee',
      params: {
        s: this.state.data
      },
      callback: data => {
        console.log(JSON.stringify(data))
      }
    })
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h3>hc test</h3>
          <p>
            Write something: <input onKeyUp={this.updateData}/>
          </p>
          <button onClick={this.bounce}>Bounce data</button>
        </header>
      </div>
    )
  }
}

export default App;
