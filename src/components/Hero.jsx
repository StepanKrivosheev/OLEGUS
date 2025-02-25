import me from "../../public/me.avif";

const Hero = () => {
	return (
		<div className="mx-auto justify-center flex ">
			<div className="md:flex items-center mt-74  max-w-[1500px] mx-10  rounded-4xl  p-4 shadow-lg bg-primary/15  hover:bg-primary/25 ease-in-out duration-300">
				<img
					src={me.src}
					alt="My picture, Oleg Krivosheev, Male"
					className=" h-64 m-4   rounded-full border-accent justify-self-center shadow-accent  shadow-all-lg object-cover"
				/>
				<div className=" mt-0 max-h-80 max-w-400 text-justify self-center no-scrollbar p-4 pb-4  overflow-scroll break-words">
					Я мастер с инженерным дипломом качественно и своевременно
					выполняю все работы по дому и около, в том числе сложные,
					такие как: капитальный ремонт, перепланировки,сантехнические
					и электрические работы, разработка дизайна и отделки
					помещений, встраиваемые предметы мебели и одорудования, а
					так же: замена окон и дверей, монтаж электрических роллад,
					установка решеток и т.п. На все виды работ предоставляется
					гарантия 2 года. Я работаю в Хагене и окресностях (+25км)
					Дальше по договоренности и с оплатой дорожных.
				</div>
			</div>
		</div>
	);
};

export default Hero;
