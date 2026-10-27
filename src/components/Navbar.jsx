import NavImg from "../assets/FASCO.png";
import Button from "./ui/Button";

const Navbar = () => {
  return (
    <div className=''>
      <div className=' container max-w-[1281px] pl-10'>
      <nav className='flex justify-between justify-between gap-8 items-center p-10 '>
        
        <div>
            <img src={NavImg} alt="navimg"/>
        </div>
        <div className="flex justify-center gap-10">
          <ul className="flex justify-center gap-14 p-4 text-[#484848]">
            <li><a href='#'>Home</a></li>
             <li><a href='#'>Deals</a></li>
              <li><a href='#'>New Arrivals</a></li>
               <li><a href='#'>Packages</a></li>
               <li><a href='#'>Sign in</a></li>
          </ul>
           <Button text="Sign Up" />
        </div>
       
      </nav>
      </div>
    </div>
  )
}

export default Navbar
