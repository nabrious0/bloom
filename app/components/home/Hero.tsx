import Button from "~/components/ui/form/Button";
import { ArrowRightIcon, BasketIcon, CoffeeIcon, FlowerTulipIcon } from "@phosphor-icons/react";
import LogoMarquee from "~/components/home/LogoMarquee";
import { useEffect, useRef, useState } from "react";
import WidthContext from "./WidthContext";
import { motion } from "motion/react";

const Hero = () => {
	const heroRef = useRef<HTMLDivElement | null>(null);
	const [width, setWidth] = useState(0);

	useEffect(() => {
		if (!heroRef.current) {
			return;
		}

		const handleResizer = (entries: ResizeObserverEntry[]) => {
			const newWidth = entries[0].contentRect.width;

			setWidth(newWidth);
		};

		const observer = new ResizeObserver(handleResizer);

		observer.observe(heroRef.current);

		return () => {
			observer.disconnect();
		};
	}, []);

	const contextValue = {
		currentWidth: width,
	};

	return (
		<>
			<div className="relative bg-[url('/hero.png')] bg-cover bg-center flex min-h-180 -mask-linear-180 mask-linear-from-90%">
				<div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] z-[1]" />
				<div ref={heroRef} className="absolute max-w-3xl w-full" />
				<div className="relative max-w-7xl mx-auto grow z-[2] py-10">
					<div className="flex flex-col h-full w-full justify-center">
						<div className="max-w-3xl px-4 pt-35 md:pt-0">
							<motion.div initial={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }}>
								<div className="text-5xl text-brown-50 mb-2 text-shadow-md text-shadow-black/50">
									Your coffee is about to <span className="font-zalando-sans-expanded font-semibold">bloom.</span>
								</div>
								<div className="text-lg text-brown-100 text-shadow-md mb-8">Experience the difference a truly fresh roast makes. Premium single-origins and perfectly balanced blends.</div>
							</motion.div>
							<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
								<div className="flex flex-wrap flex-col sm:flex-row gap-2.5">
									<Button color="primary">
										<div className="text-lg me-2 drop-shadow-xxs drop-shadow-white/55">
											<CoffeeIcon weight="bold" />
										</div>
										<div>
											Find <span className="font-medium underline underline-offset-2 decoration-2 decoration-brown-800/50">Your</span> Perfect Blend
										</div>
										<div className="text-lg ms-2 drop-shadow-xxs drop-shadow-white/55">
											<ArrowRightIcon weight="bold" />
										</div>
									</Button>
									<Button color="secondary">
										<div className="text-lg me-2 drop-shadow-xxs drop-shadow-black/55">
											<BasketIcon weight="bold" />
										</div>
										<div>Shop All Blends</div>
									</Button>
								</div>
							</motion.div>
							<motion.div initial={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} transition={{ delay: 1 }}>
								<div className="flex items-center gap-3 mt-8 mb-2 select-none">
									<div className="font-zalando-sans-expanded font-semibold text-white/60 tracking-wider">trusted by</div>
									<div className="grow border-b-2 border-white/20" />
								</div>
								<WidthContext.Provider value={contextValue}>
									<LogoMarquee />
								</WidthContext.Provider>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
