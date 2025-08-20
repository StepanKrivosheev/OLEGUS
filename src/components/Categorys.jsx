"use client";
import { usePathname } from "next/navigation";

const Categorys = () => {
	let path = usePathname();
	return (
		<div className="flex">
			<a
				className={
					path.includes("/bathroom") ?
						"text-center px-[1vw] py-2  active-focus:bg-secondary/50  !bg-secondary rounded-xl "
					:	"text-center px-[1vw] py-2  active-focus:bg-secondary/50 hover:bg-secondary/50 rounded-xl "
				}
				href="/myprojects/bathroom">
				Санузлы
			</a>
			<a
				className={
					path.includes("/kitchen") ?
						"text-center px-[1vw] py-2  active-focus:bg-secondary/50  !bg-secondary rounded-xl "
					:	"text-center px-[1vw] py-2  active-focus:bg-secondary/50 hover:bg-secondary/50 rounded-xl "
				}
				href="/myprojects/kitchen">
				Кухни
			</a>
			<a
				className={
					path.includes("/livingroom") ?
						"text-center px-[1vw] py-2  active-focus:bg-secondary/50  !bg-secondary rounded-xl "
					:	"text-center px-[1vw] py-2  active-focus:bg-secondary/50 hover:bg-secondary/50 rounded-xl "
				}
				href="/myprojects/livingroom">
				Гостиные
			</a>
			<a
				className={
					path.includes("/utilityrooms") ?
						"text-center px-[1vw] py-2  active-focus:bg-secondary/50  !bg-secondary rounded-xl "
					:	"text-center px-[1vw] py-2  active-focus:bg-secondary/50 hover:bg-secondary/50 rounded-xl "
				}
				href="/myprojects/utilityrooms">
				Подсобные
			</a>
			<a
				className={
					path.includes("/outbuildings") ?
						"text-center px-[1vw] py-2  active-focus:bg-secondary/50  !bg-secondary rounded-xl "
					:	"text-center px-[1vw] py-2  active-focus:bg-secondary/50 hover:bg-secondary/50 rounded-xl "
				}
				href="/myprojects/outbuildings">
				Улица
			</a>
			<a
				className={
					path.includes("/sauna") ?
						"text-center px-[1vw] py-2  active-focus:bg-secondary/50  !bg-secondary rounded-xl "
					:	"text-center px-[1vw] py-2  active-focus:bg-secondary/50 hover:bg-secondary/50 rounded-xl "
				}
				href="/myprojects/sauna">
				Сауны
			</a>
		</div>
	);
};

export default Categorys;
