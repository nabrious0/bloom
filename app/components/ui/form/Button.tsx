import type { ReactNode } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

interface ButtonProps {
	href?: string;
	color?: "primary" | "secondary";
	size?: "md" | "lg";
	children: ReactNode;
}

const buttonClasses: string = "group relative inline-flex justify-center items-center cursor-pointer bg-gradient-to-t bg-white focus:outline-none";
let buttonColors: string;
let ringShadowColors: string;
let buttonSize: string;

const Button = ({ href, children, color, size }: ButtonProps) => {
	switch (color) {
		case "primary":
			buttonColors = "from-brown-200 to-brown-50 text-shadow-2xs text-shadow-white/55";
			ringShadowColors = "0 0 0 1px rgb(0, 0, 0, 30%), inset 0 0 1px 0.5px color-mix(in srgb, var(--color-brown-50), transparent 0%), 0 1px 2px rgb(0, 0, 0, 20%)";
			break;
		case "secondary":
			buttonColors = "from-brown-900 to-brown-700 text-brown-50 text-shadow-2xs text-shadow-black/55";
			ringShadowColors = "0 0 0 1px rgb(0, 0, 0, 30%), inset 0 0 1px 0.5px color-mix(in srgb, var(--color-brown-50), transparent 70%), 0 1px 2px rgb(0, 0, 0, 20%)";
			break;
	}
	switch (size) {
		case "md":
			buttonSize = "px-5 py-1.5 min-h-[32px] rounded-xl";
			break;
		case "lg":
			buttonSize = "px-10 py-1.5 min-h-[52px] text-xl rounded-2xl";
			break;
	}
	return (
		<>
			{href ? (
				<Link className={`${buttonClasses} ${buttonColors} ${buttonSize}`} to={href}>
					{children}
				</Link>
			) : (
				<>
					{/* prettier-ignore */}
					<motion.button 
						whileHover={{ scale: 1.04 }} 
						whileTap={{ scale: 0.97 }} 
						transition={{ type: "spring", bounce: 0.65 }} 
						className={`${buttonClasses} ${buttonColors} ${buttonSize}`}
						style={{
							boxShadow: `${ringShadowColors}`
						}}
					>
						{/* prettier-ignore */}
						<div 
							className="opacity-0 group-focus-visible:opacity-100 pointer-events-none absolute -inset-1 border-2 border-blue-400"
							style={{ borderRadius: ( size === "md" ? "16px" : "20px" ) }}
						/>
						{children}
					</motion.button>
				</>
			)}
		</>
	);
};

export default Button;
