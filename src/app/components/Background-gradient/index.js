"use client";
import { useEffect } from "react";

export default function Backgroundgradient() {
  useEffect(() => {
    const loadGradient = async () => {
      // Dynamically load the script only once
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/greentfrapp/pocoloco@minigl/minigl.js";
      script.async = true;

      script.onload = () => {
        // @ts-ignore because "Gradient" is a global added by the script
        if (typeof Gradient !== "undefined") {
          const gradient = new Gradient();
          gradient.initGradient("#canvas");
        }
      };

      document.body.appendChild(script);

      // Optional: cleanup script on unmount
      return () => {
        document.body.removeChild(script);
      };
    };

    loadGradient();
  }, []);

  return (
    <div>
      <div className="background--custom gradient">
        <canvas id="canvas" className="h-9/20 sm:h-3/5" />
      </div>
    </div>
  );
}
