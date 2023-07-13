import "../styles/globals.css";

import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </>
    </html>
  );
}
