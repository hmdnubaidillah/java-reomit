import { Montserrat } from "next/font/google";
import "./globals.css";

import { Nav } from "@/components";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
