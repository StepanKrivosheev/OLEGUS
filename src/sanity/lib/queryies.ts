import { defineQuery } from "next-sanity";

export const PROJECT_QUERY = defineQuery(
	'*[_type == "project"] | order(_createdAt desc) '
);

export const IMAGES_QUERY = defineQuery(
	'*[_type == "project"]{"images": Images}'
);

export const BATHROOM_QUERY = defineQuery(
	'*[_type == "project" && Category == "bathroom" ] | order(_createdAt desc)'
);

export const LIVINGROOM_QUERY = defineQuery(
	'*[_type == "project" && Category == Livingroom] | order(_createdAt desc) '
);

export const KITCHEN_QUERY = defineQuery(
	'*[_type == "project" && Category == Kitchen] | order(_createdAt desc) '
);

export const SAUNA_QUERY = defineQuery(
	'*[_type == "project" && Category == Sauna] | order(_createdAt desc) '
);
