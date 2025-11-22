import { CoffeeIcon, HouseIcon, InfoIcon, PackageIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface NavbarProps {
	scrollTo: (id: string) => void;
	onHeightChange: (height: number) => void;
}

const Navbar = ({ scrollTo, onHeightChange }: NavbarProps) => {
	const navRef = useRef<HTMLDivElement>(null);

	// navbar height measurement

	const measureNav = () => {
		if (navRef.current) {
			const navMeasuredHeight = navRef.current.offsetHeight;

			onHeightChange(navMeasuredHeight);
		}
	};

	// measure the height of navbar on initial load

	useEffect(() => {
		measureNav();
	}, []);

	// measure the height of navbar on resize

	useEffect(() => {
		const handleResize = () => {
			measureNav();
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			<div className="fixed z-90 inset-x-0">
				<motion.div initial={{ translateY: -10, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} transition={{ type: "spring", damping: 8, delay: 1 }}>
					<nav className="max-w-7xl px-4 mx-auto pt-5">
						<div ref={navRef} className="bg-black/50 py-2 px-2 rounded-2xl ring ring-black/60 border border-white/10 shadow-sm shadow-black/40 backdrop-blur-sm backdrop-saturate-300">
							<div className="flex flex-wrap md:flex-nowrap">
								<div className="flex w-full mt-1 mb-2 md:ms-1 md:mt-0 md:mb-0 md:w-[unset]">
									<div className="w-30 my-auto mx-auto md:mx-[unset] drop-shadow-sm drop-shadow-black/60">
										<img src="bloom.svg" />
									</div>
								</div>
								<div className="flex justify-end w-full md:ms-auto">
									<div className="flex justify-end flex-wrap w-full md:flex-nowrap">
										<div className="w-[50%] sm:w-[50%] md:w-[unset] text-center">
											<button onClick={() => scrollTo("heroSection")} className="cursor-pointer w-full flex justify-center items-center text-shadow-sm text-shadow-black/10 h-full py-1 px-4 rounded-lg gap-2 text-white/95 transition-all ease-linear hover:bg-brown-50/8 active:bg-brown-50/10">
												<div className="drop-shadow-sm drop-shadow-black/10 text-lg">
													<HouseIcon weight="duotone" />
												</div>
												<div>Home</div>
											</button>
										</div>
										<div className="w-[50%] sm:w-[50%] md:w-[unset] text-center">
											<button onClick={() => scrollTo("reviewSection")} className="cursor-pointer w-full flex justify-center items-center text-shadow-sm text-shadow-black/10 h-full py-1 px-4 rounded-lg gap-2 text-white/95 transition-all ease-linear hover:bg-brown-50/8 active:bg-brown-50/10">
												<div className="drop-shadow-sm drop-shadow-black/10 text-lg">
													<InfoIcon weight="duotone" />
												</div>
												<div>About Us</div>
											</button>
										</div>
										<div className="w-[100%] sm:w-[50%] md:w-[unset] text-center">
											<button onClick={() => scrollTo("subscriptionSection")} className="cursor-pointer w-full flex justify-center items-center text-shadow-sm text-shadow-black/10 h-full py-1 px-4 rounded-lg gap-2 text-white/95 transition-all ease-linear hover:bg-brown-50/8 active:bg-brown-50/10">
												<div className="drop-shadow-sm drop-shadow-black/10 text-lg">
													<PackageIcon weight="duotone" />
												</div>
												<div>Bloom Box</div>
											</button>
										</div>
										<div className="w-[100%] sm:w-[50%] md:w-[unset] text-center">
											<button onClick={() => scrollTo("purchaseSection")} className="cursor-pointer w-full flex justify-center items-center text-shadow-sm text-shadow-black/10 h-full py-1 px-4 rounded-lg gap-2 text-white/95 transition-all ease-linear hover:bg-brown-50/8 active:bg-brown-50/10">
												<div className="drop-shadow-sm drop-shadow-black/10 text-lg">
													<CoffeeIcon weight="duotone" />
												</div>
												<div>One-Time Purchase</div>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</nav>
				</motion.div>
			</div>
		</>
	);
};

export default Navbar;
