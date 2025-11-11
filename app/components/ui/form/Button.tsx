import type { ReactNode } from "react";
import { Link } from "react-router";

interface ButtonProps {
	href?: string;
	color?: "primary" | "secondary";
	size?: "md" | "lg";
	children: ReactNode;
}

const buttonClasses: string = "relative inline-flex justify-center items-center cursor-pointer bg-gradient-to-t bg-white";
let buttonColors: string;
let innerRingColor: string;
let dropShadowClasses: string;
let buttonSize: string;

const Button = ({ href, children, color, size }: ButtonProps) => {
	switch (color) {
		case "primary":
			buttonColors = "from-brown-200 to-brown-50 text-shadow-2xs text-shadow-white/55";
			innerRingColor = "border-brown-100/85";
			dropShadowClasses = "shadow-sm shadow-black/10";
			break;
		case "secondary":
			buttonColors = "from-brown-900 to-brown-700 text-brown-50 text-shadow-2xs text-shadow-black/55";
			innerRingColor = "border-brown-50/16";
			dropShadowClasses = "shadow-sm shadow-black/6";
			break;
	}
	switch (size) {
		case "md":
			buttonSize = "px-5 py-1.5 min-h-[32px] rounded-xl";
			break;
		case "lg":
			buttonSize = "px-10 py-1.5 min-h-[52px] text-xl rounded-2xl";
			break;
		default:
			buttonSize = "px-5 py-1.5 min-h-[32px] rounded-xl";
			break;
	}
	return (
		<>
			{href ? (
				<Link className={`${buttonClasses} ${buttonColors} ${buttonSize}`} to={href}>
					{children}
				</Link>
			) : (
				<button className={`${buttonClasses} ${buttonColors} ${buttonSize}`}>
					<div className={`absolute -inset-px border border-black/30 ${size === "lg" ? "rounded-[17px]" : "rounded-[13px]"} pointer-events-none ${dropShadowClasses}`} />
					<div className={`absolute inset-0 overflow-hidden pointer-events-none ${size === "lg" ? "rounded-2xl" : "rounded-xl"}`}>
						<div className={`h-full w-full border rounded-[inherit] blur-[0.5px] ${innerRingColor}`} />
					</div>
					{children}
				</button>
			)}
		</>
	);
};

export default Button;
