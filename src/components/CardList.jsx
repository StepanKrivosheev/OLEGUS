import React from "react";
import Card from "./Card";
import { client } from "../sanity/lib/client";
import { PROJECT_QUERY } from "../sanity/lib/queryies";
import { project } from "../sanity/schemaTypes/project";

export default async function cardList() {
	const project = await client.fetch(PROJECT_QUERY);

	return (
		<div className="grid justify-center mt-30">
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-10 mb-20  max-w-[1500px]">
				{project?.length > 0 ?
					project.map((post, i) =>
						i < 6 ?
							<Card
								key={post?._id}
								post={post}
							/>
						:	<a
								href={"/myprojects"}
								className="button col-span-2 justify-self-center !bg-primary/15 hover:!bg-secondary">
								Show more
							</a>
					)
				:	<p className="no-results">No Projects found</p>}
			</div>
		</div>
	);
}
