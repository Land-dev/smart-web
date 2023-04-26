import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@d3/hexbin-map";

function HexbinMap() {
  const chartRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "chart") return new Inspector(chartRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={chartRef} />
      <p>Credit: <a href="https://observablehq.com/@d3/hexbin-map">Hexbin Map by D3</a></p>
    </>
  );
}

export default HexbinMap;