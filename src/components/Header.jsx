import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: "url(/images/homeImage.webp" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md flex flex-col">
          <h1 className="header-title mb-5 text-5xl font-bold ">Welcome to this new site!</h1>
       

          <div>
            <div>
              <div className="icons-list justify-center h-30 p-1 flex">
        
              
          
              </div>
         
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
