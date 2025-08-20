import Burger from "./Burger";
import Navbar from "./Navbar";
import Logo from "./Logo";

const Header = () => {
	return (
		<div className="fixed  grid grid-rows-1 grid-flow-col justify-between  md:justify-evenly items-center pt-4 gap-3 top-0 w-full z-50">
			<a
				className="ml-4 rounded-lg p-2 bg-bg"
				href="/">
				<h1 className="text-3xl font-bold text-text">Oleg</h1>
				<h2 className="text-xl  text-accent">und Söhne</h2>
				{/* <h2>Sanierung und Renovierung</h2>
				<h2>Wir schaffen Komfort</h2> */}
				{/* <Logo /> */}
			</a>
			<Navbar />
			<Burger />
		</div>
	);
};

export default Header;
