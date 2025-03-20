import { FlickeringGrid } from "@/components/ui/flickering-grid";

export const BackgroundGrid = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/[0.01] to-transparent"></div>
      <FlickeringGrid
        className="w-full h-full"
        squareSize={6}
        gridGap={8}
        color="rgb(0, 119, 255)"
        maxOpacity={0.05}
        flickerChance={0.03}
      />
    </div>
  );
}; 