import type { Route } from "./+types/home";
import Hero from "~/components/home/Hero";
import ReviewMarquee from "~/components/home/reviews/ReviewMarquee";
import SubscriptionSection from "~/components/home/subscription/SubscriptionSection";
import PurchaseSection from "~/components/home/purchase/PurchaseSection";

export function meta({}: Route.MetaArgs) {
	return [{ title: "bloom - coffee you crave" }, { name: "description", content: "Welcome to React Router!" }];
}

export default function Home() {
	return (
		<>
			<Hero />
			<ReviewMarquee />
			<SubscriptionSection />
			<PurchaseSection />
			<div className="py-10 text-center font-zalando-sans-expanded font-bold">~ this is a temporary footer ~</div>
		</>
	);
}
