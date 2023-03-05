import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './global.css';

window.addEventListener("resize", onResize);

function onResize() {

        this.height = window.innerHeight - 30;
        document.querySelector("body").style.height = this.height + "px";
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;

}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);