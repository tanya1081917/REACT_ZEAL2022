/*import logo from './logo.svg';*/
/*import './App.css';*/
import Amplify, { API } from 'aws-amplify'
import React, { useState } from 'react'

const myAPI = "Registration"
const path = '/registration/:registerUserName';

const Registration = () => {
    const [input, setInput] = useState("")
    const [customers, setCustomers] = useState([])

    //Function to fetch from our backend and update customers array
    function getRegistration(e) {
        /*let registrationId = e.input*/
        let registrationId = "tanya.agarwal10@gmail.com";
        API.get(myAPI, path + "/" + registrationId)
            .then(response => {
                console.log("tanya "+response.value);
                let newCustomers = [...customers]
                newCustomers.push(response)
                setCustomers(newCustomers)

            })
            .catch(error => {
                console.log(error)
            })
    }

    return (

        <div className="Registration">
            <h1>Super Simple React App</h1>
            <div>
                <input placeholder="registration id" type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            </div>
            <br/>
            <button onClick={() => getRegistration({input})}>Get Registration From Backend</button>

            <h2 style={{visibility: customers.length > 0 ? 'visible' : 'hidden' }}>Response</h2>
            {
                customers.map((thisCustomer, index) => {
                    return (
                       /* <div key={thisCustomer.customerId}>*/



                            <ul>

                                {thisCustomer.map(user => (
                                   <b> <li key={user.Y}>{user.office}</li></b>

                                ))}
                            </ul>

                            /*<span><b>RegistrationId:</b> {thisCustomer.customerId} - <b>Registrationame</b>: {thisCustomer.customerName}</span>*/
                        /*</div>*/)
                })
            }
        </div>
    )
}

export default Registration;