import Button from "~/components/ui/form/Button";
import CoffeeTypeCard from "./CoffeeTypeCard";
import { ArrowRightIcon, CirclesThree, CirclesThreeIcon, CirclesThreePlusIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";

const PurchaseSection = () => {
	return (
		<>
			<div id="purchaseSection">
				<motion.div whileInView={{ translateY: 0, opacity: 1 }} viewport={{ once: true }} initial={{ translateY: 120, opacity: 0 }}>
					<div className="max-w-3xl mx-auto md:text-center mb-5 px-4">
						<div className="text-5xl font-zalando-sans-expanded font-semibold mb-4">One-Time Orders</div>
						<div className="mb-4">Discover the specific roast that brings your day into perfect focus. Every bag offers the same dedication to quality, peak freshness, and complex flavor we're known for. Find your blend, one bag at a time.</div>
						<div>
							<div className="block font-zalando-sans-expanded font-semibold">- These are our community's favorite brews -</div>
						</div>
					</div>
				</motion.div>
				<div className="max-w-5xl mx-auto mb-5 px-4 mt-19">
					<div className="flex flex-wrap gap-y-16 -mx-3 mb-5">
						<motion.div className="w-full md:w-[33.33%] px-3" initial={{ translateY: 90, opacity: 0 }} whileInView={{ translateY: 0, opacity: 1 }} transition={{ duration: 0.6, type: "spring" }} viewport={{ once: true }}>
							<CoffeeTypeCard
								name="Morning Light (Light Roast)"
								description="
								Our lightest offering is pure clarity. 
								Roasted to preserve the bean's wild, 
								delicate qualities, it delivers an invigoratingly bright, 
								complex cup that finishes cleanly. Perfect for pour-overs.
							"
								origin="Single Origin: Ethiopia Yirgacheffe"
								flavor="Vibrant, Floral, Tea-like. Notes of Jasmine, Lemon Zest, and Peach."
								iconUrl="coffee.png"
							/>
						</motion.div>
						<motion.div className="w-full md:w-[33.33%] px-3" initial={{ translateY: 90, opacity: 0 }} whileInView={{ translateY: 0, opacity: 1 }} transition={{ duration: 0.6, type: "spring" }} viewport={{ once: true }}>
							<CoffeeTypeCard
								name="Clarity Blend (Medium Roast - Blend)"
								description="
								Our signature everyday blend is designed for smooth focus. 
								It balances rich, comforting flavors with a clean, gentle acidity—ideal for any brewing method, 
								from drip to French press.
							"
								origin="Signature Blend: Brazil & Guatemala"
								flavor="Balanced, Sweet, Approachable. Notes of Milk Chocolate, Toffee, and Toasted Almond."
								iconUrl="blend.png"
							/>
						</motion.div>
						<motion.div className="w-full md:w-[33.33%] px-3" initial={{ translateY: 90, opacity: 0 }} whileInView={{ translateY: 0, opacity: 1 }} transition={{ duration: 0.6, type: "spring" }} viewport={{ once: true }}>
							<CoffeeTypeCard
								name="Evening Harvest (Medium-Dark Roast)"
								description="
								A versatile, deeply satisfying roast that maintains its nuance. 
								Crafted to excel as a rich, creamy espresso shot or a beautiful, 
								bold foundation for milk-based drinks.
							"
								origin="Single Origin: Colombian Supremo"
								flavor="Rich, Smooth, Full-Bodied. Notes of Dark Cherry, Caramel, and Cocoa."
								iconUrl="coffee.png"
							/>
						</motion.div>
					</div>
					<motion.div className="w-max mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }} viewport={{ once: true }}>
						<Button size="md" color="secondary">
							<div className="text-lg me-2 drop-shadow-xxs drop-shadow-black/55">
								<CirclesThreePlusIcon weight="bold" />
							</div>
							<div>Explore All Our Offerings</div>
							<div className="text-lg ms-2 drop-shadow-xxs drop-shadow-black/55">
								<ArrowRightIcon weight="bold" />
							</div>
						</Button>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default PurchaseSection;
