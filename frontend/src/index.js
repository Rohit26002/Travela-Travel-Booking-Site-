import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery'; // Import jQuery
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/scss/bootstrapD.scss'
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';
import 'lightbox2/dist/css/lightbox.min.css';
import 'lightbox2/dist/js/lightbox.min.js';
import 'lightbox2';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { Provider  } from 'react-redux';
import { store } from './store/store';
import { StateProvider } from './components/StateProvider';
import reducer, { initialState } from './components/reducer';
import 'jquery';


window.jQuery = $; // Expose jQuery globally
window.$ = $; // Expose jQuery globally

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <StateProvider initialState={initialState} reducer={reducer} >
      <RouterProvider router={router}/>
      </StateProvider>
    </Provider>
  // </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
