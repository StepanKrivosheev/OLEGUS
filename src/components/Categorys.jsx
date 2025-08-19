"use client";
import { usePathname } from "next/navigation";

const Categorys = () => {
	let path = usePathname();
	return (
		<div className="flex-col md:flex min-w-108 ">
			<a
				className={
					path == "/myprojects" ?
						"justify-self-center px-[1vw] py-2  active-focus:bg-secondary/50  !bg-secondary rounded-xl "
					:	"px-[1vw] py-2 active-focus:bg-secondary/50 hover:bg-secondary/50 rounded-xl "
				}
				href="/myprojects">
				Все проекты
			</a>
			<a
				className={
					path.includes("/kitchen") ?
						"justify-self-center px-[1vw] py-2  active-focus:bg-secondary/50  !bg-secondary rounded-xl "
					:	"px-[1vw] py-2  active-focus:bg-secondary/50 hover:bg-secondary/50 rounded-xl "
				}
				href="/myprojects/kitchen">
				Кухня
			</a>
			<a
				className={
					path.includes("/bathroom") ?
						"justify-self-center px-[1vw] py-2  active-focus:bg-secondary/50  !bg-secondary rounded-xl "
					:	"px-[1vw] py-2  active-focus:bg-secondary/50 hover:bg-secondary/50 rounded-xl "
				}
				href="/myprojects/bathroom">
				Ванная комната
			</a>
			<a
				className={
					path.includes("/livingroom") ?
						"justify-self-center px-[1vw] py-2  active-focus:bg-secondary/50  !bg-secondary rounded-xl "
					:	"px-[1vw] py-2  active-focus:bg-secondary/50 hover:bg-secondary/50 rounded-xl "
				}
				href="/myprojects/livingroom">
				Гостиная
			</a>
			<a
				className={
					path.includes("/sauna") ?
						"justify-self-center px-[1vw] py-2  active-focus:bg-secondary/50  !bg-secondary rounded-xl "
					:	"px-[1vw] py-2  active-focus:bg-secondary/50 hover:bg-secondary/50 rounded-xl "
				}
				href="/myprojects/sauna">
				Сауна
			</a>
		</div>
	);
};

export default Categorys;
