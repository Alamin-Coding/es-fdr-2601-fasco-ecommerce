import {Link, useNavigate} from "react-router";
import NavImg from "../assets/FASCO.png";
import Button from "./ui/Button";


const Navbar = () => {
  const navigate = useNavigate()
  const handleSignup = ()=> {
	navigate("/signup")
  }
	return (
		<div className="">
			<div className=" container max-w-[1281px] pl-10">
				<nav className="flex justify-between gap-8 items-center p-10 ">
					<Link to="/">
						<img src={NavImg} alt="navimg" />
					</Link>
					<div className="flex justify-center items-center gap-10">
						<ul className="flex justify-center gap-14 p-4 text-[#484848]">
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/deals">Deals</Link>
							</li>
							<li>
								<Link to="/new-arrivals">New Arrivals</Link>
							</li>
							<li>
								<Link to="/packages">Packages</Link>
							</li>
							<li>
								<Link to="/sgin-in">Sign in</Link>
							</li>
						</ul>
						<Button onSignup={handleSignup} text="Sign Up" />
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
