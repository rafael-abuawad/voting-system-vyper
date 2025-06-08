import { ConnectKitButton } from "connectkit";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header className="border-b ">
      <div className="p-2 px-4 flex gap-2 justify-between items-center container mx-auto">
        <h1 className="text-2xl font-bold">Voting System</h1>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <ConnectKitButton />
        </div>
      </div>
    </header>
  );
}
