"use client";
import { usePathname } from "next/navigation";

const Categorys = () => {
	let path = usePathname();
	return (
		<div className="flex-col md:flex ">
			<a
				className={
					path == "/myprojects" ?
						"justify-self-center px-[1vw] py-2  active-focus:bg-secondary/50  !bg-secondary rounded-xl "
					:	"px-[1vw] py-2 active-focus:bg-secondary/50 hover:bg-secondary/50 rounded-xl "
				}
				href="/myprojects">
				Alle Projekte
			</a>
			<a
				className={
					path.includes("/kitchen") ?
						"justify-self-center px-[1vw] py-2  active-focus:bg-secondary/50  !bg-secondary rounded-xl "
					:	"px-[1vw] py-2  active-focus:bg-secondary/50 hover:bg-secondary/50 rounded-xl "
				}
				href="/myprojects/kitchen">
				Küche
			</a>
			<a
				className={
					path.includes("/bathroom") ?
						"justify-self-center px-[1vw] py-2  active-focus:bg-secondary/50  !bg-secondary rounded-xl "
					:	"px-[1vw] py-2  active-focus:bg-secondary/50 hover:bg-secondary/50 rounded-xl "
				}
				href="/myprojects/bathroom">
				Badezimmer
			</a>
			<a
				className={
					path.includes("/livingroom") ?
						"justify-self-center px-[1vw] py-2  active-focus:bg-secondary/50  !bg-secondary rounded-xl "
					:	"px-[1vw] py-2  active-focus:bg-secondary/50 hover:bg-secondary/50 rounded-xl "
				}
				href="/myprojects/livingroom">
				Wohnzimmer
			</a>
			<a
				className={
					path.includes("/sauna") ?
						"justify-self-center px-[1vw] py-2  active-focus:bg-secondary/50  !bg-secondary rounded-xl "
					:	"px-[1vw] py-2  active-focus:bg-secondary/50 hover:bg-secondary/50 rounded-xl "
				}
				href="/myprojects/sauna">
				Sauna
			</a>
		</div>
	);
};

export default Categorys;
