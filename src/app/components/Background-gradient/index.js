export default function Backgroundgradient() {
  return (
    <div>
      <div className="background--custom gradient">
        {/* <!-- aici ajustes cand-e sus sau jos sa se duca gradient-ul --> */}
        <canvas id="canvas" className="h-9/20 sm:h-3/5" />
      </div>
      <script src="https://cdn.jsdelivr.net/gh/greentfrapp/pocoloco@minigl/minigl.js"></script>
      <script>
        var gradient = new Gradient(); gradient.initGradient("#canvas");
      </script>
    </div>
  );
}
