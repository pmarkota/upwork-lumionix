import { ThemeProvider } from "next-themes";
import "nextra-theme-docs/style.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
