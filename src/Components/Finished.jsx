import React from "react";
import bannerImage from '../elections.png';

const Finished = (props) => {
  return (
    <div className="login-container" style={{ backgroundImage: `url(${bannerImage})` }} >
    
      <h1 h1 className="connected-account" style={{background: "linear-gradient(to right,#ed372c,#0087ff)",color: "#fff", border: "1px solid #333", borderRadius: "10px", padding: "10px", fontWeight: "bold" }}>The Poll Survey has Ended</h1>
    </div>
  );
}

export default Finished;