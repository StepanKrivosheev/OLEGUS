import { client } from "../sanity/lib/client";
import Categorys from "./Categorys";
import Project from "./Project";
import { defineQuery } from "next-sanity";

export default async function cardList() {
	const project = await client.fetch(
		defineQuery('*[_type == "project"] | order(_createdAt desc) ')
	);

	return (
		<div className="grid justify-center pr-8 ">
			<div className="flex md:hidden justify-center mt-22 bg-bg mx-auto rounded-2xl py-5 items-center px-2">
				<Categorys />
			</div>
			<h2 className="flex justify-center mx-auto mt-8 md:mt-32 text-6xl ">
				Все проекты
			</h2>
			<div className="grid grid-cols-1 gap-8 mx-10 mt-8 mb-20  max-w-[1200px]">
				{project?.length > 0 ?
					project.map((post) => (
						<Project
							key={post?._id}
							post={post}
						/>
					))
				:	<p className="no-results">No Projects found</p>}
			</div>
		</div>
	);
}
