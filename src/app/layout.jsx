import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import CardProvider from "@/context/CardProvider";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Food Resturent",
    template: "%s || Food Resturent",
  },

  description: "Best FastFood is Dinajpur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <header className="px-5 py-2 items-center flex justify-between gap-5 bg-stone-800">
          <Link href="/">
            {/* <img src="/logo.png" alt="" className="w-[60px] rounded-xl" /> */}
            <Image
              width={60}
              height={20}
              src="/logo.png"
              alt=""
              className="w-[60px] rounded-xl"
            ></Image>
          </Link>
          <div className="space-x-5">
            <Link className=" p-2 rounded-xl bg-amber-400" href="/foods">
              Food
            </Link>
            <Link className=" p-2 rounded-xl bg-amber-400" href="/reviews">
              Reviews
            </Link>
            <Link className=" p-2 rounded-xl bg-amber-400" href="/feedback">
             Feedbacks
            </Link>
       
          </div>
        </header>
        <main className="px-5 py-8">
          <CardProvider>{children}</CardProvider>
        </main>
      </body>
    </html>
  );
}
