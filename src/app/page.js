import Hero from "./components/Hero";
import LogoClouds from "./components/LogoClouds";
import FeaturesSection from "./components/StickyScroll/sticky-scroll-reveal-demo";
import Portfolio from "./components/Portoflio";
import Pricing from "./components/Pricing";
import Stats from "./components/Stats";
import Support from "./components/Support";
import Backgroundgradient from "./components/Background-gradient";
import { Poppins } from "next/font/google";
const popins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

export default function Background() {
  return (
    <div
      className={`whole-body-content webdigit ${popins.className} font-semibold`}
    >
      {/* <div className="background--custom gradient">
        <!-- aici ajustes cand-e sus sau jos sa se duca gradient-ul -->
        <canvas id="canvas" className="h-9/20 sm:h-3/5" />
      </div>
      <script src="https://cdn.jsdelivr.net/gh/greentfrapp/pocoloco@minigl/minigl.js"></script>
      <script>
        var gradient = new Gradient(); gradient.initGradient("#canvas");
      </script> */}
      <Backgroundgradient />
      <Hero />
      <div className="LogoClouds">
        <LogoClouds />
      </div>
      <div className="StickyScroll">
        <FeaturesSection />
      </div>
      <div className="Portfolio">
        <Portfolio />
      </div>
      <div className="Pricing">
        <Pricing />
      </div>
      <div className="Stats">
        <Stats />
      </div>
      <div className="Support">
        <Support />
      </div>
    </div>
  );
}
