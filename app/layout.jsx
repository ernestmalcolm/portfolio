import "./globals.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata = {
  title: "Ernest's Portfolio",
  description: "Hi! I'm Ernest Mwinchumu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/*<link rel="icon" href="../public/images/EM.svg" sizes="any" />*/}
        <title>Ernest's Portfolio Website</title>
      </head>
      <body>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
