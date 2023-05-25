// import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss"
const Header = () => {
//    const[searchValue, setSearchValue]=useState("");
// const handleSearchChange=(e)=>{
//     e.target.value;
// };
// const handleSubmit=(e)=>{
//   setSearchValue(e.target.value);
// }
   return (
      <header className="header">
         <div className="container">
            <div className="header__wrapper">
               <div className="header__left">
                  <Link to="/" className="site-holder" >
                     <span>Movie</span>
                  </Link>
               </div>
               <nav className="header__center">
                  <ul>
                     <li>
                        <Link className="header__link" to="/">Home</Link>
                     </li>
                     <li>
                        <Link className="header__link" to="/movie">Movie</Link>
                     </li>
                     <li>
                        <Link className="header__link" to="/TV">TV</Link>
                     </li>

                  </ul>
               </nav>
               <div className="header__right">
                  <form 
                  // onSubmit={handleSubmit}
                  >
                     <input type="search"
                     // onChange={handleSearchChange}
                     // value={searchValue}
                     //  placeholder="enter text"
                      />

                     <button type="submit" className="">Search</button>
                  </form>
               </div>
            </div>
         </div>


      </header>
   );
}

export default Header;
