import 'babel-polyfill';
import 'whatwg-fetch';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import myApp from './reducers';
import App from './components/App';


// import { default as thunk } from 'redux-thunk';


const store = createStore(myApp, composeWithDevTools(
  applyMiddleware(thunk),
));

render(
  React.createElement(
    Provider, // 元素
    { store: store }, // 參數
    React.createElement(App), // 子元素
  ),
  document.getElementById('root'),
);

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root'),
// );
