export interface GameContextProps {
  isAppearanceModalOpen: boolean;
  setAppearanceModalOpen: (isOpen: boolean) => void;
  players: any[]; // Replace 'any' with your Player type
  setPlayers: (players: any[]) => void;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  // Add other game states and functions here (e.g., currentTurn, properties, etc.)
}
