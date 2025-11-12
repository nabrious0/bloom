import type { Route } from "./+types/home";
import Hero from "~/components/home/Hero";
import ReviewMarquee from "~/components/home/reviews/ReviewMarquee";
import SubscriptionSection from "~/components/home/subscription/SubscriptionSection";
import PurchaseSection from "~/components/home/purchase/PurchaseSection";
import Navbar from "~/components/navbar/Navbar";
import { useCallback, useState } from "react";
import { NavbarHeightProvider, useNavbarHeightContext } from "~/components/navbar/NavbarHeightContext";

export function meta({}: Route.MetaArgs) {
	return [{ title: "bloom - coffee you crave" }, { name: "description", content: "Welcome to React Router!" }];
}

const PageContent = () => {
	const { navbarHeight, setNavbarHeight } = useNavbarHeightContext();

	const handleNavbarHeightChange = useCallback((heightValue: number) => {
		setNavbarHeight(heightValue);
	}, []);

	const scrollTo = (id: string) => {
		const section = document.getElementById(id);
		if (section) {
			let offset = navbarHeight + 28;

			if (id === "subscriptionSection") {
				offset = 0;
			}

			const y = section.getBoundingClientRect().top + window.scrollY - offset;
			window.scrollTo({ top: y, behavior: "smooth" });
		}
	};

	return (
		<>
			<Navbar scrollTo={scrollTo} onHeightChange={handleNavbarHeightChange} />
			<Hero />
			<ReviewMarquee />
			<SubscriptionSection />
			<PurchaseSection />
			<div className="py-10 text-center font-zalando-sans-expanded font-bold">~ this is a temporary footer ~</div>
		</>
	);
};

export default function Home() {
	return (
		<>
			<NavbarHeightProvider>
				<PageContent />
			</NavbarHeightProvider>
		</>
	);
}
