import { client } from "@/src/sanity/lib/client";
import Project from "@/src/components/Project";
import { defineQuery } from "next-sanity";
import Categorys from "@/src/components/Categorys";
import React from "react";

interface Image {
	_id: string;
	_type: string;
	asset: {
		_ref: string;
		_type: string;
	};
}

interface Project {
	Category: string;
	Images: Image[];
	date: Date;
	slug: {
		current: string;
		_type: string;
	};
	text: string;
	title: string;
	_createdAt: Date;
	_id: string;
	_rev: string;
	_type: string;
	_updateAt: Date;
}

interface PageProps {
	params: { category: string };
}

export async function generateStaticParams(): Promise<
	{ params: { category: string } }[]
> {
	return [
		{ params: { category: "kitchen" } },
		{ params: { category: "bathroom" } },
		{ params: { category: "sauna" } },
		{ params: { category: "livingroom" } },
	];
}

export default async function CategorizedProjects({ params }: PageProps) {
	const { category } = params;

	const project = await client.fetch(
		defineQuery(
			`*[_type == "project" && Category == "${category}" ] | order(_createdAt desc)`
		)
	);

	function getCategory(category: string): string {
		switch (category) {
			case "kitchen":
				return "Кухни";
			case "bathroom":
				return "Ванные";
			case "sauna":
				return "Сауны";
			case "livingroom":
				return "Гостиные";
			default:
				return "Noch keine Projekte in dieser Kategorie!";
		}
	}

	return (
		<div className="grid justify-center">
			<div className="md:hidden flex justify-center mt-22 bg-bg mx-auto rounded-2xl py-5 items-center px-2">
				<Categorys />
			</div>
			<h2 className="flex justify-center mx-auto mt-8 md:mt-32 text-6xl">
				{getCategory(category)}
			</h2>
			<div className="flex justify-center">
				<div className="grid grid-cols-1 gap-8 mx-10 mt-8 mb-20 max-w-[1200px]">
					{project?.length > 0 ?
						project.map((post: Project) => (
							<Project
								key={post?._id}
								post={post}
							/>
						))
					:	<p className="flex text-center mx-auto text-6xl">
							Noch keine Projekte in dieser Kategorie!
						</p>
					}
				</div>
			</div>
		</div>
	);
}
