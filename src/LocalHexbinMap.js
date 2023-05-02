// https://observablehq.com/@d3/hexbin-map@190
import define1 from "./components/ColorLegend";

function _1(md){return(
  md`# Hexbin Map
  
  This map shows approximately 3,000 locations of Walmart stores. The hexagon area represents the number of stores in the vicinity, while the color represents the median age of these stores. Older stores are red, and newer stores are blue.`
  )}
  
  function _chart(d3,width,height,legend,color,data,topojson,us,hexbin,radius)
  {
    const svg = d3.create("svg")
        .attr("viewBox", [0, 0, width, height]);
  
    svg.append("g")
        .attr("transform", "translate(610,20)")
        .append(() => legend({
          color, 
          title: data.title, 
          width: 260, 
          tickValues: d3.utcYear.every(5).range(...color.domain()),
          tickFormat: d3.utcFormat("%Y")
        }));
  
    svg.append("path")
        .datum(topojson.mesh(us, us.objects.states))
        .attr("fill", "none")
        .attr("stroke", "#777")
        .attr("stroke-width", 0.5)
        .attr("stroke-linejoin", "round")
        .attr("d", d3.geoPath());
  
    svg.append("g")
      .selectAll("path")
      .data(data)
      .join("path")
        .attr("transform", d => `translate(${d.x},${d.y})`)
        .attr("d", d => hexbin.hexagon(radius(d.length)))
        .attr("fill", d => color(d.date))
        .attr("stroke", d => d3.lab(color(d.date)).darker())
      .append("title")
        .text(d => `${d.length.toLocaleString()} stores
  ${d.date.getFullYear()} median opening`);
  
    return svg.node();
  }
  
  
  async function _data(d3,FileAttachment,projection,parseDate,hexbin)
  {
    const data = d3.tsvParse(await FileAttachment("walmart.tsv").text(), d => {
      const p = projection(d);
      p.date = parseDate(d.date);
      return p;
    });
    return Object.assign(
      hexbin(data)
        .map(d => (d.date = new Date(d3.median(d, d => d.date)), d))
        .sort((a, b) => b.length - a.length),
      {title: "Median opening year"}
    );
  }
  
  
  function _projection(d3){return(
  d3.geoAlbersUsa().scale(1300).translate([487.5, 305])
  )}
  
  function _parseDate(d3){return(
  d3.utcParse("%m/%d/%Y")
  )}
  
  function _color(d3,data){return(
  d3.scaleSequential(d3.extent(data, d => d.date), d3.interpolateSpectral)
  )}
  
  function _radius(d3,data,hexbin){return(
  d3.scaleSqrt([0, d3.max(data, d => d.length)], [0, hexbin.radius() * Math.SQRT2])
  )}
  
  function _hexbin(d3,width,height){return(
  d3.hexbin().extent([[0, 0], [width, height]]).radius(10)
  )}
  
  function _width(){return(
  975
  )}
  
  function _height(){return(
  610
  )}
  
  function _us(FileAttachment){return(
  FileAttachment("states-albers-10m.json").json()
  )}
  
  function _topojson(require){return(
  require("topojson-client@3")
  )}
  
  function _d3(require){return(
  require("d3@6", "d3-hexbin@0.2")
  )}
  
  export default function define(runtime, observer) {
    const main = runtime.module();
    function toString() { return this.url; }
    const fileAttachments = new Map([
      ["walmart.tsv", {url: new URL("./data/walmartEdited.tsv", import.meta.url), mimeType: "text/tab-separated-values", toString}],
      ["states-albers-10m.json", {url: new URL("./data/UnitedStates.json", import.meta.url), mimeType: "application/json", toString}]
    ]);
    main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
    main.variable(observer()).define(["md"], _1);
    main.variable(observer("chart")).define("chart", ["d3","width","height","legend","color","data","topojson","us","hexbin","radius"], _chart);
    main.variable(observer("data")).define("data", ["d3","FileAttachment","projection","parseDate","hexbin"], _data);
    main.variable(observer("projection")).define("projection", ["d3"], _projection);
    main.variable(observer("parseDate")).define("parseDate", ["d3"], _parseDate);
    main.variable(observer("color")).define("color", ["d3","data"], _color);
    main.variable(observer("radius")).define("radius", ["d3","data","hexbin"], _radius);
    main.variable(observer("hexbin")).define("hexbin", ["d3","width","height"], _hexbin);
    main.variable(observer("width")).define("width", _width);
    main.variable(observer("height")).define("height", _height);
    main.variable(observer("us")).define("us", ["FileAttachment"], _us);
    main.variable(observer("topojson")).define("topojson", ["require"], _topojson);
    main.variable(observer("d3")).define("d3", ["require"], _d3);
    const child1 = runtime.module(define1);
    main.import("legend", child1);
    return main;
  }