import React from "react";
import Image from "next/image";
import { urlFor } from "../sanity/lib/image";

export default async function card(props) {
	const { className, post } = props;

	return (
		<div
			className={`${className} w-full p-4 flex-col bg-primary/15 rounded-2xl min-w-100`}>
			<h2 className=" text-lg w-full border-b-1 uppercase pb-2">
				{post.title}
			</h2>
			{post.Images != undefined ?
				<div
					className="flex-col relative "
					key={post?._id}>
					<Image
						width={1000}
						height={1000}
						className="mr-3 object-cover rounded-2xl float-left md:w-2/5 md:h-full mt-4 md:flex h-60 w-60 focus-within:*:!flex relative"
						src={urlFor(post.Images[0]).url()}
						alt="image of my projects"
					/>

					<p className="p-0.5 md:px-3   no-scrollbar py-2 mb-4 leading-6 tracking-wider">
						{post.text}
					</p>
				</div>
			:	<div
					className="overflow-hidden no-scrollbar2"
					key={post?._id}>
					<p className="py-2 mb-4 leading-6 tracking-wider">
						{post.text}
					</p>
				</div>
			}
			<div className="flex pt-4 ">
				<div className="columns-4 pl-4">
					{post.Images != undefined ?
						post.Images.map((x, i) => (
							<Image
								width={1000}
								height={1000}
								className={
									i > 0 ?
										"object-cover my-4 rounded-lg"
									:	"sm:hidden"
								}
								key={i}
								src={urlFor(x).url()}
								alt="image of my projects"
							/>
						))
					:	<div></div>}
				</div>
			</div>
		</div>
	);
}
