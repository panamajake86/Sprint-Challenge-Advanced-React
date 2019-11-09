import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DarkMode from './Components/DarkMode';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const show = require('./App');

describe('App', ()=>{
  describe('did component mount', ()=>{
    it('component mounted', ()=>{
      const expectedOutput = state !== 0;
      const actualOutput = show.state;
      expect(actualOutput).toBe(expectedOutput);
    });
  });
});

test('render without crashing', () => {
  render(<DarkMode />);
});

test('render without crashing', () => {
  render(<App />);
});

test('it returns "hello world"', () => {
  expect(helloWorld()).toBe("hello world");
  expect(helloWorld()).not.toBe("");
});