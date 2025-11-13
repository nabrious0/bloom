import { ArrowRightIcon, XIcon } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";

const desktopAnimations = {
	visible: {
		y: 0,
		scale: 1,
		opacity: 1,
		filter: "blur(0)",
		transition: {
			delay: 2,
		},
	},
	hidden: {
		y: 30,
		scale: 0.8,
		opacity: 0,
		filter: "blur(4px)",
	},
};

const mobileAnimations = {
	visible: {
		y: 0,
		scale: 1,
		opacity: 1,
		filter: "blur(0)",
		transition: {
			delay: 2,
		},
	},
	hidden: {
		y: 30,
		scale: 0.8,
		opacity: 0,
		filter: "blur(4px)",
	},
};

const FictionalAlert = () => {
	const [isVisible, setIsVisible] = useState(true);

	return (
		<>
			<AnimatePresence>
				{isVisible && (
					<>
						<motion.div key="mobileFictionalAlert" variants={mobileAnimations} initial="hidden" animate="visible" exit="hidden" className="fixed flex z-[999] lg:hidden inset-x-0 bottom-0">
							<div className="max-w-xl mx-auto w-full p-4">
								<div className="p-4 bg-gradient-to-t from-indigo-50 to-white text-indigo-950 rounded-2xl shadow-sm shadow-indigo-950/20 ring-[1.5px] ring-indigo-950/30">
									<div className="flex flex-col">
										<div className="mb-3">
											You are viewing <span className="font-zalando-sans-expanded font-bold text-indigo-800">bloom</span>, this project is <span className="font-zalando-sans-expanded font-bold text-indigo-800">fictional</span>, made by <span className="font-zalando-sans-expanded font-bold text-indigo-800">nabrious</span> for portfolio work.
										</div>
										<div className="flex flex-wrap gap-y-2 -mx-1">
											<div className="w-full sm:w-1/2 px-1">
												<button
													onClick={() => {
														setIsVisible(false);
													}}
													className="cursor-pointer w-full text-center shadow-sm shadow-indigo-950/20 text-shadow-xs text-shadow-black/30 bg-gradient-to-t from-zinc-600 to-zinc-500 text-white rounded-full flex justify-center items-center min-h-[36px] px-5 transition-all ease-linear duration-75 active:scale-96"
												>
													Dismiss
												</button>
											</div>
											<div className="w-full sm:w-1/2 px-1">
												<Link target="_blank" rel="noopener noreferrer" to={"https://github.com/nabrious0/bloom"} className="w-full text-center shadow-sm shadow-indigo-950/20 text-shadow-xs text-shadow-black/30 bg-gradient-to-t from-indigo-600 to-indigo-500 text-white rounded-full flex justify-center items-center min-h-[36px] px-5 transition-all ease-linear duration-75 active:scale-96">
													<div className="me-2">View on GitHub</div>
													<div className="text-xl drop-shadow-xxs drop-shadow-black/30">
														<ArrowRightIcon weight="bold" />
													</div>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
						<motion.div className="hidden lg:flex fixed inset-x-0 mx-auto mb-5 bottom-0 justify-center z-[999]" key="desktopFictionalAlert" variants={desktopAnimations} initial="hidden" animate="visible" exit="hidden">
							<div className="max-w-6xl mx-4 font-medium bg-gradient-to-t from-indigo-50 to-white text-indigo-950 rounded-full shadow-sm shadow-indigo-950/20 ring-[1.5px] ring-indigo-950/30">
								<div className="flex items-center h-full px-1.5 py-1.5">
									<div className="me-2">
										<button
											onClick={() => {
												setIsVisible(false);
											}}
											className="flex justify-center items-center cursor-pointer text-xl text-indigo-700 h-[36px] w-[36px] rounded-full transition-all ease-linear duration-75 hover:bg-indigo-600/10 active:bg-indigo-600/15 active:scale-96"
										>
											<XIcon weight="bold" />
										</button>
									</div>
									<div className="me-4">
										You are viewing <span className="font-zalando-sans-expanded font-bold text-indigo-800">bloom</span>, this project is <span className="font-zalando-sans-expanded font-bold text-indigo-800">fictional</span>, made by <span className="font-zalando-sans-expanded font-bold text-indigo-800">nabrious</span> for portfolio work.
									</div>
									<div className="shrink-0">
										<Link target="_blank" rel="noopener noreferrer" to={"https://github.com/nabrious0/bloom"} className="text-center shadow-sm shadow-indigo-950/20 text-shadow-xs text-shadow-black/30 bg-gradient-to-t from-indigo-600 to-indigo-500 text-white rounded-full flex justify-center items-center min-h-[36px] px-5 transition-all ease-linear duration-75 active:scale-96">
											<div className="me-2">View on GitHub</div>
											<div className="text-xl drop-shadow-xxs drop-shadow-black/30">
												<ArrowRightIcon weight="bold" />
											</div>
										</Link>
									</div>
								</div>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
};

export default FictionalAlert;
