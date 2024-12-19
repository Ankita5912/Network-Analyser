import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { GoChevronLeft } from "react-icons/go";






function Navbar({onclickmode , scroll}) {

  const [mobileopen , setmobileOpen] = useState(false);

  const handleMobileopen = () =>{
    setmobileOpen(!mobileopen);
  }

  

  const navitems = [
    {
      Name: 'Use Cases',
      path: '/'
    },
    {
      Name: 'Scanners',
      path: '/'
    },
    {
      Name: 'Resources',
      path: '/' // Add the missing path here
    },
    {
      Name:'Contact us',
      path:'/Education'
    },
  ]

  const Mobilemenu = () =>{

    return(
      <div className="grid gap-10 h-full sm:w-1/2 w-3/4 border p-5 justify-items-center place-content-start absolute z-50 ">
      <div className="flex items-center justify-stretch w-full">
        <h1 className="text-xl font-medium mx-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 from-10% via-sky-400 via-30% to-emerald-400 to-90% italic lg:tracking-wide place-self-center">Vikash Chauhan</h1>
        <div className="place-self-center justify-end flex"><GoChevronLeft onClick={handleMobileopen} size={"20px"}/></div>
        </div>

      <div className="grid place-items-start gap-3">
        {navitems.map((navitem, indx)=>(
        <div key={indx}>{navitem.Name}</div>
        ))}
      </div>
    </div>
    );
  };
  
  


  return (
    <>
      {mobileopen ? (<Mobilemenu/>) : 
      (
        <div className="font-inria font-bold flex items-center px-4 py-6 justify-between h-[70px] w-full fixed top-0 left-0 right-0 bottom-0 z-50" 
        >

      <div className="flex">
        
        <h1 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-primaryColor-0 lg:tracking-wide text-start">Network Analyser
        </h1>
      </div>


      <div className="hidden lg:flex px-2">
        {navitems.map((navitem, index) => (
          <div className=" mx-3 font-semibold font-inria text-white" key={index}>
            {/* Check if the path exists before rendering the Link */}
          <div >{navitem.Name}</div>
          </div>
        ))}
        <div className="h-fit pt-1">
        </div>
      </div>  

      <div className="flex gap-4">
        <div><button className="md:h-9 h-8 md:w-28 w-24  rounded-md border-2 border-neutral-500 text-white text-sm md:text-base hover:bg-black tracking-wider  md:my-3 my-1 place-self-center ">Login</button></div>
        <div><button className="md:h-9 h-8 md:w-28 w-24  rounded-md  text-white text-sm md:text-base bg-black tracking-wider  md:my-3 my-1 place-self-center ">Sign Up</button></div>
      </div>

      <div className="lg:hidden place-self-center bg-teal-600 p-3 text-white  rounded-full" onClick={handleMobileopen}><AiOutlineMenu /></div>
      
    </div>
  )}
    </>
  );
}

export default Navbar;
