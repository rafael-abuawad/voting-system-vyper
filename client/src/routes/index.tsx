import { createFileRoute } from "@tanstack/react-router";
import { Voting } from "@/components/voting";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="text-center">
      <Voting />
    </div>
  );
}
