"use client";

import Image from "next/image";
import menu from "@/public/menu.png";
import Navbar from "./Navbar";

const Burger = () => {
	return (
		<div className="rounded-2xl mr-4 ">
			<a
				href="tel:01772779246"
				className="button hidden md:flex">
				Ruft mich!
			</a>

			<button className="focus-within:**:grid focus-within:translate-x-18 md:bg-secondary/50 !p-2.5 !rounded-xl bg-secondary md:hidden  ">
				<Image
					width={1000}
					height={1000}
					className="size-8 !flex   "
					src={menu.src}
					alt="burger menu icon"
				/>
				<Navbar />
			</button>
		</div>
	);
};

export default Burger;
