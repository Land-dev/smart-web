import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "./runtime.js";
import define from "@component/LocalHexbinMap.js";

function Hex() {
    const chartRef = useRef();
  
    useEffect(() => {
      const runtime = new Runtime();
      runtime.module(define, name => {
        if (name === "chart") return new Inspector(chartRef.current);
      });
      return () => runtime.dispose();
    }, []);
  
    return (
      <>
        <div ref={chartRef} />
        <p>Credit: <a href="https://observablehq.com/@d3/hexbin-map">No</a></p>
      </>
    );
  }
  
  export default Hex;