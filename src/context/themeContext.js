import { useContext } from "react";
import { createContext } from "react";

export const ThemeContext = createContext({
    themeMode: "dark",
    changeTheme: ()=>{}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext);
}