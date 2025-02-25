import React from "react";
import logo from "@/public/logo.jpg";
import Slides from "./Slides";

import { urlFor } from "../sanity/lib/image";

export default async function card(props) {
	const { className, post } = props;
	const { Images } = post;

	return (
		<div
			className={`${className} w-full p-4 flex-col bg-primary/15 rounded-2xl`}>
			<h2 className=" text-lg w-full border-b-1 uppercase pb-2">
				{post.title}
			</h2>
			{post.Images != undefined ?
				<div className="flex-col realtive">
					<button className="md:w-2/5 float-left mt-4 md:flex h-100 focus-within:*:!flex relative">
						<img
							className="object-cover size-full  rounded-2xl"
							src={urlFor(post.Images[0]).url()}
							alt=""
						/>
						{post.Images.map((x, i) => (
							<div />
						))}
					</button>
					<p className="p-0.5 md:px-3 md:w-3/5  overflow-hidden no-scrollbar py-2 mb-4 leading-6 tracking-wider">
						{post.text}
					</p>
				</div>
			:	<div className="overflow-hidden no-scrollbar2">
					<p className="py-2 mb-4 leading-6 tracking-wider">
						{post.text}
					</p>
				</div>
			}
			<div className="flex pt-4 ">
				<div className="columns-4 ">
					{post.Images != undefined ?
						post.Images.map((x, i) => (
							<img
								className={
									i > 0 ?
										"object-cover my-4 rounded-lg"
									:	"sm:hidden"
								}
								src={urlFor(x).url()}
								alt=""
							/>
						))
					:	<div></div>}
				</div>
			</div>
		</div>
	);
}
