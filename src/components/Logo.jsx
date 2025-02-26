import logo from "../../public/logo.jpg";
import Image from "next/image";

const Logo = () => {
	return (
		<div className=" w-40 mx-4">
			<Image
				width={1000}
				height={1000}
				src={logo.src}
				alt="logo"
				className=" grow-0"
			/>
		</div>
	);
};

export default Logo;
