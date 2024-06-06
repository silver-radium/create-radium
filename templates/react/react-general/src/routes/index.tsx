import { ThemeToggle } from "@/ui/components/theme-toggle";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => <Home />,
});

function Home() {
  return (
    <div
      className={"relative flex h-screen flex-col items-center justify-center"}
    >
      <h1 className={"text-5xl"}>Radium React.js Template</h1>
      <p className={"font-sm my-2 text-zinc-200"}>
        A Template Used by Teams for almost every React.js Project..
      </p>
      <ThemeToggle />
    </div>
  );
}
