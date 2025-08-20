import { defineQuery } from "next-sanity";

export const PROJECT_QUERY = defineQuery(
	'*[_type == "project"] | order(date desc) '
);

export const IMAGES_QUERY = defineQuery(
	'*[_type == "project"]{"images": Images}'
);

export const IMAGES_FOR_GALLERY_QUERY = defineQuery(
	'*[_type == "project"]{"images" : ImagesForGallery}'
);

export const BATHROOM_QUERY = defineQuery(
	'*[_type == "project" && Category == "bathroom" ] | order(date desc)'
);

export const LIVINGROOM_QUERY = defineQuery(
	'*[_type == "project" && Category == Livingroom] | order(date desc) '
);

export const KITCHEN_QUERY = defineQuery(
	'*[_type == "project" && Category == Kitchen] | order(date desc) '
);

export const SAUNA_QUERY = defineQuery(
	'*[_type == "project" && Category == Sauna] | order(date desc) '
);
