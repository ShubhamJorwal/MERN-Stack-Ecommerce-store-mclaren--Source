import React, { useEffect } from "react";
import "./404notfound.scss";

const Notfoundpage = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      document.querySelector(".cont_principal").className = "cont_principal cont_error_active";
    }, 100);
  
    return () => clearTimeout(timeoutId);
  }, [/* any dependencies */]);
  
  // js for back to previous button 

  const handleBackClick = () => {
    window.history.back();
  };

  
  return (
    <>
      <div className="cont_principal">
        <div className="cont_error">
          <h1>Oops</h1>
          <p>404 Not Found</p>
          <h1><button onClick={handleBackClick} >back to previous</button></h1>
        </div>
        <div className="cont_aura_1"></div>
        <div className="cont_aura_2"></div>
      </div>
      
    </>
  );
};

export default Notfoundpage;
