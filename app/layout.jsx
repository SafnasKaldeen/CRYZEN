import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cryzen Next App",
  description: `This cryzen is a gaming update platform where you can get an update of all the regsitered games in the world.
  We are using RAWG Api to get all the details`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      {children}
    </html>
  );
}
