/*import logo from './logo.svg';*/
import './App.css';
import React from 'react'

import {Link, Router, useLocation} from 'react-router-dom'

import { Route ,Routes} from "react-router"
import HomeScreen from "./Screens/HomeScreen";
import Layout from "./Component/Layout";
import RegistrationScreen from "./Screens/registrationScreeen";
import CustomRouter from "./CustomRouter";
import {createBrowserHistory} from "history";

const historyObject = createBrowserHistory({ window });
/*

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <main className='py-3'>
                <Container>
                    <Routes>
                    <Route path='/'  element={<HomeScreen/>}  />
                    </Routes>
                </Container>
            </main>
            <Footer/>
        </BrowserRouter>

       /!* <div className="App">
            <h1>Tanya</h1>
            <ButtonDropdown>kldltek</ButtonDropdown>
        </div>*!/
    )
}
*/


/*const App = () =>{
    const location = useLocation();
    console.log('hash', location.hash);
    console.log('pathname', location.pathname);
    console.log('search', location.search);

    return(
      <Router location={location} basename={basename} children={children}
              location={state.location}
              navigationType={state.action}
              navigator={history}
      >
        <Routes>
                {/!*<Route   element={<Layout />} >*!/}
                    <Route exact path="/" element={<HomeScreen />} />
                    <Route exact path ="/registration" element={<RegistrationScreen/>} />

               {/!* <Route path="/ConfirmEmail" element={<ConfirmEmail />} />*!/} /
            </Routes>
      </Router>


    );
}*/


const App =()=> {
    return (
        <CustomRouter history={historyObject}>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/profile" element={<RegistrationScreen />} />
                </Routes>
            </div>
        </CustomRouter>
    );
}


export default App;
