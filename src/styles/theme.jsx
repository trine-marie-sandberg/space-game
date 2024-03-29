import { ThemeProvider } from "styled-components";
import "../assets/fontawsome/css/all.css";

const theme = {
    color: {
        black: "var(--color-black)",
        grey: "var(--color-grey)",
        blue: "var(--color-blue)",
    }
}

export const Theme = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
export default Theme;