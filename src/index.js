import React from 'react';
import ReactDOM from 'react-dom';
import App from "./component/";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./component/assets/css/style.css";
import "./component/assets/css/footer.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);
