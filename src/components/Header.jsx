import Burger from "./Burger";
import Navbar from "./Navbar";
import Logo from "./Logo";

const Header = () => {
	return (
		<div className="fixed  grid grid-rows-1 grid-flow-col justify-between  md:justify-evenly items-center pt-4 gap-3 top-0 w-full z-50 ">
			
			<Logo />
			<Navbar />
			<Burger />
		
		</div>
	);
};

export default Header;
