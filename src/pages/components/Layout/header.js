import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cart, closeIcon, hamburgerIcon, user } from "../../../utils/icons";
import { ProductContext } from "../../../utils/productContext";
import CustomLink from "./customLink";

const Header = () => {
    const[isMenu, setIsMenu] = useState(false)
    return (
<nav className="bg-blue-600">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button onClick={()=>{
          setIsMenu(!isMenu)
        }} type="button" className="inline-flex items-center justify-center p-2  rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>  
        {!isMenu && hamburgerIcon}
          {isMenu && closeIcon}  

        </button>
      </div>
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <Logo />       
        <Navigations />
      </div>
   <RightActions />
    </div>
  </div>

  {isMenu && <MobileMenu />}
</nav>

      );
}
 
export default Header;

function Logo() {
    return ( 
        <div className="flex-shrink-0 flex items-center gap-2">
          <Link to="/"> <img className="block lg:hidden h-8 w-auto" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-stadium-city-scape-xnimrodx-lineal-color-xnimrodx.png" alt="stadium-star"/></Link>
          <Link to="/"><img className="hidden lg:block h-8 w-auto" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-stadium-city-scape-xnimrodx-lineal-color-xnimrodx.png" alt="stadium-star"/></Link>
          <Link to="/" className="text-white font-semibold hidden lg:block">Stadium-star</Link>
      </div>
     );
}

function Navigations() {

    return ( 
      <div className="hidden sm:block sm:ml-6">
        <div className="flex space-x-4">
            <CustomLink to="/" className="text-white px-3 py-2 rounded-md text-sm font-semibold hover:text-gray-300">Home</CustomLink>

            <CustomLink to="/team" className="hover:text-gray-300  text-white px-3 py-2 rounded-md text-sm font-medium">Team</CustomLink>

            <CustomLink to="/projects" className="text-white px-3 py-2 rounded-md text-sm font-medium">Projects</CustomLink>

            <CustomLink to="/about" className="text-white px-3 py-2 rounded-md text-sm font-medium ">About</CustomLink>
          </div>
         </div>
     );
}

function RightActions() {
  const {cartStadions} = useContext(ProductContext);
    return ( 
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <span className="sr-only">View notifications</span>
          <span class="relative inline-block">
          <Link to={"/cart"}>{cart}</Link>
      <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{cartStadions.length}</span>
      </span>
        

        <div className="ml-3 relative">
          <div>
            <Link to={"/register"}>
              <span className="sr-only">Open user menu</span>
              {user}
            </Link>
          </div>
           
        </div>
      </div>
     );
}

function MobileMenu() {
    return ( 
        <div className="sm:hidden" id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1">
      <Link to="/" className="text-white  hover:text-gray-400 block px-3 py-2 rounded-md text-base font-semibold" aria-current="page">Home</Link>

      <Link to="/team" className="text-white  hover:text-gray-400 block px-3 py-2 rounded-md text-base font-semibold">Team</Link>

      <Link to="/projects" className="text-white  hover:text-gray-400 block px-3 py-2 rounded-md text-base font-semibold">Projects</Link>

      <Link to="/about" className="text-white hover:text-gray-400 block px-3 py-2 rounded-md text-base font-semibold">About</Link>
    </div>
  </div>
     );
}


