import React from "react";
import { urlFor } from "../sanity/lib/image";
import Slides from "./Slides";
import Image from "next/image";

export default function Card(props) {
	const post = props.post;

	const { Images, Category } = post;

	console.log(Category);
	return (
		<div className="flex w-full text-start p-4 col-span-2 md:col-span-1 bg-primary/15 rounded-2xl h-60  justify-equal">
			{Images != undefined ?
				<div className="flex h-full ">
					<div className="flex w-1/2 object-cover rounded-2xl">
						<Slides autoSlide={true}>
							{Images.map((x, i) => (
								<Image
									width={1000}
						height={1000}
									alt="image of my projects"
									key={i}
									className="object-cover  "
									src={urlFor(x).url()}
								/>
							))}
						</Slides>
					</div>
					<a
						className="w-1/2 overflow-scroll no-scrollbar"
						href={`/myprojects/${Category}`}>
						<h2 className=" text-lg border-b-1 ml-4">
							{post.title}
						</h2>
						<p className="px-4 py-2 mb-4 ">{post.text}</p>
					</a>
				</div>
			:	<a
					className="overflow-scroll no-scrollbar"
					href={`/myprojects/${Category}`}>
					<h2 className="border-b-1 text-lg">{post.title}</h2>
					<p className="py-2 mb-4 ">{post.text}</p>
				</a>
			}
		</div>
	);
}
