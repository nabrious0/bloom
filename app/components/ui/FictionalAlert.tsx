import { ArrowRightIcon, XIcon } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";

const animations = {
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
						<motion.div className="flex fixed inset-x-0 mx-auto mb-4 lg:mb-5 bottom-0 justify-center z-999" key="fictionalAlert" variants={animations} initial="hidden" animate="visible" exit="hidden">
							<div className="max-w-6xl mx-4 bg-linear-to-t from-indigo-50 to-white text-indigo-950 rounded-2xl lg:rounded-full shadow-sm shadow-indigo-950/20 ring-[1.5px] ring-indigo-950/30">
								<div className="lg:flex lg:flex-row items-center h-full p-4 lg:p-1.5">
									<div className="hidden lg:block me-2">
										<button
											onClick={() => {
												setIsVisible(false);
											}}
											className="flex justify-center items-center cursor-pointer text-xl text-indigo-700 h-[36px] w-[36px] rounded-full transition-all ease-linear duration-75 hover:bg-indigo-600/10 active:bg-indigo-600/15 ring-2 ring-transparent focus:outline-0 focus-visible:ring-blue-400 active:scale-96"
										>
											<XIcon weight="bold" />
										</button>
									</div>
									<div className="me-4 mb-2 lg:mb-0">
										You are viewing <span className="font-zalando-sans-expanded font-bold text-indigo-800">bloom</span>, this project is <span className="font-zalando-sans-expanded font-bold text-indigo-800">fictional</span>, made by <span className="font-zalando-sans-expanded font-bold text-indigo-800">nabrious</span> for portfolio work.
									</div>
									<div className="flex flex-wrap gap-y-2 lg:block -mx-1">
										<div className="w-full md:w-1/2 px-1">
											<motion.button
												whileHover={{ scale: 1.04 }}
												whileTap={{ scale: 0.97 }}
												transition={{ type: "spring", bounce: 0.65 }}
												onClick={() => {
													setIsVisible(false);
												}}
												className="cursor-pointer lg:hidden w-full lg:w-[unset] text-center font-medium shadow-sm shadow-indigo-950/20 text-shadow-xs text-shadow-black/30 bg-linear-to-t from-gray-600 to-gray-500 text-white rounded-full flex justify-center items-center min-h-[36px] px-5"
											>
												Dismiss
											</motion.button>
										</div>
										<div className="w-full md:w-1/2 lg:w-full px-1">
											<motion.div tabIndex={-1} className="rounded-full" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", bounce: 0.65 }}>
												<Link target="_blank" rel="noopener noreferrer" to={"https://github.com/nabrious0/bloom"} className="relative group w-full lg:w-[unset] text-center font-medium shadow-sm shadow-indigo-950/20 text-shadow-xs text-shadow-black/30 bg-linear-to-t from-indigo-600 to-indigo-500 text-white rounded-full flex justify-center items-center min-h-[36px] px-5 focus:outline-0">
													<div className="opacity-0 group-focus-visible:opacity-100 pointer-events-none absolute -inset-1 border-2 border-blue-400 rounded-full" />
													<div className="me-2">View on GitHub</div>
													<div className="text-xl drop-shadow-xxs drop-shadow-black/30">
														<ArrowRightIcon weight="bold" />
													</div>
												</Link>
											</motion.div>
										</div>
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
