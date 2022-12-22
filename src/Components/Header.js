import React from "react";

const Header = () => {
  return (
    <div className="header" >
    
      <img src="../images/list/logo.png" ></img>
      <div>
      <button type="button" class="btn btn-light" style={{background:"#e8e5f8",color:"#847cb8"}}><b>Rent</b></button>
      <button type="button" class="btn btn-light" style={{marginLeft:"40px"}}><b>Buy</b></button>
      <button type="button" class="btn btn-light" style={{marginLeft:"40px"}}><b>Sell</b></button>
      <button type="button" class="btn btn-light" style={{marginLeft:"40px"}}><b>Manage Properties</b>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16" style={{marginLeft:"10px"}}>
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg>
      </button>
      <button type="button" class="btn btn-light">Resources
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16" style={{marginLeft:"10px"}}>
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg>
      </button>
      
      </div>
     
     <div>
     <div>
      <button type="button" class="btn btn-outline-dark" style={{color:"#7065ef",border:"#c6c6c6"}} >Login</button>
      <button type="button" class="btn btn-warning" style={{marginLeft:"40px",background:"#7065ef",color:"#fff"}}>Signup</button>
      </div>
     </div>
    </div>
  );
};

export default Header;
