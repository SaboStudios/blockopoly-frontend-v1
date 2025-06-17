import { DM_Sans, Orbitron } from "next/font/google";
import "@/styles/globals.css";
import { getMetadata } from "@/utils/getMeatadata";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron-sans",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${orbitron.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
