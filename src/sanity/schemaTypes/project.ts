import { defineType, defineField } from "sanity";

export const project = defineType({
	name: "project",
	type: "document",
	title: "Title",
	fields: [
		defineField({
			name: "title",
			type: "string",
		}),
		defineField({
			name: "slug",
			type: "slug",
			options: {
				source: "title",
			},
		}),
		defineField({
			name: "text",
			type: "markdown",
		}),
		defineField({
			name: "Category",
			type: "string",
			options: {
				list: ["kitchen", "bathroom", "livingroom", "sauna"],
			},
			initialValue: "kitchen",
		}),
		defineField({
			name: "Images",
			type: "array",
			of: [{ type: "image" }],
			options: {
				layout: "grid",
			},
		}),
		defineField({
			name: "Images for Gallery",
			type: "array",
			of: [{ type: "image" }],
			options: {
				layout: "grid",
			},
		}),
		defineField({
			name: "date",
			type: "date",
			initialValue: new Date().toISOString().slice(0, 10),
		}),
	],
	preview: {
		select: {
			title: "title",
		},
	},
});
