"use client";

import { usePathname } from "next/navigation";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/src/components/HoverCard";
import Categorys from "./Categorys";

const Navbar = () => {
	let path = usePathname();
	return (
		<div className="md:flex m-auto hidden md:columns-1 not-md:absolute not-md:right-[86px]  not-md:top-[6px] not-md:w-38">
			<div className="bg-bg not-md:bg-bg rounded-2xl flex justify-center gap-1.5 py-3 px-2">
				<a
					className={
						path === "/" ?
							"px-[1vw] py-3.5 bg-secondary rounded-2xl  "
						:	"px-[1vw] py-3.5  rounded-2xl hover:bg-secondary/50 "
					}
					href="/">
					Über Mich
				</a>
				<HoverCard>
					<HoverCardTrigger
						className={
							path.startsWith("/myprojects") ?
								"justify-self-center px-[1vw] py-3.5  active-focus:bg-secondary/50  !bg-secondary rounded-2xl "
							:	"px-[1vw] py-3.5  active-focus:bg-secondary/50 hover:bg-secondary/50 rounded-2xl "
						}
						href="/myprojects">
						Meine Projekte
					</HoverCardTrigger>
					<HoverCardContent>
						<Categorys />
					</HoverCardContent>
				</HoverCard>
				{/* <a
					className={
						path === "/reviews" ?
							"px-[1vw] py-3.5 bg-secondary rounded-2xl  "
						:	"px-[1vw] py-3.5  rounded-2xl  "
					}
					href="/">
					Bewertungen
				</a> */}
				<a
					className={
						path === "/gallerie" ?
							"px-[1vw] py-3.5 bg-secondary rounded-2xl  "
						:	"px-[1vw] py-3.5  rounded-2xl hover:bg-secondary/50 "
					}
					href="/gallerie">
					Gallerie
				</a>
			</div>
		</div>
	);
};

export default Navbar;
