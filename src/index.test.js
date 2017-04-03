import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './app/pages/MainPage';

xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainPage />, div);
});
