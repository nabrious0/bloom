import React from "react";
import ReviewCard from "./ReviewCard";
import { CheckIcon, CoffeeIcon, HeartbeatIcon, HeartIcon, MoneyIcon, SparkleIcon, ThumbsUpIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";

interface ScrollingDuplicatorProps {}

const ReviewMarquee = () => {
	function ScrollDuplicator({ children }: React.PropsWithChildren<ScrollingDuplicatorProps>) {
		const originalChildren = React.Children.toArray(children);

		const duplicatedChildren = originalChildren.map((child, index) => {
			if (React.isValidElement(child)) {
				return React.cloneElement(child, {
					key: `${child.key || index}-duplicate`,
				});
			}
			return <React.Fragment key={`${index}-duplicate`}>{child}</React.Fragment>;
		});

		const finalChildren = originalChildren.concat(duplicatedChildren);

		return <div className="flex items-center gap-6 py-2 w-max  animate-scrollReviews mx-auto hover:[animation-play-state:paused]">{finalChildren}</div>;
	}

	return (
		<>
			<motion.div initial={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} transition={{ delay: 1 }}>
				<div className="px-10 mt-10 mb-20">
					<div className="flex flex-wrap -mx-2">
						<div className="w-full md:w-1/2 px-2 relative z-[22] [text-shadow:0_0_8px_var(--color-brown-50),0_0_8px_var(--color-brown-50),0_0_8px_var(--color-brown-50),0_0_8px_var(--color-brown-50),0_0_8px_var(--color-brown-50),0_0_8px_var(--color-brown-50),0_0_8px_var(--color-brown-50),0_0_8px_var(--color-brown-50),0_0_8px_var(--color-brown-50)]">
							<div className="mt-8 mb-4">
								<div className="text-5xl font-zalando-sans-expanded font-semibold mb-4">About Us</div>
								<div className="mb-4">For us, coffee is an experience of vivid simplicity.</div>
								<div className="mb-4">
									Bloom was created to <span className="font-zalando-sans-expanded font-semibold">elevate</span> the morning, providing a moment of serene focus before the rush. We select beans that offer a clean, bright, and memorable profile, transforming your mug into a source of immediate clarity. It's the sophisticated flavor that grounds you and the clean finish that lets you move forward. This is coffee that is designed to center your mind and prepare you to act.
								</div>
								<div>
									But the true test is in the cup. <span className="block font-zalando-sans-expanded font-semibold">- See what our customers are saying -</span>
								</div>
							</div>
						</div>
						<div className="w-full -mt-20 md:mt-0 md:w-1/2 px-2">
							<div className="relative">
								<motion.div className="absolute left-1/2 -translate-x-1/2 w-30 lg:w-37 2xl:w-60" initial={{ translateY: 20, opacity: 0 }} whileInView={{ translateY: 0, opacity: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ delay: 1 }}>
									<img
										className="
										transition-all ease-linear -translate-x-25 lg:-translate-x-28 2xl:-translate-x-45 -rotate-30 border-8 border-b-30 2xl:border-b-50 border-white rounded-sm shadow-lg shadow-brown-800/40 w-full"
										src="coffee-lander-1.jpg"
										alt=""
									/>
								</motion.div>
								<motion.div className="absolute left-1/2 -translate-x-1/2 w-30 lg:w-37 2xl:w-60" initial={{ translateY: 20, opacity: 0 }} whileInView={{ translateY: 0, opacity: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ delay: 1.5 }}>
									<img
										className="
										transition-all ease-linear translate-x-25 lg:translate-x-28 2xl:translate-x-45 rotate-30 border-8 border-b-30 2xl:border-b-50 border-white rounded-sm shadow-lg shadow-brown-800/40 w-full"
										src="coffee-lander-2.jpg"
										alt=""
									/>
								</motion.div>
								<motion.div className="absolute left-1/2 -translate-x-1/2 w-30 lg:w-37 2xl:w-60" initial={{ translateY: 20, opacity: 0 }} whileInView={{ translateY: 0, opacity: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ delay: 2 }}>
									<img
										className="
										transition-all ease-linear -translate-y-8 lg:-translate-y-18 2xl:-translate-y-20 border-8 border-b-30 2xl:border-b-50 border-white rounded-sm shadow-lg shadow-brown-800/40 w-full"
										src="coffee-lander-4.jpg"
										alt=""
									/>
								</motion.div>
								<motion.div className="absolute z-[21] left-1/2 -translate-x-1/2 w-30 lg:w-37 2xl:w-60" initial={{ translateY: 20, opacity: 0 }} whileInView={{ translateY: 0, opacity: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ delay: 3 }}>
									<img
										className="
										transition-all ease-linear translate-y-13 translate-x-20 lg:translate-y-16 2xl:translate-y-40 2xl:translate-x-30 rotate-40 border-8 border-b-30 2xl:border-b-50 border-white rounded-sm shadow-lg shadow-brown-800/40 w-full"
										src="coffee-lander-5.jpg"
										alt=""
									/>
								</motion.div>
								<motion.div className="absolute z-[21] left-1/2 -translate-x-1/2 w-30 lg:w-37 2xl:w-60" initial={{ translateY: 20, opacity: 0 }} whileInView={{ translateY: 0, opacity: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ delay: 2.5 }}>
									<img
										className="
										transition-all ease-linear translate-y-13 -translate-x-20 lg:translate-y-16 2xl:translate-y-40 -rotate-40 border-8 border-b-30 2xl:border-b-50 border-white rounded-sm shadow-lg shadow-brown-800/40 w-full"
										src="coffee-lander-3.jpg"
										alt=""
									/>
								</motion.div>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
			<motion.div className="relative z-[30]" initial={{ translateY: 50, opacity: 0 }} whileInView={{ translateY: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.6 }} viewport={{ once: true, amount: 0.5 }}>
				<div className="relative overflow-x-hidden w-full mask-x-from-95% motion-reduce:hidden">
					<ScrollDuplicator>
						<div className="w-[400px]">
							{/* prettier-ignore */}
							<ReviewCard 
							rating={5}
							reviewerName="River Stone" 
							reviewerPictureUrl="https://placehold.co/800/693b27/ffffff?text=RS"
							tag={
								<div className="text-sm flex items-center gap-1 opacity-70">
									<div>
										<SparkleIcon weight="bold"/>
									</div>
									<div>
										Loyal Customer
									</div>
								</div>
							}
							review="
								I used to drink coffee just for the jolt, but Bloom changed my routine completely. 
								I picked up the 'Clarity Blend,' and it lives up to the name. 
								The flavor is a sophisticated mix of subtle cocoa and bright citrus notes.
							" 
						/>
						</div>
						<div className="w-[400px]">
							{/* prettier-ignore */}
							<ReviewCard
							rating={5}
							reviewerName="Rowan Field" 
							reviewerPictureUrl="https://placehold.co/800/b55c27/ffffff?text=RF"
							tag={
								<div className="text-sm flex items-center gap-1 opacity-70">
									<div>
										<HeartIcon weight="bold"/>
									</div>
									<div>
										Gourmet Coffee Lover
									</div>
								</div>
							}
							review="
								I've finally found my perfect morning coffee. 
								The beans are genuinely fresh, and you can taste the quality.
								This is the definition of a great start to the day. 
								It's light years better than anything I used to buy. 
								Highly recommend Bloom!
							" 
						/>
						</div>
						<div className="w-[400px]">
							{/* prettier-ignore */}
							<ReviewCard
							rating={4.5}
							reviewerName="Skylar Jade" 
							reviewerPictureUrl="https://placehold.co/800/275569/ffffff?text=SJ"
							tag={
								<div className="text-sm flex items-center gap-1 opacity-70">
									<div>
										<CoffeeIcon weight="bold"/>
									</div>
									<div>
										Daily Espresso Drinker
									</div>
								</div>
							}
							review="
								The 'Evening Harvest' blend is a game-changer. 
								It has deep, nuanced notes. I taste hints of caramel and dark cherry—but the coffee remains incredibly smooth and easy to drink. 
								It's sophisticated flavor without the bitterness. 
								Bloom really knows how to roast.
							" 
						/>
						</div>
						<div className="w-[400px]">
							{/* prettier-ignore */}
							<ReviewCard 
							rating={5}
							reviewerName="Onyx Grove" 
							reviewerPictureUrl="https://placehold.co/800/3b6927/ffffff?text=OG"
							tag={
								<div className="text-sm flex items-center gap-1 opacity-70">
									<div>
										<MoneyIcon weight="bold"/>
									</div>
									<div>
										Value-Conscious Connoisseur
									</div>
								</div>
							}
							review="
								I used to cycle through different brands, but I'm completely settled on Bloom. 
								The quality is consistent bag after bag, and it always tastes exceptional in my espresso machine. 
								It's truly premium coffee at a price that feels accessible. 
								My daily standard now.
							" 
						/>
						</div>
						<div className="w-[400px]">
							{/* prettier-ignore */}
							<ReviewCard
							rating={4}
							reviewerName="Iris Claro" 
							reviewerPictureUrl="https://placehold.co/800/720000/ffffff?text=IC"
							tag={
								<div className="text-sm flex items-center gap-1 opacity-70">
									<div>
										<ThumbsUpIcon weight="bold"/>
									</div>
									<div>
										Mindful Drinker
									</div>
								</div>
							}
							review="
								The aroma alone is stunning—it's like sunshine and a quiet morning all in one. 
								Bloom manages to be both vibrant and calming at the same time. 
								It's the perfect way to anchor my day. 
								Truly my favorite discovery this year.
							" 
						/>
						</div>
						<div className="w-[400px]">
							{/* prettier-ignore */}
							<ReviewCard
							rating={4.5}
							reviewerName="Blair Axton" 
							reviewerPictureUrl="https://placehold.co/800/512c5c/ffffff?text=BA"
							tag={
								<div className="text-sm flex items-center gap-1 opacity-70">
									<div>
										<HeartbeatIcon weight="bold"/>
									</div>
									<div>
										Health-Conscious Drinker
									</div>
								</div>
							}
							review="
								I used to get stomach irritation or the afternoon crash with other brands. 
								Not with Bloom. The flavor is impeccably smooth, and the energy is clean and sustained. 
								I get all the focus without any of the negative side effects. 
								Perfectly clean coffee.
							" 
						/>
						</div>
					</ScrollDuplicator>
				</div>
			</motion.div>

			{/* Reduce Motion Accessibility */}

			<div className="hidden gap-y-4 flex-wrap px-2 max-w-[1980px] mx-auto motion-reduce:flex">
				<div className="w-full sm:w-1/2 md:w-[33.33%] lg:w-1/4 2xl:w-1/6 px-2">
					{/* prettier-ignore */}
					<ReviewCard 
							rating={5}
							reviewerName="River Stone" 
							reviewerPictureUrl="https://placehold.co/800/693b27/ffffff?text=RS"
							tag={
								<div className="text-sm flex items-center gap-1 opacity-70">
									<div>
										<SparkleIcon weight="bold"/>
									</div>
									<div className="truncate">
										Loyal Customer
									</div>
								</div>
							}
							review="
								I used to drink coffee just for the jolt, but Bloom changed my routine completely. 
								I picked up the 'Clarity Blend,' and it lives up to the name. 
								The flavor is a sophisticated mix of subtle cocoa and bright citrus notes.
							" 
						/>
				</div>
				<div className="w-full sm:w-1/2 md:w-[33.33%] lg:w-1/4 2xl:w-1/6 px-2">
					{/* prettier-ignore */}
					<ReviewCard
							rating={5}
							reviewerName="Rowan Field" 
							reviewerPictureUrl="https://placehold.co/800/b55c27/ffffff?text=RF"
							tag={
								<div className="text-sm flex items-center gap-1 opacity-70">
									<div>
										<HeartIcon weight="bold"/>
									</div>
									<div className="truncate">
										Gourmet Coffee Lover
									</div>
								</div>
							}
							review="
								I've finally found my perfect morning coffee. 
								The beans are genuinely fresh, and you can taste the quality.
								This is the definition of a great start to the day. 
								It's light years better than anything I used to buy. 
								Highly recommend Bloom!
							" 
						/>
				</div>
				<div className="w-full sm:w-1/2 md:w-[33.33%] lg:w-1/4 2xl:w-1/6 px-2">
					{/* prettier-ignore */}
					<ReviewCard
							rating={4.5}
							reviewerName="Skylar Jade" 
							reviewerPictureUrl="https://placehold.co/800/275569/ffffff?text=SJ"
							tag={
								<div className="text-sm flex items-center gap-1 opacity-70">
									<div>
										<CoffeeIcon weight="bold"/>
									</div>
									<div className="truncate">
										Daily Espresso Drinker
									</div>
								</div>
							}
							review="
								The 'Evening Harvest' blend is a game-changer. 
								It has deep, nuanced notes. I taste hints of caramel and dark cherry—but the coffee remains incredibly smooth and easy to drink. 
								It's sophisticated flavor without the bitterness. 
								Bloom really knows how to roast.
							" 
						/>
				</div>
				<div className="w-full sm:w-1/2 md:w-[33.33%] lg:w-1/4 2xl:w-1/6 px-2">
					{/* prettier-ignore */}
					<ReviewCard 
							rating={5}
							reviewerName="Onyx Grove" 
							reviewerPictureUrl="https://placehold.co/800/3b6927/ffffff?text=OG"
							tag={
								<div className="text-sm flex items-center gap-1 opacity-70">
									<div>
										<MoneyIcon weight="bold"/>
									</div>
									<div className="truncate">
										Value-Conscious Connoisseur
									</div>
								</div>
							}
							review="
								I used to cycle through different brands, but I'm completely settled on Bloom. 
								The quality is consistent bag after bag, and it always tastes exceptional in my espresso machine. 
								It's truly premium coffee at a price that feels accessible. 
								My daily standard now.
							" 
						/>
				</div>
				<div className="w-full sm:w-1/2 md:w-[33.33%] lg:w-1/4 2xl:w-1/6 px-2">
					{/* prettier-ignore */}
					<ReviewCard
							rating={4}
							reviewerName="Iris Claro" 
							reviewerPictureUrl="https://placehold.co/800/720000/ffffff?text=IC"
							tag={
								<div className="text-sm flex items-center gap-1 opacity-70">
									<div>
										<ThumbsUpIcon weight="bold"/>
									</div>
									<div className="truncate">
										Mindful Drinker
									</div>
								</div>
							}
							review="
								The aroma alone is stunning—it's like sunshine and a quiet morning all in one. 
								Bloom manages to be both vibrant and calming at the same time. 
								It's the perfect way to anchor my day. 
								Truly my favorite discovery this year.
							" 
						/>
				</div>
				<div className="w-full sm:w-1/2 md:w-[33.33%] lg:w-1/4 2xl:w-1/6 px-2">
					{/* prettier-ignore */}
					<ReviewCard
							rating={4.5}
							reviewerName="Blair Axton" 
							reviewerPictureUrl="https://placehold.co/800/512c5c/ffffff?text=BA"
							tag={
								<div className="text-sm flex items-center gap-1 opacity-70">
									<div>
										<HeartbeatIcon weight="bold"/>
									</div>
									<div className="truncate">
										Health-Conscious Drinker
									</div>
								</div>
							}
							review="
								I used to get stomach irritation or the afternoon crash with other brands. 
								Not with Bloom. The flavor is impeccably smooth, and the energy is clean and sustained. 
								I get all the focus without any of the negative side effects. 
								Perfectly clean coffee.
							" 
						/>
				</div>
			</div>
		</>
	);
};

export default ReviewMarquee;
