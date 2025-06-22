import { dmSans, kronaOne, orbitron } from "@/components/shared/fonts";
import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/navbar";
import ScrollToTopBtn from "@/components/shared/scroll-to-top-btn";
import "@/styles/globals.css";
import { getMetadata } from "@/utils/getMeatadata";


export const metadata = getMetadata({
  title: "Blockopoly",
  description:
    "Blockopoly is a decentralized on-chain game inspired by the classic Monopoly game, built on Starknet. It allows players to buy, sell, and trade digital properties in a trustless gaming environment.",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${orbitron.variable} ${dmSans.variable} ${kronaOne.variable}`}>
      <body
        className={`antialiased bg-[#010F10] w-full`}
      >
        <NavBar />
        {children}
        <ScrollToTopBtn />
        <Footer />
      </body>
    </html>
  );
}
