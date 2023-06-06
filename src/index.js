import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <div>
  <Provider store={store}>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
        </Routes>
    </BrowserRouter>
  </Provider>
</div>,
  document.getElementById('root')
);
