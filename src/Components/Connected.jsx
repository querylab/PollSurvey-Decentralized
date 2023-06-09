import React from "react";

import backgroundImage from '../elections.png';

  
  

    const Connected = (props) => {

            return (

                  <div className="connected-container" style={{ backgroundImage: `url(${backgroundImage})` }}>

                     <h1 className="connected-account" style={{background: "linear-gradient(to right,#ed372c,#0087ff)",color: "#fff", border: "1px solid #333", borderRadius: "10px", padding: "10px", fontWeight: "bold" }}>You are Connected Poll Survey 🗳️</h1>

                      <p className="connected-account" style={{ background: "linear-gradient(to right,#ed372c,#0087ff)",color: "#fff", border: "1px solid #333", borderRadius: "10px", padding: "10px", fontWeight: "bold" }}>Metamask Address: {props.account}</p> { props.showButton ? (
                <p className="connected-account" style={{ background: "linear-gradient(to right,#ed372c,#0087ff)",color: "#fff", border: "1px solid #333", borderRadius: "10px", padding: "10px", fontWeight: "bold" }}>You have already voted</p>

                      ) : (
                      <div>
                        <input type="number" placeholder="Enter Choice" min="0" max="2" pattern="[0-2]{0}" value={props.number} onChange={props.handleNumberChange} style={{ background: "linear-gradient(to right, #ed372c, #0087ff)", color: "#fff", border: "1px solid #333", borderRadius: "10px", padding: "10px", fontWeight: "bold"}}/>
                            <br/>

                                <p className="connected-account" style={{ background: "linear-gradient(to right,#ed372c,#0087ff)",color: "#fff", border: "1px solid #333", borderRadius: "10px", padding: "10px", fontWeight: "bold" }}>Remaining Time: {props.remainingTime}</p>

                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",fontWeight: "bold"  }}>
                                        <button className="login-button" style={{ marginBottom: "100px", display: "flex", alignItems: "center", justifyContent: "center" }} onClick={props.voteFunction}>

                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

                                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png" alt="Imagen de voto" style={{ width: "50px", height: "50px" }} />

                                              </div>

                                              </button>

                                                </div> </div>

                                                        )}

  

                                                    <table id="myTable" className="connected-account" style={{ background: "linear-gradient(to right,#ed372c,#0087ff)", color: "#fff", border: "1px solid #333", borderRadius: "10px", padding: "10px", fontWeight: "bold" }}>

                                                          <thead>

                                                        <tr>

                                                         <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CHOICE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>

                                                        <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CANDIDATES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>

                                                          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VOTES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>

                                                          </tr>

                                                              </thead>

                                                              <tbody>

                                                            {props.candidates.map((candidate, index) => (

                                                          <tr key={index}>

                                                            <td>{candidate.index}</td>

                                                            <td>{candidate.name}</td>

                                                             <td>{candidate.voteCount}</td>
                                                          </tr>

                                                            ))}

                                                                </tbody>

                                                          </table>

  

                                                        </div>

                                                       )}


export default Connected;
