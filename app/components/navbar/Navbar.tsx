import { CoffeeIcon, InfoIcon, PackageIcon } from "@phosphor-icons/react";
import NavigationLink from "./NavigationLink";
import { motion } from "motion/react";

const Navbar = () => {
	return (
		<>
			<div className="fixed z-90 inset-x-0">
				<motion.div initial={{ translateY: -10, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} transition={{ type: "spring", damping: 8, delay: 1 }}>
					<nav className="max-w-7xl px-4 mx-auto pt-5">
						<div className="bg-black/50 py-2 px-2 rounded-xl ring ring-black/60 border border-white/10 shadow-sm shadow-black/40 backdrop-blur-sm backdrop-saturate-300">
							<div className="flex flex-wrap md:flex-nowrap">
								<div className="flex w-full mt-1 mb-2 md:ms-1 md:mt-0 md:mb-0 md:w-[unset]">
									<div className="w-30 my-auto mx-auto md:mx-[unset] drop-shadow-sm drop-shadow-black/60">
										<img src="bloom.svg" />
									</div>
								</div>
								<div className="flex justify-end w-full md:ms-auto">
									<div className="flex justify-end flex-wrap w-full md:flex-nowrap">
										<div className="w-[50%] sm:w-[33.33%] md:w-[unset] text-center">
											<NavigationLink to={"/"} title="About Us" icon={<InfoIcon weight="duotone" />} />
										</div>
										<div className="w-[50%] sm:w-[33.33%] md:w-[unset] text-center">
											<NavigationLink to={"/"} title="Bloom Box" icon={<PackageIcon weight="duotone" />} />
										</div>
										<div className="w-[100%] sm:w-[33.33%] md:w-[unset] text-center">
											<NavigationLink to={"/"} title="One-Time Orders" icon={<CoffeeIcon weight="duotone" />} />
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
