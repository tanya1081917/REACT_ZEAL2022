import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'reactstrap'
import Header from './Component/Header'
import Footer from './Component/Footer'
import RegisterScreen from './Screens/registrationScreeen'


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

}*/



const App = () => {
  return (
      <Router>
        <Header />
        <main className='py-3'>
          <Container>
            <Route path='/registration' component={RegisterScreen} />
          </Container>
        </main>
        <Footer />
      </Router>
  )
}

export default App;
