
var svgWidth = 1000;
var svgHeight = 600;


var chartMargin = {
  top: 25,
  right: 25,
  bottom: 25,
  left: 25
};

var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;


var svg = d3
  .select("scatter")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);


d3.csv("assets/data/data.csv").then(function(data) {
  console.log(data);


data.forEach(function(d) {
  d.healthcare = +d.healthcare;
  d.poverty = +d.poverty
});

svg.selectAll("dot")
  .data(data)
  .enter().append("circle")
  .attr("r", 5)
  .attr("cx", function (d) {
    return x(d.healthcare);
  })
  .attr("cy", function (d) {
    return y(d.poverty);
  })
  .attr("stroke", "#32CD32")
  .attr("stroke-width", 1.5)
  .attr("fill", "#FFFFFF");
});
