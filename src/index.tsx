import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

export const testCallback = () => console.log('test');
export const testLinks = [
  {
    text: 'Home',
    link: '/'
  },
  {
    text: 'Find job',
    link: '/'
  },
  {
    text: 'Empoyers',
    link: '/'
  },
  {
    text: 'Candidates',
    link: '/'
  },
  {
    text: 'Pricing Plans',
    link: '/'
  },
  {
    text: 'Customer Supports',
    link: '/'
  },
]