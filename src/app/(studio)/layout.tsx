"use client";
import type { Metadata } from "next";
import "@/src/app/(root)/globals.css";
import React from "react";

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
