import type { Metadata } from "next";
import "@/src/app/(root)/globals.css";

export const metadata: Metadata = {
	title: "Oleg und Söhne",
	description: "Owner Oleg Krivosheev, designed by Stepan Krivosheev",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<body>{children}</body>
		</html>
	);
}
