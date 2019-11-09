import React from 'react';
import './App.css';
import axios from 'axios';
import DarkMode from './Components/DarkMode';

class App extends React.Component {

  state = {
    players: [],
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        console.log('didMount', res.data)
        this.setState({ players: res.data})
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log('render', this.state)
    return (
      <div className="App">
        <h1>Women's World Cup Players</h1>
        <DarkMode />
        {this.state.players.map(ladies => {
          return(<div className='players' key={ladies}>
            <h3>{`Player: ${ladies.name}`}</h3>
            <p>{`Country: ${ladies.country}`}</p>
            <p>{`# of Searches ${ladies.searches}`}</p>
          </div>)
  })}
      </div>
    );
  }
}

export default App;
