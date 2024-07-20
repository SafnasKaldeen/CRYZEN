import { Suspense } from "react";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cryzen Next App",
  description: `This Cryzen is a gaming update platform where you can get updates on all the registered games in the world.
  We are using RAWG API to get all the details.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="stylesheet" href={inter.href} />
      </head>
      <body>
        <Suspense
          fallback={
            <div className="loader">
              <div className="spinner"></div>
            </div>
          }
        >
          {children}
        </Suspense>
      </body>
    </html>
  );
}
