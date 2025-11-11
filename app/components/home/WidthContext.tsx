import { createContext, useContext } from "react";

interface WidthContextType {
	currentWidth: number;
}

const WidthContext = createContext<WidthContextType | undefined>(undefined);

export const useHeroWidth = () => {
	const context = useContext(WidthContext);

	if (context === undefined) {
		throw new Error("useHeroWidth must be used within the Hero component's WidthContext.Provider");
	}
	return context;
};

export default WidthContext;
