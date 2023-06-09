import React from 'react';

import backgroundImage from '../elections.png';

  

const Login = (props) => {
         return (

    <div className="login-container" style={{ backgroundImage: `url(${backgroundImage})` }}>

<       h1 className="connected-account" style={{background: "linear-gradient(to right,#ed372c,#0087ff)",color: "#fff", border: "1px solid #333", borderRadius: "10px", padding: "10px", fontWeight: "bold" }}>Decentralized Poll Survey 🗳️</h1>

        <button className="login-button" style={{ marginBottom: "100px", display: "flex", alignItems: "center", justifyContent: "center" }} onClick={props.voteFunction, props.connectWallet} >

          <div style={{ display: "flex", alignItems: "center", color:"white",justifyContent: "center",fontWeight: "bold" }}> CONNECT METAMASK&nbsp;&nbsp;

            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png" alt="Imagen de voto" style={{ width: "50px", height: "50px" }} />
          </div>

            </button>

        </div>

        );

        };

  

export default Login;