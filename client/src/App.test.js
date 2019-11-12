import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DarkMode from './Components/DarkMode';
import useDarkMode from './Hooks/useDarkMode';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DarkMode />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<useDarkMode />, div);
  ReactDOM.unmountComponentAtNode(div);
});