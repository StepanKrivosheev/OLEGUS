// "use client";

// import { NextStudio } from "next-sanity/studio";
// import { StudioProvider, StudioLayout } from "sanity";

// import config from "@/sanity.config";

// export default function StudioPage() {
// 	return (
// 		<NextStudio config={config}>
// 			<StudioProvider config={config}>
// 				{/* Put components here and you'll have access to the same React hooks as Studio gives you when writing plugins */}
// 				<StudioLayout />
// 			</StudioProvider>
// 		</NextStudio>
// 	);
// }
/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from "next-sanity/studio";
import config from "../../../../../sanity.config";

export const dynamic = "force-dynamic";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
	return <NextStudio config={config} />;
}
