import type { Metadata } from "next";
import "./globals.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import grain from "../../../public/grain.jpg";
import React from "react";

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
		<html
			lang="ru"
			className=" bg-background">
			<body className="relative m-auto">
				<div
					className="absolute inset-0 opacity-5 w-full h-full min-h-screen -z-1 mb-10 pb-16 "
					style={{
						backgroundImage: `url(${grain.src})`,
						backgroundSize: "100%",
						backgroundRepeat: "repeat",
					}}
				/>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
