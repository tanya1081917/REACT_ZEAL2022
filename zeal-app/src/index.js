import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import App from './App';
import store from './store'
import './index.css';
import './bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import {BrowserRouter} from "./BrowseRouter";
Amplify.configure(awsExports);

/*
ReactDOM.render(
    <React.StrictMode>
       <Provider store={store}>
          <BrowserRouter>
          <App/>
          </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
)*/
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
        <BrowserRouter>
        <Provider store={store}>
        <App />
        </Provider>
        </BrowserRouter>
    </React.StrictMode>
);



/*ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
