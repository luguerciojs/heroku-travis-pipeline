import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../components/App';

jest.mock('../../api/user', () => {
  return () => Promise.resolve({ name: 'Test', age: 12 })
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
