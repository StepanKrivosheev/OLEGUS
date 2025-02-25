import Image from "next/image";
import Link from "next/link";
import Card from "../../components/Card";
import CardList from "../../components/CardList";
import Hero from "../../components/Hero";

export default function Home() {
	return (
		<main>
			<Hero />
			<div className=""></div>

			<CardList />
		</main>
	);
}
