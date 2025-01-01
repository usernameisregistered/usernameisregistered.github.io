import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@/styles/katex/katex.min.css"
import "@/styles/katex/common.css"
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
