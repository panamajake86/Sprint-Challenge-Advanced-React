import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {

  state = {
    players: {},
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => console.log('didMount', res))
      .then(res => this.setState({ players: res }))
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log('render', this.state)
    return (
      <div className="App">
        <h1>Women's World Cup Players</h1>
        {/* {this.state.players.map(ladies => {
          <div className='players' key={ladies}>
            <h3>{`Player: ${this.state.players.name}`}</h3>
            <p>{`Country: ${this.state.players.country}`}</p>
            <p>{`# of Searches ${this.state.players.searches}`}</p>
          </div>
        })} */}
      </div>
    );
  }
}

export default App;
