import { ArrowRightIcon, ArrowsClockwiseIcon, BasketIcon, HandWithdrawIcon, HouseIcon, Newspaper, NewspaperClippingIcon, SketchLogoIcon, SparkleIcon } from "@phosphor-icons/react";
import Card from "../../ui/Card";
import SubscriptionBenefit from "./SubscriptionBenefit";
import Button from "~/components/ui/form/Button";
import { motion, useReducedMotion } from "motion/react";
import { useNavbarHeightContext } from "~/components/navbar/NavbarHeightContext";

const SubscriptionSection = () => {
	const { navbarHeight } = useNavbarHeightContext();

	return (
		<>
			<div id="subscriptionSection" className="relative z-[2] mb-12">
				{/* prettier-ignore */}
				<motion.div 
					layout
					initial={{ 
						height: 0
					}}
					whileInView={{ 
						height: "auto"
					}}
					viewport={{ 
						amount: 1, once: true
					}}
					transition={{ 
						duration: 2, delay: 1
					}}
					className="relative px-10 bg-brown-950 [box-shadow:0_1px_0_0_rgb(255,255,255,80%)] overflow-hidden"
				>
					<div className="absolute z-[2] -inset-x-10 bg-black/80 h-10 blur-sm top-0 -mt-10"></div>
					<div style={{ paddingTop: navbarHeight + 40 }} />
					<motion.div className="relative z-50" whileInView={{ translateY: 0, opacity: 1 }} viewport={{ once: true, amount: 0.1 }} initial={{ translateY: 120, opacity: 0 }}>
						<div className="max-w-3xl">
							<div className="text-5xl text-brown-50 font-zalando-sans-expanded font-semibold mb-4 [text-shadow:0_0_12px_rgb(0,0,0,40%),0_0_12px_rgb(0,0,0,40%),0_0_12px_rgb(0,0,0,40%)]">Bloom Box</div>
							<div className="mb-4 text-brown-50 [text-shadow:0_0_12px_rgb(0,0,0,40%),0_0_12px_rgb(0,0,0,40%),0_0_12px_rgb(0,0,0,40%),0_0_12px_rgb(0,0,0,40%),0_0_12px_rgb(0,0,0,40%),0_0_12px_rgb(0,0,0,40%)]">Never run out of inspiration. Bloom Box is our curated subscription service designed to ensure your coffee ritual is always fresh, engaging, and perfectly aligned with the changing seasons. It's your monthly opportunity to explore the newest and most exciting profiles from our roastery.</div>
						</div>
					</motion.div>
					<div className="max-w-3xl">
						<div className="flex flex-wrap gap-y-4 -mx-2">
							<div className="w-full sm:w-[50%] lg:w-[33.33%] px-2 z-[30]">
								{/* prettier-ignore */}
								<motion.div className="backdrop-blur-sm rounded-2xl h-full" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{ duration: 1.2 }} viewport={{once: true}}>
								<SubscriptionBenefit 
									icon={<SketchLogoIcon weight="duotone"/>} 
									title="Curated Selection" 
									description="Two perfectly-sized bags (e.g., 10 oz or 12 oz each) of freshly roasted, whole-bean coffee delivered monthly."
								/>
							</motion.div>
							</div>
							<div className="w-full sm:w-[50%] lg:w-[33.33%] px-2 z-[30]">
								{/* prettier-ignore */}
								<motion.div className="backdrop-blur-sm rounded-2xl h-full" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{ duration: 1.2 }} viewport={{once: true}}>
								<SubscriptionBenefit 
									icon={<ArrowsClockwiseIcon weight="duotone" />} 
									title="Rotating Variety" 
									description="One bag is a Signature Blend (a reliable favorite), and the second is a Seasonal/Limited Edition single-origin or experimental micro-lot."
								/>
							</motion.div>
							</div>
							<div className="w-full sm:w-[50%] lg:w-[33.33%] px-2 z-[30]">
								{/* prettier-ignore */}
								<motion.div className="backdrop-blur-sm rounded-2xl h-full" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{ duration: 1.2 }} viewport={{once: true}}>
								<SubscriptionBenefit 
									icon={<HandWithdrawIcon weight="duotone" />} 
									title="Free Shipping" 
									description="All Bloom Box deliveries include complimentary, carbon-neutral shipping."
								/>
							</motion.div>
							</div>
							<div className="w-full sm:w-[50%] lg:w-[33.33%] px-2 z-[30]">
								{/* prettier-ignore */}
								<motion.div className="backdrop-blur-sm rounded-2xl h-full" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{ duration: 1.2 }} viewport={{once: true}}>
								<SubscriptionBenefit 
									icon={<NewspaperClippingIcon weight="duotone" />} 
									title="The Bloom Note" 
									description="A printed card detailing the origin stories, flavor notes, and suggested brewing methods (pour-over vs. espresso) for each specific bean in the box."
								/>
							</motion.div>
							</div>
							<div className="w-full sm:w-[50%] lg:w-[33.33%] px-2 z-[30]">
								{/* prettier-ignore */}
								<motion.div className="backdrop-blur-sm rounded-2xl h-full" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{ duration: 1.2 }} viewport={{once: true}}>
								<SubscriptionBenefit 
									icon={<SparkleIcon weight="duotone" />} 
									title="Roaster's Exclusive Taste" 
									description="All Bloom Box deliveries include complimentary, carbon-neutral shipping."
								/>
							</motion.div>
							</div>
							<div className="w-full sm:w-[50%] lg:w-[33.33%] px-2 z-[30]">
								{/* prettier-ignore */}
								<motion.div className="backdrop-blur-sm rounded-2xl h-full" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{ duration: 1.2 }} viewport={{once: true}}>
								<SubscriptionBenefit 
									icon={<HouseIcon />} 
									title="Subscriber Discount" 
									description="A standing 15% discount on all a la carte gear purchases (grinders, brewers, filters) made through the Bloom website."
								/>
							</motion.div>
							</div>
						</div>
					</div>
					<div className="max-w-3xl mx-auto relative z-2">
						<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }}>
							<div className="flex justify-center mt-18">
								<Button color="primary" size="lg">
									<div className="text-2xl me-3 drop-shadow-xxs drop-shadow-white/55">
										<BasketIcon weight="bold" />
									</div>
									<div className="hidden md:block">Get your Personalized Bloom Box</div>
									<div className="block md:hidden">Shop Bloom Box</div>
									<div className="text-2xl ms-3 drop-shadow-xxs drop-shadow-white/55">
										<ArrowRightIcon weight="bold" />
									</div>
								</Button>
							</div>
						</motion.div>
					</div>
					{/* prettier-ignore */}
					<motion.div
						className="absolute top-0 start-0 end-0 w-full mask-b-from-50% h-1/2 md:top-0 md:start-[unset] md:w-full md:max-w-5xl md:h-full md:mask-b-from-100% md:mask-l-from-50% opacity-80 z-1" 
						initial={{ opacity: 0 }} 
						whileInView={{ opacity: 1 }} 
						viewport={{ amount: 0.4, once: true }} 
						transition={{ duration: 2 }} 
					>
						<div className="bg-center bg-no-repeat h-full" style={{backgroundImage: `url('box.jpg')`}}></div>
					</motion.div>
					<div className="absolute z-[2] -inset-x-10 bg-black h-10 blur-sm bottom-0 -mb-10"></div>
					<div style={{ paddingBottom: navbarHeight + 40 }} />
				</motion.div>
			</div>
		</>
	);
};

export default SubscriptionSection;
