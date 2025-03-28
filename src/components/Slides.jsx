"use client";
import { useState, useEffect } from "react";

export default function Slides({
	children: slides,
	autoSlide = false,
	autoSlideInterval = 3000,
}) {
	const [curr, setCurr] = useState(0);

	const prev = () =>
		setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
	const next = () =>
		setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

	useEffect(() => {
		if (!autoSlide) return;
		const slideInterval = setInterval(next, autoSlideInterval);
		return () => clearInterval(slideInterval);
	}, []);
	return (
		<div className="overflow-hidden  relative rounded-2xl">
			<div
				className="flex transition-transform ease-out duration-900"
				style={{ transform: `translateX(-${curr * 100}%)` }}>
				{slides}
			</div>
			<div className="absolute inset-0 flex items-center justify-between p-4">
				<button
					onClick={prev}
					className="px-2 py-.5 rounded-full shadow bg-bg/80 text-gray-800 hover:bg-bg">
					{" "}
					&lt;
				</button>
				<button
					onClick={next}
					className="px-2 py-.5 rounded-full shadow bg-bg/80 text-gray-800 hover:bg-bg">
					{" "}
					&gt;
				</button>
			</div>

			<div className="absolute bottom-4 right-0 left-0">
				<div className="flex items-center justify-center gap-2">
					{slides.map((_, i) => (
						<div
							key={i}
							className={`
              transition-all w-3 h-3 bg-bg rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
