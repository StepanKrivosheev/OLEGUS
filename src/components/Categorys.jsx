"use client";
import { usePathname } from "next/navigation";

const Categorys = () => {
	let path = usePathname();
	return (
		<div className="flex">
			<a
				className={
					path == "/myprojects" ?
						"text-center px-[1vw] py-2  active-focus:bg-secondary/50  !bg-secondary rounded-xl "
					:	"text-center px-[1vw] py-2  active-focus:bg-secondary/50 hover:bg-secondary/50 rounded-xl "
				}
				href="/myprojects">
				Все проекты
			</a>
			<a
				className={
					path.includes("/kitchen") ?
						"text-center px-[1vw] py-2  active-focus:bg-secondary/50  !bg-secondary rounded-xl "
					:	"text-center px-[1vw] py-2  active-focus:bg-secondary/50 hover:bg-secondary/50 rounded-xl "
				}
				href="/myprojects/kitchen">
				Кухня
			</a>
			<a
				className={
					path.includes("/bathroom") ?
						"text-center px-[1vw] py-2  active-focus:bg-secondary/50  !bg-secondary rounded-xl "
					:	"text-center px-[1vw] py-2  active-focus:bg-secondary/50 hover:bg-secondary/50 rounded-xl "
				}
				href="/myprojects/bathroom">
				Ванная комната
			</a>
			<a
				className={
					path.includes("/livingroom") ?
						"text-center px-[1vw] py-2  active-focus:bg-secondary/50  !bg-secondary rounded-xl "
					:	"text-center px-[1vw] py-2  active-focus:bg-secondary/50 hover:bg-secondary/50 rounded-xl "
				}
				href="/myprojects/livingroom">
				Гостиная
			</a>
			<a
				className={
					path.includes("/sauna") ?
						"text-center px-[1vw] py-2  active-focus:bg-secondary/50  !bg-secondary rounded-xl "
					:	"text-center px-[1vw] py-2  active-focus:bg-secondary/50 hover:bg-secondary/50 rounded-xl "
				}
				href="/myprojects/sauna">
				Сауна
			</a>
		</div>
	);
};

export default Categorys;
