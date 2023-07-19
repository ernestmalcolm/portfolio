import "./globals.css";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata = {
  title: "Accountable",
  description: "AI powered accounting software, Accountable",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
