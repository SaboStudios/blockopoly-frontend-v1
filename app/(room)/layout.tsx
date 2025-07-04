import { GameProvider } from "@/context/game-context";


export default function RoomLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <GameProvider>
            <main className="w-full overflow-x-hidden">
                {children}
            </main>
        </GameProvider>
    );
}