import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

interface NavbarContextType {
	navbarHeight: number;
	setNavbarHeight: (height: number) => void;
}

const NavbarHeightContext = createContext<NavbarContextType | undefined>(undefined);

interface NavbarHeightProviderProps {
	children: ReactNode;
}

export const NavbarHeightProvider = ({ children }: NavbarHeightProviderProps) => {
	const [navbarHeight, setHeight] = useState(0);

	const setNavbarHeight = useCallback((height: number) => {
		setHeight(height);
	}, []);

	const contextValue = { navbarHeight, setNavbarHeight };

	return <NavbarHeightContext.Provider value={contextValue}>{children}</NavbarHeightContext.Provider>;
};

export const useNavbarHeightContext = () => {
	const context = useContext(NavbarHeightContext);

	if (context === undefined) {
		throw new Error("useNavbarHeightContext must be used within a NavbarHeightProvider");
	}

	return context;
};
