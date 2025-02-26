import Logo from "./Logo";
import facbook from "@/public/facebook.png";
import Image from "next/image";


const Footer = async () => {
	return (
		<div className="flex gap-6 ml-8  fixed bottom-4 items-center w-full">
			<div className="flex bg-bg rounded-2xl gap-4 py-0.5 px-4 items-center">
				<h3 className="font-bold">Oleg Krivosheev</h3>
				<a
					href="tel:01772779246"
					className="hidden md:flex lg:flex transition ease-in-out duration-900 hover:bg-primary rounded-2xl px-2 hover:scale-120">
					0177/2779246
				</a>
				<a
					href="mailto:post@olegundsoehne.de"
					className="md:hyphens-none hyphens-manual font-semibold transition ease-in-out duration-900 hover:bg-primary rounded-2xl px-2 hover:scale-120 ">
					post&shy;@olegundsoehne.de
				</a>

				<a
					target="_blank"
					href="https://www.facebook.com/oleg3009"
					className="transition hover:bg-primary rounded-full ">
					<Image
						src={facbook.src}
						alt="facebook logo"
						className="max-w-10"
					/>
				</a>
			</div>
			<a
				className="mr-12 ml-auto justify-items-end cursor-default"
				href="/studio">
				<Logo />
			</a>
		</div>
	);
};

export default Footer;
