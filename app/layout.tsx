import Footer from "./components/Footer";
import Header from "./components/Header";
import { aboutMeData, pages } from "./data/data";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-[100vh]">
          <div>
            <Header data={aboutMeData} pages={pages} />
          </div>
          <main className="flex-auto sm:mb-32 mb-16">{children}</main>
          <div className="flex-initial">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
